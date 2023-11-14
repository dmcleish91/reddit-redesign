import { Card } from '@/components/ui/card';

import { Button } from './ui/button';

function UserInfoCard() {
  return (
    <Card className='relative max-w-96 h-fit border px-6 pt-8 pb-2'>
      <div className='absolute w-full h-24 bg-slate-500 top-0 left-0'></div>
      <div className='flex flex-col gap-2'>
        <div className='w-24 h-24 bg-black rounded z-50'></div>
        <div className='space-y-2'>
          <p className='font-medium'>Chef Dreams</p>
          <p className='text-xs font-medium'>u/TheStygianSun</p>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col basis-1/2'>
            <p className='font-medium text-sm'>Karma</p>
            <p className='text-xs'>4800</p>
          </div>
          <div className='flex flex-col basis-1/2'>
            <p className='font-medium text-sm'>User Since</p>
            <p className='text-xs'>January 18, 2012</p>
          </div>
        </div>
        <Button variant={'secondary'}>New Post</Button>
      </div>
    </Card>
  );
}
export default UserInfoCard;
