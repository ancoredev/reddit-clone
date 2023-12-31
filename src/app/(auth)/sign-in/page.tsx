import { FC } from 'react'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';
import SignIn from '@/components/SignIn';


const page: FC = () => {
  return <div className='absolute inset-0'>
    <div className="h-full max-w-2x1 mx-auto flex flex-col items-center justify-center gap-20">
      <Link 
        href='/' 
        className={cn(buttonVariants({variant: 'ghost'}), 'self-start -mt-20')}
      >Home</Link>

      <SignIn />
    </div>
  </div>
}

export default page