import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { popularComm } from '@/data/mock';
import { cn } from '@/lib/utils';
import {
  ArrowUpRightSquare,
  Bell,
  ChevronDown,
  ChevronsUpDown,
  LogOut,
  Plus,
  Search,
  Settings,
  Shell,
  Sun,
} from 'lucide-react';
import React, { Fragment, ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, buttonVariants } from './ui/button';
import { Input } from './ui/input';

// change the a tag to a button and clean up the code
function NavBar() {
  const id = window.location.href.split('/')[4];
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(id ? id : '');

  function createLink() {
    const link = id ? `b/${id}/post` : '/post';
    if (window.location.pathname.includes('post')) {
      return '';
    } else {
      return link;
    }
  }

  const link = createLink();

  return (
    <div className='bg-white'>
      <nav className='flex h-12 items-center justify-between gap-1 px-4 py-1'>
        <div className='flex h-10 flex-row items-center gap-6 md:px-2'>
          <div className='shrink-0'>
            <a href={'/'} className='flex flex-row items-center gap-1'>
              <Shell size={32} />
              <p className='hidden text-lg font-bold md:block'>Bubble</p>
            </a>
          </div>
          <CommunitySelector value={value} setValue={setValue} />
        </div>

        <div className='hidden grow flex-row sm:flex xl:justify-center'>
          <Input
            type='text'
            placeholder='Search'
            className='bg-zinc-100 focus-visible:ring-1 focus-visible:ring-stone-400 focus-visible:ring-offset-0'
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
          <div className='flex flex-row gap-3 px-3 items-center'>
            <Button size={'icon'} variant={'ghost'} className='hidden h-8 w-8 lg:flex'>
              <ArrowUpRightSquare strokeWidth={1.5} />
            </Button>
            <DropDownNotificationMenu>
              <Button size={'icon'} variant={'ghost'} className='h-8 w-8'>
                <Bell strokeWidth={1.5} />
              </Button>
            </DropDownNotificationMenu>
            <Link className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-8 w-8')} to={link}>
              <Plus strokeWidth={1.5} />
            </Link>
          </div>
          <div className='flex flex-row items-center gap-2 md:px-2'>
            <div>
              <DropDownAvatarMenu>
                <Button size={'icon'} variant={'ghost'} className='h-8 w-8'>
                  <ChevronDown strokeWidth={1.5} />
                </Button>
              </DropDownAvatarMenu>
            </div>
            <div>
              <p className='text-sm font-semibold'>TheStygianSun</p>
              <p className='text-sm text-slate-600'>44 Kudos</p>
            </div>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='https://github.com/dmcleish91.png' alt='@dmcleish91' />
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

export function CommunitySelector({ value, setValue }: { value: string; setValue: (value: string) => void }) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='hidden w-[270px] justify-between focus:ring-1 focus:ring-stone-400 focus:ring-offset-0 lg:flex'>
          {value ? value : 'My Communities'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[270px] p-0'>
        <Command>
          <CommandInput placeholder='Search' />
          <CommandEmpty>No Community found.</CommandEmpty>
          <ScrollArea className='h-72 w-full rounded-md border'>
            <CommandGroup>
              {popularComm.map((item) => (
                <CommandItem
                  key={item}
                  value={item}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                    navigate('b/' + item);
                  }}>
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function DropDownAvatarMenu({ children }: { children: ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-[12rem]'>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem className='justify-between'>
          Appearance <Sun className='ml-2' strokeWidth={1} />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='justify-between'>
          Log Out
          <LogOut className='ml-2' strokeWidth={1} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DropDownNotificationMenu({ children }: { children: ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-[22rem]' align='end'>
        <DropdownMenuLabel className='flex  items-center justify-between'>
          Notifications
          <div className='flex flex-row items-center gap-2'>
            <Button className='h-6 rounded' variant={'ghost'}>
              Clear All
            </Button>
            <Settings strokeWidth={1} size={20} className='cursor-pointer' />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {NOTI.map((notification) => (
          <Fragment key={notification.username}>
            <DropdownMenuItem>
              <Notification
                username={notification.username}
                subreddit={notification.subreddit}
                date={notification.date}
                message={notification.message}
              />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </Fragment>
        ))}
        <DropdownMenuItem>
          <Button className='w-full rounded' variant={'ghost'} size={'sm'}>
            See All Notifications
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface NotificationProps {
  username: string;
  subreddit: string;
  date: string;
  message: string;
}

function Notification({ username, subreddit, date, message }: NotificationProps) {
  return (
    <div className='space-y-2'>
      <div>
        <p className='w-80'>
          {username} replied to your comment in {subreddit} {date}
        </p>
        <p className='w-80 text-slate-600'>{message}</p>
      </div>
      {/* <Button className='w-full rounded' variant={'secondary'} size={'sm'}>
        Reply Back
      </Button> */}
    </div>
  );
}

const NOTI = [
  {
    username: 'u/bombbastic',
    subreddit: 'Funny',
    date: 'Oct 17',
    message: 'HAHA! Right?',
  },
  {
    username: 'u/gowizard',
    subreddit: 'Golang',
    date: 'Oct 7',
    message:
      'The other pointed to good resources. I also want to add a few caveats (well, more like clarification - none of these are...',
  },
];
