import React from 'react'

export default function Donate() {
  return (
    <div className="flex flex-col m-10 mb-24 w-[800px] mx-auto">
      <div className="border border-solid m-10 w-[500px] mx-auto p-10 text-center rounded-3xl">
        <h1 className="text-3xl italic mb-3">Donate</h1>
        <div>
          <h3>to support our cause,</h3>
          <h3>Please consider donating.</h3>
        </div>
        <img src="/qrcode.webp" className="mx-auto my-3" />
        <div className="leading-5">
          <p>DEEH Foundation</p>
          <p>A.C No. 5492000100104901</p>
          <p>IFSX KARB0000549</p>
          <p>Karnataka Bank</p>
        </div>
      </div>
      <button className="w-28 border border-solid border-zinc-600 rounded-md p-2 mx-auto">
        share
      </button>
    </div>
  )
}
