'use client'
import React, { useState } from 'react'
import Section from './Section'
import Container from './Container'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    queryType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Section
      id='contact'
      title='Contact Us'
      description='Get in touch with us for any queries or support'
    >
      <Container>
        <div className='max-w-2xl mx-auto'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='fullName'
                className='block text-sm font-medium text-foreground mb-2'
              >
                Full Name
              </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf5104] focus:border-transparent'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-foreground mb-2'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf5104] focus:border-transparent'
              />
            </div>

            <div>
              <label
                htmlFor='mobile'
                className='block text-sm font-medium text-foreground mb-2'
              >
                Mobile Number
              </label>
              <input
                type='tel'
                id='mobile'
                name='mobile'
                value={formData.mobile}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf5104] focus:border-transparent'
              />
            </div>

            <div>
              <label
                htmlFor='queryType'
                className='block text-sm font-medium text-foreground mb-2'
              >
                Query Type
              </label>
              <select
                id='queryType'
                name='queryType'
                value={formData.queryType}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf5104] focus:border-transparent'
              >
                <option value=''>Select a query type</option>
                <option value='course'>Course Info</option>
                <option value='corporate'>Corporate Training</option>
                <option value='support'>Technical Support</option>
                <option value='other'>Others</option>
              </select>
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-foreground mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf5104] focus:border-transparent'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-[#bf5104] hover:bg-[#a34403] text-white font-semibold py-3 px-6 rounded-lg transition-colors'
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </Section>
  )
}

export default Contact
