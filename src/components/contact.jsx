import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'website_contact_service',
        'website_contact_template',
        {
          from_name: form.name,
          to_name: 'Deeh Foundation',
          from_email: form.email,
          to_email: 'deehfoundation22@gmail.com',
          message: form.message,
        },
        'MaeV7CdkvwjdTY0u6'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you, we will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Ahh, something went wrong. Please try again.')
        }
      )
  }

  return (
    <div className="xs:w-[370px] md:w-[800px] mx-auto mt-10 xs:mb-10 md:mb-0 xs:p-2 md:p-10">
      <table className="mx-auto rounded-lg bg-tertiary-dark bg-opacity-30">
        <tr className="">
          <td className="xs:px-2 md:px-8 py-4 text-xs md:text-base text-center border-r-2 border-zinc-600 border-solid">
            Call
          </td>
          <td className="text-xs md:text-base text-center ">9868123940</td>
        </tr>
        <tr className="border-y-2 border-zinc-600 border-solid xs:px-2 md:px-8 py-10">
          <td className="xs:px-2 md:px-8 text-center py-4  text-xs md:text-base border-r-2 border-zinc-600 border-solid">
            Email
          </td>
          <td className="px-10 text-center text-xs md:text-base ">
            deehfoundation22@gmail.com
          </td>
        </tr>
        <tr className="xs:px-2 md:px-8 py-4">
          <td className="xs:px-2 md:px-8 py-4 text-xs md:text-base pt-4 text-center border-r-2 border-zinc-600 border-solid">
            Mailing Address
          </td>
          <td className="py-4 text-center text-xs md:text-base">
            Khasra No. 92/1/1, A Block <br />
            Baba colony, Burari <br />
            New Delhi - 110084 <br />
            Delhi - India
          </td>
        </tr>
      </table>

      <div className="flex flex-col">
        <p className="mx-auto mt-20 mb-10 text-md">
          <span className="xs:hidden md:inline">~~~~~~~~~~~~~</span>
          <span> Drop Us a Line, Let Us Know What You Think</span>
          <span className="xs:hidden md:inline"> ~~~~~~~~~~~~~</span>
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="border border-solid p-10 rounded-3xl bg-tertiary-dark bg-opacity-30 xs:text-xs md:text-lg"
        >
          <div className="flex mb-8">
            <div className="flex flex-col w-1/2">
              <label for="name" className="xs:text-xs md:text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="py-2 text-md focus:outline-none bg-transparent border-b-2 border-zinc-600 xs:w-28 md:w-60"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label for="email" className="xs:text-xs md:text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="py-2 text-md focus:outline-none bg-transparent border-b-2 border-zinc-600"
              />
            </div>
          </div>
          <label for="message" className="xs:text-xs md:text-sm font-medium">
            Message
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            rows="10"
            cols="80"
            value={form.message}
            onChange={handleChange}
            className="p-2 mt-4 text-md focus:outline-none bg-transparent border-2 border-zinc-600 rounded-md w-full"
          />
          <div className="flex justify-center w-full p-0 m-0">
            <button
              type="submit"
              className="border border-solid border-zinc-600 rounded-md py-2 px-5 mt-4"
            >
              {loading ? 'sending...' : 'send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
