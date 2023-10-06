import { Heart, LifeBuoy, Share } from 'lucide-react';
import { Button } from './ui/button';

interface PostProps {
  title: string;
  subredditName: string;
  username: string;
  postAge: string;
}

function Post({ title, subredditName, username, postAge }: PostProps) {
  return (
    <div className='flex h-28 flex-row gap-2 rounded bg-white p-2 sm:gap-4 md:h-20'>
      <div className='flex flex-col gap-2'>
        <Button variant={'ghost'} size={'icon'} className='h-7 w-7'>
          <Heart />
        </Button>
        <Button variant={'ghost'} size={'icon'} className='h-7 w-7'>
          <LifeBuoy />
        </Button>

        <Button variant={'ghost'} size={'icon'} className='h-7 w-7 sm:hidden'>
          <Share />
        </Button>
      </div>
      <div className='h-18 order-last ml-auto w-24 shrink-0 bg-stone-800 sm:order-none sm:ml-0' id='post-preview'></div>
      <div className='flex min-w-0 flex-col justify-between'>
        <p className='text-xs font-semibold sm:hidden'>{subredditName}</p>
        <p className='line-clamp-2 font-semibold'>{title}</p>
        <div className='hidden flex-row items-center gap-1 sm:flex'>
          <p className='text-xs font-semibold text-gray-700'>{subredditName}</p>
          <p className='text-xs text-gray-600'>
            • Posted by <span className='font-semibold hover:cursor-pointer hover:text-sky-700'>{username}</span>
          </p>
          <p className='text-xs text-gray-600'> • {postAge}</p>
        </div>
        <div className='flex flex-row gap-x-4'>
          <p className='text-sm font-semibold text-gray-700'>435 Comments</p>
          <p className='hidden text-sm font-semibold text-gray-700 sm:flex'>Share</p>
        </div>
      </div>
    </div>
  );
}
export default Post;
