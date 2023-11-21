"use client"

import React from 'react'
import SectionHeading from './Section-heading'
import SubmitBtn from './Submit-btn'
import { useSectionInView } from '@/lib/hook'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions.tsx/sendEmail'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
        ref={ref}
        id="contact"
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
        <SectionHeading>Contactez-moi</SectionHeading>

        <p className='text-gray-700 -mt-6 dark:text-white/80'>Merci de me contacter par email :
        {" "}
            <a className="underline" href="mailto:example@gmail.com">titouangoubet@hotmail.fr
            </a>{" "}
            Vous pouvez également utiliser le formulaire ci-dessous :
        </p>

        <form className='mt-10 flex flex-col dark:text-black/80' action={async (formData) => {
          const { data, error } = await sendEmail(formData)
          if (error) {
            toast.error(error)
            return
          }

          toast.success('Votre message a bien été envoyé !')
        }}>
            <input 
              className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderEmail"
              type="email" 
              placeholder='Email'
              required 
              maxLength={100}
            />
            <textarea 
              className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder='Votre message'
              name="message"
              required={true}
              maxLength={1000}
            />
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
