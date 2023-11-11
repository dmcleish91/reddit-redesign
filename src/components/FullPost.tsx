import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { BarChart2, Flag, Forward, MessageSquare, SaveAll, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Textarea } from './ui/textarea';

function FullPost() {
  const { postid } = useParams();
  // fetch post data from data and comments
  console.log(postid);
  return (
    <div className='space-y-1'>
      <PostCard />
      <CreateComment />
      <PostComments />
    </div>
  );
}
export default FullPost;

function PostCard() {
  return (
    <>
      <Card className='w-full'>
        <CardContent className='grid gap-4 py-2'>
          <div>
            <p className='font-normal'>Posted by u/username 9 hours ago</p>
            <p className='text-xl font-semibold'>LPT: Take care of your back as early in life as possible</p>
          </div>
          <div className='rounded-md border p-1'>
            <p className='max-w-4xl'>
              Treat your back well. Make sure to lift with your knees. Maintain a good posture when sitting. If you have
              to sit for long periods of time at work, make sure to get up and walk. I did not follow the instructions
              above and I’m not even 40 with herniated discs in my spine. I’m in constant pain and regret not taking
              care of my back when I should have.
            </p>
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
          <PostComment
            userName='@TheStygianSun'
            createdAt='6 years ago'
            comment='The gag with Bart almost grabbing a brick, scissors, or a sharp bottle is also pretty funny.'
            votesAmount={256}
          />
          <PostComment
            userName='@RunsWithKnives'
            createdAt='5 years ago'
            comment='What episode is that OP? I want to watch it.'
            votesAmount={1024}
            className='ml-10'
          />
          <PostComment
            userName='@BartSimpsonFan'
            createdAt='5 years ago'
            comment='@RunsWithKnives Same!'
            votesAmount={24}
            className='ml-10'
          />
        </div>
      </CardContent>
    </Card>
  );
}

function CreateComment() {
  return (
    <Card>
      <CardContent className='flex flex-col gap-1 px-6 py-2'>
        <p className='text-sm'>
          Comment as <span className='font-semibold tracking-wide'>TheStygianSun</span>
        </p>
        <Textarea className='w-full' placeholder='What are your thoughts?' />
        <div className='self-end'>
          <Button size={'sm'}>Comment</Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface PostCommentProps {
  userName: string;
  createdAt: string;
  comment: string;
  votesAmount: number;
  className?: string;
}

function PostComment({ userName, createdAt, comment, votesAmount, className }: PostCommentProps) {
  return (
    <div className={cn('flex flex-row gap-2', className)}>
      <div>
        <Avatar className='h-8 w-8'>
          <AvatarImage src='https://github.com/dmcleish91.png' alt='@dmcleish91' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-row gap-1 items-center'>
          <p className='font-semibold'>{userName}</p>
          <p className='text-xs font-semibold text-slate-600'>{createdAt}</p>
        </div>

        <p>{comment}</p>
        <div className='flex mt-1 gap-2'>
          <Button size={'icon'} variant={'ghost'} className='h-5 w-5'>
            <ThumbsUp />
          </Button>
          <p className='text-xs font-semibold text-slate-600'>{votesAmount}</p>
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
