import { Paperclip, Image, Rocket, Flame, Badge, RollerCoaster, TrendingUp, Plus } from 'lucide-react';
import { Button } from './ui/button';

function SortCreatePostMenu() {
  return (
    <div className='flex h-14 flex-row items-center justify-center gap-1 rounded border border-slate-400 bg-white px-2 md:justify-between md:gap-2'>
      <div className='flex flex-row items-center gap-1 md:gap-2'>
        <Button variant={'outline'} size={'sm'} className='hidden rounded-xl md:flex'>
          <Rocket className='mr-1' strokeWidth={1.5} /> Best
        </Button>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          <Flame className='mr-1' strokeWidth={1.5} /> Hot
        </Button>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          <Badge className='mr-1' strokeWidth={1.5} /> New
        </Button>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          <RollerCoaster className='mr-1' strokeWidth={1.5} /> Top
        </Button>
        <Button variant={'outline'} size={'sm'} className='hidden rounded-xl md:flex'>
          <TrendingUp className='mr-1' strokeWidth={1.5} /> Rising
        </Button>
      </div>
      <div className='flex flex-row items-center gap-1 md:gap-2'>
        <Button variant={'default'} size={'sm'} className='rounded-xl'>
          <Plus className='mr-1 hidden md:flex' strokeWidth={1.5} />
          Create
        </Button>
        <Button variant={'ghost'} size={'icon'} className='hidden rounded-xl sm:flex'>
          <Image className='text-gray-500' strokeWidth={1.5} />
        </Button>
        <Button variant={'ghost'} size={'icon'} className='hidden rounded-xl sm:flex'>
          <Paperclip className='text-gray-500' strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  );
}
export default SortCreatePostMenu;
