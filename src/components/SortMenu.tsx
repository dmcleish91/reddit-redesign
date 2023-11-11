import { Badge, Flame, RollerCoaster } from 'lucide-react';

import { Button } from './ui/button';

function SortMenu() {
  return (
    <div className='flex h-14 flex-row items-center justify-center gap-1 rounded border border-slate-300 bg-white px-2 md:justify-between md:gap-2'>
      <div className='flex flex-row items-center gap-1 md:gap-2'>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          <Badge className='mr-1' strokeWidth={1.5} /> New
        </Button>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          <Flame className='mr-1' strokeWidth={1.5} /> Hot
        </Button>
        <Button variant={'outline'} size={'sm'} className='rounded-xl'>
          <RollerCoaster className='mr-1' strokeWidth={1.5} /> Top
        </Button>
      </div>
    </div>
  );
}
export default SortMenu;
