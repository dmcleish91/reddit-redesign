import { Card } from './ui/card';

function RecentPosts() {
  return (
    <Card className='max-w-96 h-fit border border-slate-400 p-2'>
      <p className='text-[11px] font-semibold'>RECENT POSTS</p>
      <div className='flex flex-col justify-center gap-2 py-2'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <img src='https://i.redd.it/ce6cnc1uftrb1.jpg' alt='black car' className='h-[48px] w-[64px] object-cover' />
          <div className='max-w-[220px] space-y-1'>
            <p className='text-xs font-semibold'>Am I the only one hates their Raven GR86?🤔</p>
            <p className='text-xs text-gray-400'>39 • points • 67 comments • 6h</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
export default RecentPosts;
