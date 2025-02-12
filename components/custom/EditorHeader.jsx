'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Code, Monitor, Smartphone } from 'lucide-react'
import { useScreenSizeContext } from '@/app/provider'

function EditorHeader() {
  const {screenSize, setScreenSize}=useScreenSizeContext();
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={150}/>
        <div className='flex gap-3'>
            <Button variant='ghost' 
              onClick={() => setScreenSize('desktop')}
              className={`${screenSize=='desktop'&&'bg-green-100 text-primary'}`}><Monitor/>Desktop</Button>
            <Button variant='ghost'
              onClick={() => setScreenSize('mobile')}
              className={`${screenSize=='mobile'&&'bg-green-100 text-primary'}`}><Smartphone/>Mobile</Button>
        </div>
        <div className='flex gap-3'>
            <Button variant='ghost' className='hover:text-primary'>
                <Code/>
            </Button>
            <Button variant='outline'>Send Test Email</Button>
            <Button>Save Template</Button>
        </div>
    </div>
  )
}

export default EditorHeader