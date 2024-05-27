import React from 'react'
import {Contact} from '../components/Contact/index'
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'

const ContactPage = () => {
  return (
    <main className='bg-skin-primary text-skin-base w-full'>
      <Contact.Root>
        <Contact.Card title='Our adress' info='Madame Toussauds 234 West 42nd Street. New York, NY 10036' icon={<MapPin size={26}/>}/>
        <Contact.Card title='Phone Number' info='(00) 91234-5678' icon={<Phone size={26}/>}/>
        <Contact.Card title='Our email' info='worldNews@gmail.com' icon={<Mail size={26}/>}/>
        <Contact.Card title='Instagram' info='@WorldNews' icon={<Instagram size={26}/>}/>
      </Contact.Root>
    </main>
  )
}

export default ContactPage