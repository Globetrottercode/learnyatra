import Hero from '@/components/Hero'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Container from '@/components/Container'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <About />

        <Section
          id='programs'
          title='Our Programs'
          description='Comprehensive training programs designed for your success'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='p-6 border rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>
                Live-Interactive Classes
              </h3>
              <p className='text-foreground-accent'>
                Engage with instructors in real-time for a dynamic learning
                experience.
              </p>
            </div>
            <div className='p-6 border rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>
                One-on-One Personalized Training
              </h3>
              <p className='text-foreground-accent'>
                Get customized attention and guidance tailored to your needs.
              </p>
            </div>
            <div className='p-6 border rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>
                Multilingual Training
              </h3>
              <p className='text-foreground-accent'>
                Learn in your preferred language for better understanding.
              </p>
            </div>
            <div className='p-6 border rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>
                Mentorship from Industry Experts
              </h3>
              <p className='text-foreground-accent'>
                Learn from professionals with real-world experience.
              </p>
            </div>
            <div className='p-6 border rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>
                First-of-its-Kind Platform
              </h3>
              <p className='text-foreground-accent'>
                Pioneering AI-powered tool training platform.
              </p>
            </div>
            <div className='p-6 border rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>
                Placement Assistance
              </h3>
              <p className='text-foreground-accent'>
                Work with Indian Startups and kickstart your career.
              </p>
            </div>
            <div className='p-6 border rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>
                Real-World Capstone Projects
              </h3>
              <p className='text-foreground-accent'>
                Apply your learning to practical, industry-relevant projects.
              </p>
            </div>
            <div className='p-6 border rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>Incubation Support</h3>
              <p className='text-foreground-accent'>
                Get support for your early-stage startup ideas.
              </p>
            </div>
            <div className='p-6 border rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>
                University-Recognized Certifications
              </h3>
              <p className='text-foreground-accent'>
                Earn certificates recognized by leading universities.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id='collaborations'
          title='Colleges & University Collaborations'
          description='Partnering with leading institutions to provide quality education'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <div className='p-6 bg-white border rounded-xl shadow-md flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg'>
              <div className='flex-1 flex items-center justify-center mb-4 h-28'>
                <Image
                  src='/LEARN YATRA[1].png'
                  alt='Salesian College'
                  width={120}
                  height={80}
                  className='object-contain max-h-24'
                />
              </div>
              <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#bf5104] text-white mt-2'>
                Certified Partner
              </span>
            </div>
            <div className='p-6 bg-white border rounded-xl shadow-md flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg'>
              <div className='flex-1 flex items-center justify-center mb-4 h-28'>
                <Image
                  src='/reva_university-removebg-preview[1].png'
                  alt='REVA University'
                  width={120}
                  height={80}
                  className='object-contain max-h-24'
                />
              </div>
              <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white mt-2'>
                Academic Collaborator
              </span>
            </div>
            <div className='p-6 bg-white border rounded-xl shadow-md flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg'>
              <div className='flex-1 flex items-center justify-center mb-4 h-28'>
                <Image
                  src='/st francis logo[1].png'
                  alt='St. Francis College'
                  width={120}
                  height={80}
                  className='object-contain max-h-24'
                />
              </div>
              <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#bf5104] text-white mt-2'>
                Certified Partner
              </span>
            </div>
            <div className='p-6 bg-white border rounded-xl shadow-md flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg'>
              <div className='flex-1 flex items-center justify-center mb-4 h-28'>
                <Image
                  src='/CIS LOGO[1].png'
                  alt='Techno India Centre for Innovative Studies'
                  width={120}
                  height={80}
                  className='object-contain max-h-24'
                />
              </div>
              <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white mt-2'>
                Academic Collaborator
              </span>
            </div>
          </div>
        </Section>

        <Section
          id='reviews'
          title='Expert Reviews'
          description='What industry leaders say about us'
        >
          <Testimonials />
        </Section>

        <FAQ />
        <Contact />
        <CTA />
      </Container>
    </>
  )
}

export default HomePage
