import React, { useState, useEffect } from 'react'
import './debug.css'
export default function Home() {
  return (
    <div>
      <Carousel />
      <section className="flex items-center justify-center xs:w-[370px] md:w-[800px] lg:w-[1200px] mx-auto">
        <img
          src="/homeFlorallt.png"
          className="opacity-70 h-96 xs:hidden sm:hidden md:hidden lg:inline"
        />
        <img
          src="/homeRose.png"
          className="absolute opacity-30 h-96 lg:hidden"
        />
        {/*style={{ clipPath: 'inset(0 50% 0 0)' }} */}
        <div className="w-full lg:w-[800px] px-3 bg-white bg-opacity-70 py-10 rounded-xl shadow-xl">
          <div className="flex items-center justify-center">
            ✦
            <h1 className="xs:text-xl md:text-2xl text-center">
              Our vision and mission
            </h1>
            ✦
          </div>
          <p className="mt-5 xs:text-md md:text-lg text-justify leading-5">
            At Deeh we aim to develop an understanding of our origin. Deeh
            Foundation is committed to the study and promotion of the rich
            cultural traditions and craftsmanship of the vanishing
            Ghumantu/Vimukt community parallel to the Aranyak, Rural and Nagar
            communities of Indian society. These disappearing communities have
            kept their cultural traditions alive, in spite of the relentless
            migration and relocation by the nomadic communities. Historical
            facts show that from the knowledge of science of herbs to the
            invention and creation of primitive arts and crafts, there has been
            an unprecedented amount of contribution by these communities, the
            ignorance of the mainstream towards these communities has brought
            their rich knowledge and skill to the verge of oblivion. Deeh
            Foundation will work to preserve and promote the glorious history of
            these unknown and neglected communities, by bringing their arts and
            crafts to light, by documenting and researching. Along with this, by
            promoting education in these communities, according to their
            traditional knowledge and art oriented skills, it will cooperate at
            the campaign level in finding self-employment opportunities.
          </p>
          <p className="hinditext mt-3  md:text-[1.22rem] text-justify xs:leading-[1.55rem] md:leading-[2.2rem]">
            डीह की संकल्पना अपने मूल जड़ों को जानने व समझने से जुड़ी हुई है।
            भारतीय सामाज के आरण्यक ,ग्राम्य व नागर समुदायों के समानांतर घुमंतु
            /विमुक्त समुदाय की विलुप्त होती समृद्ध सांस्कृतिक परंपराओं व शिल्प
            कलाओं के अध्ययन व संवर्द्धन के लिए डीह फाउंडेशन प्रतिबद्ध हैं।
            विशेषकर घुमंतु समुदायों के द्वारा अनवरत प्रवास व स्थानांतरण करने के
            वाबजूद उन्होंने अपनी सांस्कृतिक परंपराओं को जीवित रखा । ऐतिहासिक
            तथ्य बताते है जड़ी बूटियों के ज्ञान विज्ञान से लेकर आदिम कलाओं व
            शिल्पों के आविष्कार व निर्माण में इन समुदायों का अभूतपूर्व योगदान
            रहा है लेकिन मुख्यधारा द्वारा इनके योगदान को रेखांकित न करने की
            उदासीनता ने इनके समृद्ध ज्ञान विज्ञान को विस्मृति के कगार पर पहुंचा
            दिया। डीह फाउंडेशन इन अज्ञात व उपेक्षित समुदायों के गौरवशाली इतिहास
            ,का शोधपरक अध्ययन कर इनकी कलाओं व शिल्पों को प्रकाश मे लाकर उन्हें
            लिपिबद्ध कर संरक्षित एवं संवर्धित करने का कार्य करेगा। साथ ही इन
            समुदायों में शिक्षा के प्रचार प्रसार द्वारा इनके पारंपरिक ज्ञान व
            कला दक्षता के अनुसार स्वरोजगार के अवसरों को तलाशने में अभियान स्तर
            पर सहयोग करेगा।
          </p>
        </div>
        {/*style={{ clipPath: 'inset(0 0 0 50%)' }} */}
        <img
          src="/homeFloralrt.png"
          className="opacity-70 h-96 xs:hidden sm:hidden md:hidden lg:inline"
        />
      </section>
    </div>
  )
}

function Carousel() {
  const [slideNum, setSlide] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((slideNum + 1) % totSlides)
    }, 3000)

    return () => clearInterval(interval)
  }, [slideNum])

  let slides = [
    {
      name: 'img1',
      link: 'assets/img1.webp',
      loc: 'Madhya Pradesh',
      desc: 'Heritage Site',
      pos: 0,
    },
    {
      name: 'img2',
      link: 'assets/img2.webp',
      loc: 'Madhya Pradesh',
      desc: 'Directors addressal',
      pos: 1,
    },
    {
      name: 'img3',
      link: 'assets/img3.webp',
      loc: 'Madhya Pradesh',
      desc: 'seminar',
      pos: 2,
    },
    {
      name: 'img4',
      link: 'assets/img4.webp',
      loc: 'Madhya Pradesh',
      desc: 'Heritage Site',
      pos: 3,
    },
    {
      name: 'img5',
      link: 'assets/img5.webp',
      loc: 'Madhya Pradesh',
      desc: 'Heritage Site',
      pos: 4,
    },
  ]
  let totSlides = 5
  const leftArrow = () => {
    setSlide((slideNum - 1 + totSlides) % totSlides)
  }
  const rightArrow = () => {
    setSlide((slideNum + 1) % totSlides)
  }

  return (
    <div className="flex relative items-center justify-center bg-tertiary-light bg-opacity-40 rounded-xl my-20 xs:w-[380px] md:w-[700px] xs:h-[300px] md:h-[400px] mx-auto shadow-xl">
      <img
        src="/homeSildeshowborder.png"
        className="absolute z-[-1] w-full h-full rounded-xl"
      />
      <button
        onClick={leftArrow}
        className="absolute left-2 bg-black bg-opacity-70 rounded-xl"
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 -4.5 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#FFFFFF"
          transform="rotate(270)"
          className="xs:w-5 xs:h-5 md:w-10 md:h-10"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>arrow_up [#FFFFFF]</title> <desc>Created with Sketch.</desc>
            <defs> </defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-260.000000, -6684.000000)"
                fill="#FFFFFF"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"
                    id="arrow_up-[#FFFFFF]"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
      {/* ------------------------------slide map-------------------------------*/}
      {slides.map((img, i) => (
        <div class={img.pos == slideNum ? 'flex flex-col' : 'hidden'}>
          <img src={img.link} alt={img.name} />
          <div className="absolute xs:bottom-2 md:bottom-5 text-white bg-black bg-opacity-80 p-2 xs:text-xs md:text-base left-1/2 -translate-x-1/2">
            {img.loc}, {img.desc}
          </div>
        </div>
      ))}
      <button
        onClick={rightArrow}
        className="absolute right-2 bg-black bg-opacity-70 rounded-xl"
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 -4.5 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#FFFFFF"
          transform="rotate(90)"
          className="xs:w-5 xs:h-5 md:w-10 md:h-10"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>arrow_up [#FFFFFF]</title> <desc>Created with Sketch.</desc>
            <defs> </defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-260.000000, -6684.000000)"
                fill="#FFFFFF"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"
                    id="arrow_up-[#FFFFFF]"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  )
}
