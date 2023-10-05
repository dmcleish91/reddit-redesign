import { Paperclip, Image, Rocket, Flame, Badge, RollerCoaster, TrendingUp, Plus } from 'lucide-react';
import { Button } from './ui/button';

export default function CreatePost() {
  return (
    <div className='flex flex-row justify-center md:justify-between items-center gap-1 md:gap-2 bg-white rounded-xl h-14 px-2 border border-slate-400'>
      <div className='flex flex-row items-center gap-1 md:gap-2'>
        <Button variant={'outline'} size={'sm'} className='rounded-xl hidden md:flex'>
          <Rocket className='mr-1' /> Best
        </Button>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          <Flame className='mr-1' /> Hot
        </Button>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          <Badge className='mr-1' /> New
        </Button>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          <RollerCoaster className='mr-1' /> Top
        </Button>
        <Button variant={'outline'} size={'sm'} className='rounded-xl hidden md:flex'>
          <TrendingUp className='mr-1' /> Rising
        </Button>
      </div>
      <div className='flex flex-row gap-1 md:gap-2 items-center'>
        <Button variant={'default'} size={'sm'} className='rounded-xl'>
          <Plus className='mr-1 hidden md:flex' />
          Create
        </Button>
        <Button variant={'ghost'} size={'icon'} className='rounded-xl hidden sm:flex'>
          <Image className='text-gray-500' />
        </Button>
        <Button variant={'ghost'} size={'icon'} className='rounded-xl hidden sm:flex'>
          <Paperclip className='text-gray-500' />
        </Button>
      </div>
    </div>
  );
}
