import React from 'react'
import { MdDownloading } from 'react-icons/md'
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share'

export default function Donate() {
  let imageSrc = 'https://imgur.com/a/LF92hLA'
  let note =
    'Consider donating to DeehFoundation, scan the QRcode using any digital wallet'

  return (
    <div className="flex flex-col m-10 mb-24 xs:w-[370px] md:w-[800px] mx-auto">
      <div className="border border-solid m-10 xs:w-[300px] md:w-[500px] mx-auto p-10 font-semibold text-center rounded-3xl relative">
        <img
          src="/donateFlower.jpg"
          className="absolute top-0 left-0 z-[-1] h-full w-full object-cover rounded-3xl opacity-20"
        />
        <h1 className="text-3xl italic mb-3">Donate</h1>
        <div>
          <h3>to support our cause,</h3>
          <h3>Please consider donating.</h3>
        </div>
        <img src="/donateQrcode.webp" className="mx-auto my-3" />
        <div className="leading-5">
          <p>DEEH Foundation</p>
          <p>A.C No. 5492000100104901</p>
          <p>IFSX KARB0000549</p>
          <p>Karnataka Bank</p>
        </div>
      </div>

      <div className="flex flex-col mt-10 justify-center items-center">
        <p>~~~~~~~~~~~~share~~~~~~~~~~~~</p>
        <div className="flex justify-between mt-5 w-52">
          <a href={imageSrc}>
            <MdDownloading size={32} />
          </a>
          <FacebookShareButton url={imageSrc} quote={note}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={imageSrc} quote={note}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={imageSrc} quote={note}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <TelegramShareButton url={imageSrc} quote={note}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  )
}
