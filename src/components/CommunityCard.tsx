import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home } from 'lucide-react';
import { Button } from './ui/button';

export default function CommunityCard() {
  return (
    <Card className='max-w-96 h-64 border border-slate-400'>
      <CardHeader>
        <div className='flex flex-row items-center'>
          <Home strokeWidth={1.25} className='mr-2' />
          <CardTitle className='text-lg'>Home</CardTitle>
        </div>
        <CardDescription>Your personal page. Come here to check in with your favorite communities.</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
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
