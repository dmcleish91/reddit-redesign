import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import React from 'react';
import { ArrowUpRightSquare, Bell, ChevronDown, Shell, MessagesSquare, Plus, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from './ui/input';
import { Button } from './ui/button';

function NavBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='bg-white'>
      <nav className='flex h-12 items-center justify-between gap-1 px-4 py-1'>
        <div className='flex h-10 flex-row items-center gap-6 md:px-2'>
          <div className='flex shrink-0 flex-row items-center gap-1'>
            <Shell size={32} />
            <p className='hidden text-lg font-bold md:block'>Bubble</p>
          </div>
          <Select>
            <SelectTrigger className='hidden w-[270px] focus:ring-1 focus:ring-stone-400 focus:ring-offset-0 lg:flex'>
              <SelectValue placeholder='My Communities' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='3Dprinting'>3Dprinting</SelectItem>
              <SelectItem value='apple'>Apple</SelectItem>
              <SelectItem value='OutOfTheLoop'>OutOfTheLoop</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='hidden grow flex-row sm:flex xl:justify-center'>
          <Input
            type='text'
            placeholder='Search'
            className='max-w-7xl bg-zinc-100 focus-visible:ring-1 focus-visible:ring-stone-400 focus-visible:ring-offset-0'
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />
        </div>

        <Button
          size={'icon'}
          variant={'ghost'}
          className='flex h-8 w-8 sm:hidden'
          onClick={() => {
            setOpen((prev) => !prev);
          }}>
          <Search />
        </Button>

        <div className='flex flex-row items-center gap-2 xl:gap-4'>
          <div className='flex flex-row gap-0 md:gap-4'>
            <Button size={'icon'} variant={'ghost'} className='hidden h-8 w-8 lg:flex'>
              <ArrowUpRightSquare strokeWidth={1.5} />
            </Button>
            <Button size={'icon'} variant={'ghost'} className='hidden h-8 w-8 lg:flex'>
              <MessagesSquare strokeWidth={1.5} />
            </Button>
            <Button size={'icon'} variant={'ghost'} className='h-8 w-8'>
              <Bell strokeWidth={1.5} />
            </Button>
            <Button size={'icon'} variant={'ghost'} className='h-8 w-8'>
              <Plus strokeWidth={1.5} />
            </Button>
          </div>
          <div className='flex flex-row items-center gap-2 md:px-2'>
            <div>
              <ChevronDown strokeWidth={1.5} />
            </div>
            <div>
              <p className='text-sm font-semibold'>TheStygianSun</p>
              <p className='text-sm text-slate-600'>44 Sparks</p>
            </div>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
      <CommandMenu open={open} setOpen={setOpen} />
    </div>
  );
}
export default NavBar;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CommandMenu({ open, setOpen }: { open: boolean; setOpen: (open: any) => void }) {
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open: boolean) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
