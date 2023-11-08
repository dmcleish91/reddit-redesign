import CommunityCard from '@/components/CommunityCard';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { Vibrate, VibrateOff } from 'lucide-react';
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

function Community() {
  // TODO?: Database call to pull recent posts for a specific subreddit
  const { id } = useParams();
  const [isHovered, setIsHovered] = React.useState(false);

  const buttonText = isHovered ? 'Leave' : 'Joined';

  return (
    <>
      <div className='flex flex-row p-4 items-center gap-4'>
        <p className='tracking-wide font-semibold'>PlaceHolder: {id}</p>
        <Button
          size={'sm'}
          className='rounded-2xl w-16'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {buttonText}
        </Button>
        <NotificationToggle />
      </div>
      <div className='flex flex-grow flex-row bg-zinc-200' id='main-content'>
        <div className='w-full space-y-3 p-3 2xl:w-10/12'>
          <Outlet />
        </div>
        <div className='hidden space-y-3 p-3 2xl:block 2xl:w-2/12'>
          <CommunityCard community={id!} />
        </div>
      </div>
    </>
  );
}
export default Community;

function NotificationToggle() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <Toggle
      className='rounded-2xl'
      variant='outline'
      aria-label='Toggle italic'
      onClick={() => setToggle((prev) => !prev)}>
      {toggle ? <Vibrate className='h-4 w-4' /> : <VibrateOff className='h-4 w-4' />}
    </Toggle>
  );
}
