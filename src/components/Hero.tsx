import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { heroDetails } from '@/data/hero'

const Hero: React.FC = () => {
  return (
    <section
      id='hero'
      className='relative text-green-400 flex items-center justify-center pb-0 pt-32 md:pt-40 px-5'
    >
      <div className='absolute left-0 top-0 bottom-0 -z-10 w-full'>
        <div className='absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]'></div>
      </div>

      <div className='absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]'></div>

      <div className='text-center'>
        <h1 className='text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto'>
          {heroDetails.heading}
        </h1>
        <p className='mt-4 text-foreground max-w-lg mx-auto'>
          {heroDetails.subheading}
        </p>
        <div className='mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto'>
          <Link
            href='#cta'
            className='text-white bg-[#bf5104] hover:bg-[#a34403] px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2'
          >
            Start Learning
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </div>
        <Image
          src={heroDetails.centerImageSrc}
          width={500}
          height={500}
          quality={100}
          sizes='(max-width: 768px) 100vw, 500px'
          priority={true}
          unoptimized={true}
          alt='app mockup'
          className='relative mt-12 md:mt-16 mx-auto z-10'
        />
      </div>
    </section>
  )
}

export default Hero
