import { IMenuItem, ISocials } from '@/types'

export const footerDetails: {
  subheading: string
  quickLinks: IMenuItem[]
  email: string
  telephone: string
  socials: ISocials
} = {
  subheading:
    'Empowering professionals with cutting-edge AI tools and training.',
  quickLinks: [
    {
      text: 'Home',
      url: '#home',
    },
    {
      text: 'About Us',
      url: '#about',
    },
    {
      text: 'Courses',
      url: '#programs',
    },
    {
      text: 'Contact',
      url: '#contact',
    },
    {
      text: 'Privacy Policy',
      url: '/privacy-policy',
    },
    {
      text: 'Terms & Conditions',
      url: '/terms',
    },
  ],
  email: 'admin@learnyatra.com',
  telephone: '+91 9606617007',
  socials: {
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
    facebook: 'https://facebook.com',
  },
}
