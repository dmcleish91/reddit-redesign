import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart2, Flag, Forward, MessageSquare, SaveAll, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

function FullPost() {
  const { postid } = useParams();
  // fetch post data from data and comments
  console.log(postid);
  return (
    <div className='space-y-1'>
      <PostCard />
      <PostComments />
    </div>
  );
}
export default FullPost;

function PostCard() {
  return (
    <>
      <Card className='w-full'>
        <CardHeader className='py-2'>
          <CardDescription>Posted by u/username 9 hours ago</CardDescription>
          <CardTitle className='text-xl'>LPT: Take care of your back as early in life as possible</CardTitle>
        </CardHeader>
        <CardContent className='grid gap-4 py-2'>
          <div className='space-y-4 rounded-md'>
            <p>
              Treat your back well. Make sure to lift with your knees. Maintain a good posture when sitting. If you have
              to sit for long periods of time at work, make sure to get up and walk.
            </p>
            <p>I did not follow the instructions above and I’m not even 40 with herniated discs in my spine.</p>
            <p>I’m in constant pain and regret not taking care of my back when I should have.</p>
          </div>
        </CardContent>
        <CardFooter className='py-2'>
          <div className='flex flex-row gap-3'>
            <div className='flex flex-row items-center'>
              <Button size={'sm'} variant={'outline'}>
                <MessageSquare className='mr-2' /> 272 Comments
              </Button>
            </div>
            <div className='flex flex-row items-center'>
              <Button size={'sm'} variant={'outline'}>
                <ThumbsUp />
              </Button>
            </div>
            <div className='flex flex-row items-center'>
              <Button size={'sm'} variant={'outline'}>
                <Forward className='mr-2' /> Share
              </Button>
            </div>
            <div className='flex flex-row items-center'>
              <Button size={'sm'} variant={'outline'}>
                <SaveAll className='mr-2' /> Save
              </Button>
            </div>
            <div className='flex flex-row items-center'>
              <Button size={'sm'} variant={'outline'}>
                <Flag className='mr-2' /> Report
              </Button>
            </div>
            <div className='flex flex-row items-center'>
              <Button size={'sm'} variant={'ghost'}>
                <BarChart2 className='mr-2' /> 2.2M
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

function PostComments() {
  return (
    <Card className='w-full'>
      <CardContent className='grid gap-4 py-2'>
        <div className='space-y-4 rounded-md'>
          <Comment />
        </div>
      </CardContent>
    </Card>
  );
}

function Comment() {
  return (
    <div className='flex flex-row gap-2'>
      <div>
        <Avatar className='h-8 w-8'>
          <AvatarImage src='https://github.com/dmcleish91.png' alt='@dmcleish91' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-row gap-1 items-center'>
          <p className='font-semibold'>@TheStygianSun</p>
          <p className='text-xs font-semibold text-slate-600'>6 years ago</p>
        </div>

        <p>The gag with Bart almost grabbing a brick, scissors, or a sharp bottle is also pretty funny.</p>
        <div className='flex mt-1 gap-2'>
          <Button size={'icon'} variant={'ghost'} className='h-5 w-5'>
            <ThumbsUp />
          </Button>
          <Button size={'icon'} variant={'ghost'} className='h-5 w-5'>
            <ThumbsDown />
          </Button>
          <Button size={'sm'} variant={'ghost'} className='h-5'>
            Reply
          </Button>
        </div>
      </div>
    </div>
  );
}
