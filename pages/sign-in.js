import { SignIn } from '@clerk/nextjs/app-beta';

export default function SignInPage() {
  return (
    <div className='flex justify-center py-20 px-8'>
      <SignIn path='/sign-in' signUpUrl='/sign-up' redirectUrl='/dashboard' />
    </div>
  );
}
