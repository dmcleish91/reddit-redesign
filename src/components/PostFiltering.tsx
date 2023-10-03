import { Badge, Flame, Rocket, RollerCoaster, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

export default function PostFiltering() {
  return (
    <div className='flex flex-row items-center w-fit bg-white rounded-xl h-14 px-4 border border-slate-400'>
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
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          <TrendingUp className='mr-1' /> Rising
        </Button>
      </div>
    </div>
  );
}
