import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

// TODO: Design Login Modal
function LoginDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
          <DialogDescription>
            By continuing, you agree to our <a href='#'>User Agreement</a> and acknowledge that you understand the
            <a href='#'>Privacy Policy</a>.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid items-center gap-2'>
            <Button variant={'secondary'}>Continue with Google</Button>
            <Button variant={'secondary'}>Continue with Apple</Button>
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Input id='name' placeholder='Username' className='col-span-4' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Input id='username' placeholder='Password' className='col-span-4' />
          </div>
          <div className='grid items-center gap-1'>
            <a href='#' className='text-sm'>
              Forgot password?
            </a>
            <p className='text-sm'>
              New to Reddit? <a href='#'>Sign Up</a>
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button type='submit' className='w-full'>
            Log In
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default LoginDialog;
