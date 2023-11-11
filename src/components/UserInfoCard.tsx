import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home } from 'lucide-react';

import { Button } from './ui/button';

function UserInfoCard() {
  return (
    <Card className='max-w-96 h-fit border border-slate-300'>
      <CardHeader className='px-8'>
        <div className='flex flex-row items-center'>
          <Home strokeWidth={1.25} className='mr-2' />
          <CardTitle className='text-lg'>Home</CardTitle>
        </div>
        <CardDescription>Your personal page. Come here to check in with your favorite communities.</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-2 px-8'>
        <Button variant={'default'} size={'sm'} className='rounded-xl'>
          Create Post
        </Button>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          Create Community
        </Button>
      </CardContent>
    </Card>
  );
}
export default UserInfoCard;
