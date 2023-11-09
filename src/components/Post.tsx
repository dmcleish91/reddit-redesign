import { BookMarked, Share, ThumbsUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from './ui/button';

interface PostProps {
  title: string;
  subredditName: string;
  username: string;
  postAge: string;
}
// outline outline-1 outline-slate-300 hover:outline-slate-600
function Post({ title, subredditName, username, postAge }: PostProps) {
  const navigate = useNavigate();
  return (
    <div className='flex h-28 flex-row gap-2 bg-white cursor-pointer hover:bg-gray-50 sm:gap-4 md:h-20 items-center'>
      <div className='flex flex-col gap-2 sm:ml-4 ml-1'>
        <Button variant={'ghost'} size={'icon'} className='h-7 w-7'>
          <ThumbsUp strokeWidth={1.6} />
        </Button>
        <Button variant={'ghost'} size={'icon'} className='h-7 w-7'>
          <BookMarked strokeWidth={1.5} />
        </Button>

        <Button variant={'ghost'} size={'icon'} className='h-7 w-7 sm:hidden'>
          <Share strokeWidth={1.4} />
        </Button>
      </div>
      <div
        className='flex gap-2 grow py-2 h-full'
        onClick={() => {
          navigate('/b/' + subredditName + '/comments/' + postAge);
        }}>
        <div
          className='h-18 order-last ml-auto mr-1 w-24 shrink-0 rounded bg-stone-800 sm:order-none sm:ml-0'
          id='post-preview'></div>
        <div className='flex min-w-0 flex-col justify-between'>
          <Link className='text-xs font-semibold sm:hidden' to={'/b/' + subredditName}>
            {subredditName}
          </Link>
          <p className='line-clamp-2 font-semibold'>{title}</p>
          <div className='hidden flex-row items-center gap-1 sm:flex'>
            <Link className='text-xs font-semibold text-gray-700' to={'/b/' + subredditName}>
              {subredditName}
            </Link>
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
    </div>
  );
}
export default Post;
