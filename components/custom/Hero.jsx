import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import SignInButton from './SignInButton'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 xl:px-56
    flex flex-col items-center mt-24 text-center'>
        <h2 className='font-extrabold text-5xl'>
            AI-Powered <span className='text-primary'>Email Templates</span>
        </h2>
        <p className='mt-4'>
            ワーホリで仕事を探すとき，<br />
            「どのようにメールを送ればいいのかわからない！」<br />
            「日本語は慣れてるけど英語でどう言えばいいかわからない！」<br />
            そんなあなたのためのアプリ，作りました．<br />
            プロンプトにあなたが送りたいメールの概要を日本語で入力することで，<br />
            AIが適切なメールテンプレートを英語で出力します．<br />
            AIを活用したメールで顧客や相手を驚かせたいけど，自分で作る時間が足りない？<br />
            AIが生成した画像とコピーを含むAI駆動のメールテンプレートをお使いください．<br />
            このアプリと一緒にメール制作の時間を節約しましょう！．
        </p>

        <div className='flex gap-5 mt-6'>
            <Button variant="outline">Try Demo</Button>
            <SignInButton />
        </div>

        <Image src={"/landing.png"} alt='landing' 
        width={1000} 
        height={800} 
        className='mt-12 rounded-xl'
        />
    </div>
  )
}

export default Hero