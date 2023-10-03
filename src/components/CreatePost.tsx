import { Milestone, Paperclip, Image } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function CreatePost() {
  return (
    <div className='flex flex-row gap-2 items-center bg-white rounded-xl h-14 px-2 border border-slate-400'>
      <div>
        <Milestone className='text-gray-400' />
      </div>

      <Input
        type='text'
        placeholder='Create Post'
        className='bg-gray-100 focus-visible:ring-1 focus-visible:ring-stone-400 focus-visible:ring-offset-0'
      />

      <div className='flex flex-row'>
        <Button variant={'ghost'} size={'icon'}>
          <Image className='text-gray-500' />
        </Button>

        <Button variant={'ghost'} size={'icon'}>
          <Paperclip className='text-gray-500' />
        </Button>
      </div>
    </div>
  );
}
