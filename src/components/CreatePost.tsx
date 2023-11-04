import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Button } from './ui/button';
import { Input } from './ui/input';
import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { frameworks } from '@/data/mock';
import { Textarea } from '@/components/ui/textarea';

function CreatePost() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Tabs defaultValue='link' className='max-w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
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
                      {value ? frameworks.find((framework) => framework.value === value)?.label : 'Select community'}
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='max-w-[350px] p-0'>
                    <Command>
                      <CommandInput placeholder='Search Your Communities...' />
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? '' : currentValue);
                              setOpen(false);
                            }}>
                            <Check
                              className={cn('mr-2 h-4 w-4', value === framework.value ? 'opacity-100' : 'opacity-0')}
                            />
                            {framework.label}
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
                      {value ? frameworks.find((framework) => framework.value === value)?.label : 'Select community'}
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='max-w-[350px] p-0'>
                    <Command>
                      <CommandInput placeholder='Search Your Communities...' />
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? '' : currentValue);
                              setOpen(false);
                            }}>
                            <Check
                              className={cn('mr-2 h-4 w-4', value === framework.value ? 'opacity-100' : 'opacity-0')}
                            />
                            {framework.label}
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
  );
}
export default CreatePost;
