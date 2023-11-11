import { Card } from '@/components/ui/card';

import { Button } from './ui/button';

function UserInfoCard() {
  return (
    <Card className='max-w-96 h-fit border px-2 pt-8 pb-2'>
      <div className='flex flex-col gap-2'>
        <div>Chef Dreams</div>
        <p>u/thestygiansun</p>
        <div className='flex flex-row'>
          <div className='flex flex-col basis-1/2'>
            <p>Karma</p>
            <p>4800</p>
          </div>
          <div className='flex flex-col basis-1/2'>
            <p>Join Date</p>
            <p>January 18, 2012</p>
          </div>
        </div>
        <Button>New Post</Button>
      </div>
    </Card>
  );
}
export default UserInfoCard;
