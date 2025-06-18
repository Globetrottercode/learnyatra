import { ctaDetails } from '@/data/cta'
import Link from 'next/link'

const CTA: React.FC = () => {
  return (
    <section id='cta' className='mt-10 mb-5 lg:my-20'>
      <div className='relative h-full w-full z-10 mx-auto py-12 sm:py-20'>
        <div className='h-full w-full'>
          <div className='rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]'>
            <div className='rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]'></div>
          </div>

          <div className='h-full flex flex-col items-center justify-center text-white text-center px-5'>
            <h2 className='text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl'>
              {ctaDetails.heading}
            </h2>

            <p className='mx-auto max-w-xl md:px-5'>{ctaDetails.subheading}</p>

            <div className='mt-8'>
              <Link
                href='#contact'
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
