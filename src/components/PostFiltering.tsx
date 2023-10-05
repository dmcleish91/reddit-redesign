import { Badge, Flame, Rocket, RollerCoaster, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

export default function PostFiltering() {
  return (
    <div className='flex h-14 flex-row items-center rounded-xl border border-slate-400 bg-white px-1 sm:px-4'>
      <div className='flex flex-row items-center gap-2'>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
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
        <Button variant={'outline'} size={'sm'} className='hidden rounded-xl md:flex'>
          <TrendingUp className='mr-1' /> Rising
        </Button>
      </div>
    </div>
  );
}
