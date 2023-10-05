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

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='bg-white'>
      <nav className='flex items-center justify-between gap-1 px-4 py-1 h-12'>
        <div className='flex flex-row items-center gap-6 h-10 md:px-2'>
          <div className='flex flex-row items-center gap-1 shrink-0'>
            <Shell size={32} />
            <p className='text-lg font-bold hidden md:block'>Bubble</p>
          </div>
          <Select>
            <SelectTrigger className='w-[270px] hidden lg:flex focus:ring-1 focus:ring-stone-400 focus:ring-offset-0'>
              <SelectValue placeholder='My Communities' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='3Dprinting'>3Dprinting</SelectItem>
              <SelectItem value='apple'>Apple</SelectItem>
              <SelectItem value='OutOfTheLoop'>OutOfTheLoop</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='flex-row grow hidden sm:flex'>
          <Input
            type='text'
            placeholder='Search'
            className='bg-gray-200 focus-visible:ring-1 focus-visible:ring-stone-400 focus-visible:ring-offset-0 '
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />
        </div>

        <Button
          size={'icon'}
          variant={'ghost'}
          className='h-8 w-8 flex sm:hidden'
          onClick={() => {
            setOpen((prev) => !prev);
          }}>
          <Search />
        </Button>

        <div className='flex flex-row items-center gap-2 xl:gap-12'>
          <div className='flex flex-row md:gap-2 gap-0'>
            <Button size={'icon'} variant={'ghost'} className='h-8 w-8 hidden lg:flex'>
              <ArrowUpRightSquare strokeWidth={1.25} />
            </Button>
            <Button size={'icon'} variant={'ghost'} className='h-8 w-8 hidden lg:flex'>
              <MessagesSquare strokeWidth={1.25} />
            </Button>
            <Button size={'icon'} variant={'ghost'} className='h-8 w-8'>
              <Bell strokeWidth={1.25} />
            </Button>
            <Button size={'icon'} variant={'ghost'} className='h-8 w-8'>
              <Plus strokeWidth={1.25} />
            </Button>
          </div>
          <div className='flex flex-row gap-2 items-center md:px-2'>
            <div>
              <ChevronDown strokeWidth={1.25} />
            </div>
            <div>
              <p className='text-sm font-semibold'>TheStygianSun</p>
              <p className='text-sm text-slate-600'>44 Karma</p>
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
