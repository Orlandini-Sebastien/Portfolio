'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/utils/send-email'

export type FormData = {
  name: string
  email: string
  message: string
}

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>()

  function onSubmit(data: FormData) {
    sendEmail(data)
  }

  return (
    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md border border-gray-300 
         px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-orange-500 focus:shadow-xl border-b-2 bg-slate-50 shadow"
          {...register('name', { required: true })}
        />
      </div>
      <div className="mb-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border border-gray-300  px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-orange-500 focus:shadow-xl border-b-2 bg-slate-50 shadow"
          {...register('email', { required: true })}
        />
      </div>
      <div className="mb-5">
        <textarea
          rows={4}
          placeholder="Message"
          className="w-full resize-none rounded-md border border-gray-300  px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-orange-500 focus:shadow-xl border-b-2 bg-slate-50 shadow"
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="hover:shadow-form rounded-md bg-orange-500 px-8 py-3 text-base font-semibold text-white outline-none border-b-2  shadow">
          Submit
        </button>
      </div>
    </form>
  )
}
export default Contact
