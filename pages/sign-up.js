import { SignUp } from '@clerk/nextjs/app-beta';

export default function SignUpPage() {
  return (
    <div className='flex justify-center py-20 px-8'>
      <SignUp path='/sign-up' signInUrl='/sign-in' redirectUrl='/dashboard' />
    </div>
  );
}
