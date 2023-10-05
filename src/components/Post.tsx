import { Heart, LifeBuoy } from 'lucide-react';
import { Button } from './ui/button';

function Post() {
  return (
    <div className='flex flex-row gap-2 sm:gap-4 p-2 h-20 max-w-full bg-white rounded'>
      <div className='flex flex-col gap-2'>
        <Button variant={'ghost'} size={'icon'} className='h-7 w-7'>
          <Heart />
        </Button>
        <Button variant={'ghost'} size={'icon'} className='h-7 w-7'>
          <LifeBuoy />
        </Button>
      </div>
      <div className='h-18 w-24 bg-stone-800' id='post-preview'></div>
      <div className='flex flex-col justify-between'>
        <p className='font-semibold truncate'>
          Hours After Gag Order, Trump Launches Fresh Vitriol Against New York Judge - It’s only a matter of time before
          Donald Trump crosses the line (again).
        </p>
        <div className='flex flex-row items-center gap-1'>
          <p className='text-xs font-semibold text-gray-700'>Politics</p>
          <p className='text-xs text-gray-600'> • Posted by u/Picture-unrelated</p>
          <p className='text-xs text-gray-600'> • 7 hours ago</p>
        </div>
        <div className='flex flex-row gap-x-4'>
          <p className='text-sm font-semibold text-gray-700'>435 Comments</p>
          <p className='text-sm font-semibold text-gray-700'>Share</p>
        </div>
      </div>
    </div>
  );
}
export default Post;
