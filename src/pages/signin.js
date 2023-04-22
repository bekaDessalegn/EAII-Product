import React from 'react'
import logo from '../../public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className='flex h-screen w-screen justify-center'>
        <div className='w-1/2 h-full hidden md:flex justify-center items-center'>
            <div className=''>
                <Image className='max-w-[350px]' src={logo} />
            </div>
        </div>
        <div className='md:w-1/2 h-full flex justify-center items-center lg:mr-40'>
            <div className='flex-col text-center'>
                <p className='text-4xl text-primaryColor'>HELLO</p>
                <p className='font-bold text-4xl text-secondaryColor'>ADMIN</p>
                <div className='text-left mt-16'>
                <p className='text-gray mb-2'>Please sign in to your account</p>
                <div className='text-left my-1'>
        <p className='font-bold mb-1'>Username</p>
        <input type= 'text' name="username" placeholder={'Enter your username'} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-2 px-2 rounded-lg' />
    </div>
    <div className='text-left my-1'>
        <p className='font-bold mb-1'>Password</p>
        <input type= 'password' name='password' placeholder={'Enter your password'} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-80 py-2 px-2 rounded-lg' />
    </div>
                <div className='mt-10'>
                <Link href="/">
                <div className={'bg-secondaryColor text-onPrimary uppercase rounded-lg mx-auto cursor-pointer hover:bg-primaryColor hover:text-onPrimary'}>
            <div className='mx-5 py-2 text-center'>
                Sign In</div>
        </div>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn