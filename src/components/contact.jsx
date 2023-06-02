import React from 'react'

export default function Contact() {
  return (
    <div className="w-[800px] mx-auto mt-10 p-10">
      <table className="mx-auto">
        <thead className="p-4 border-b-2 border-zinc-600 border-solid">
          <td className="p-4 text-center">Call</td>
          <td className="p-4 text-center border-x-2 border-zinc-600 border-solid">
            Email
          </td>
          <td className="px-8 pt-4 text-center">Mailing Address</td>
        </thead>
        <tbody>
          <td className="px-8 py-4 text-center">9868123940</td>
          <td className="px-8 py-4 text-center border-x-2 border-zinc-600 border-solid">
            deehfoundation22@gmail.com
          </td>
          <td className="px-2 py-4 text-center">Burari</td>
        </tbody>
      </table>

      <div className="flex flex-col">
        <p className="mx-auto mt-20 mb-10">
          ~~~~~~~~~~~~~ Drop Us a Line, Let Us Know What You Think ~~~~~~~~~~~~~
        </p>
        <form method="get" className="border border-solid p-10 rounded-3xl">
          <div className="flex mb-8">
            <div className="flex flex-col w-1/2">
              <label for="name" className="text-sm text-zinc-600 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="py-2 text-md focus:outline-none bg-transparent border-b-2 border-zinc-600 w-60"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label for="email" className="text-sm text-zinc-600 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="py-2 text-md focus:outline-none bg-transparent border-b-2 border-zinc-600"
              />
            </div>
          </div>
          <label for="message" className="text-sm text-zinc-600 font-medium">
            Message
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            rows="10"
            cols="80"
            className="p-2 mt-4 text-md focus:outline-none bg-transparent border-2 border-zinc-600 rounded-md w-full"
          />
          <input
            type="submit"
            value="submit"
            className="border border-solid border-zinc-600 rounded-md p-2 mt-4 ml-[545px]"
          />
        </form>
      </div>
    </div>
  )
}
