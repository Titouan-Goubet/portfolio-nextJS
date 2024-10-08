import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
  const { pending } = useFormStatus()
  return (
    <button 
    type="submit" 
    className='flex items-center justify-center gap-2 h-[4rem] w-[10rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 active:scale-105 hover:bg-gray-950 disable:scale-100 disable:bg-opacity-65 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65'
    disabled={pending}
    > 
    { pending ? (
    <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div> ) : (
    <>
      Envoyez
      <FaPaperPlane className="text-xs opacity-70 transiton-all group-hover:translate-x-1 group-hover:-translate-y-1 " /> {" "}
    </>
    )}
  </button>
  )
}
