'use client'

import React, { useActionState } from 'react'
import { sendMailAction } from '@/utils/actions';
import { MailDataState } from '@/types';

const initialState: MailDataState = {
  message: '',
}

function SendMailForm() {
  const [state, sendMail, pending] = useActionState(sendMailAction, initialState)
  
  return (
    <form action={sendMail} className="space-y-4">
        <div>
          <label 
            className="text-sm font-medium text-gray-700" 
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label 
            className="block text-sm font-medium text-gray-700" 
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <p aria-live="polite">{state?.message}</p>
        <button 
          className="w-full px-4 bg-blue-500 py-2 text-white font-medium rounded-md"
          disabled={pending}
        >
          Send mail
        </button>
      </form>
  )
}

export default SendMailForm