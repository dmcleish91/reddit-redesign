import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { popularComm } from '@/data/mock';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import React from 'react';
import { useParams } from 'react-router-dom';

import { Button } from './ui/button';
import { Input } from './ui/input';

function CreatePost() {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(getInitValue);

  function getInitValue() {
    return id ? id : '';
  }

  return (
    <div className='flex justify-center'>
      <Tabs defaultValue='link' className='max-w-[400px]'>
        <TabsList className='grid w-full grid-cols-2 bg-slate-200'>
          <TabsTrigger value='link'>Link</TabsTrigger>
          <TabsTrigger value='text'>Text</TabsTrigger>
        </TabsList>
        <TabsContent value='link'>
          <Card>
            <CardHeader>
              <CardDescription>
                You are submitting a link. The key to a successful submission is interesting content and a descriptive
                title.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='name'>url</Label>
                <Input id='name' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='username'>image</Label>
                <Input id='username' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='username'>title</Label>
                <Textarea />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='username'>choose where to post</Label>
                <div>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button variant='outline' role='combobox' aria-expanded={open} className='w-full justify-between'>
                        {value ? popularComm.find((item) => item === value) : 'Select community'}
                        <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='max-w-[350px] p-0'>
                      <Command>
                        <CommandInput placeholder='Search Your Communities...' />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {popularComm.map((item) => (
                            <CommandItem
                              key={item}
                              value={item}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? '' : currentValue);
                                setOpen(false);
                              }}>
                              <Check className={cn('mr-2 h-4 w-4', value === item ? 'opacity-100' : 'opacity-0')} />
                              {item}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='text'>
          <Card>
            <CardHeader>
              <CardDescription>
                You are submitting a text-based post. Speak your mind. A title is required, but expanding further in the
                text field is not.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='username'>title</Label>
                <Textarea />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='username'>text</Label>
                <Textarea />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='username'>choose where to post</Label>
                <div>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button variant='outline' role='combobox' aria-expanded={open} className='w-full justify-between'>
                        {value ? popularComm.find((item) => item === value) : 'Select community'}
                        <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='max-w-[350px] p-0'>
                      <Command>
                        <CommandInput placeholder='Search Your Communities...' />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {popularComm.map((item) => (
                            <CommandItem
                              key={item}
                              value={item}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? '' : currentValue);
                                setOpen(false);
                              }}>
                              <Check className={cn('mr-2 h-4 w-4', value === item ? 'opacity-100' : 'opacity-0')} />
                              {item}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default CreatePost;
