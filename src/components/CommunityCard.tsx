import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';

interface CommunityCardProps {
  community: string;
}

function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function CommunityCard({ community }: CommunityCardProps) {
  return (
    <Card className='max-w-96 h-fit border border-slate-400'>
      <CardHeader className='px-8'>
        <div className='flex flex-row items-center'>
          <CardTitle className='text-lg'>About {capitalizeFirstLetter(community)}</CardTitle>
        </div>
        <CardDescription>
          <div className='divide-y-2'>
            <div className='flex flex-row justify-between py-4'>
              <p>Created</p>
              <p>Date</p>
            </div>
            <div className='flex flex-row justify-between py-4'>
              <p>Members</p>
              <p>Count</p>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-2 px-8'>
        <Button variant={'default'} size={'sm'} className='rounded-xl'>
          Join
        </Button>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          Create Post
        </Button>
      </CardContent>
    </Card>
  );
}
export default CommunityCard;
