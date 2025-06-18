import Hero from '@/components/Hero'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Container from '@/components/Container'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'

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
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {/* Add university logos here */}
            <div className='p-4 border rounded-lg text-center'>
              <p className='text-lg font-semibold'>University 1</p>
              <p className='text-sm text-foreground-accent'>
                Certified Partner
              </p>
            </div>
            <div className='p-4 border rounded-lg text-center'>
              <p className='text-lg font-semibold'>University 2</p>
              <p className='text-sm text-foreground-accent'>
                Academic Collaborator
              </p>
            </div>
            <div className='p-4 border rounded-lg text-center'>
              <p className='text-lg font-semibold'>University 3</p>
              <p className='text-sm text-foreground-accent'>
                Certified Partner
              </p>
            </div>
            <div className='p-4 border rounded-lg text-center'>
              <p className='text-lg font-semibold'>University 4</p>
              <p className='text-sm text-foreground-accent'>
                Academic Collaborator
              </p>
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
