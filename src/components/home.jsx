import React from 'react'

export default function Home() {
  return (
    <div>
      <Carousel />
      <section className="xs:w-[370px] md:w-[800px] mx-auto py-10">
        <h1 className="xs:text-xl md:text-2xl">Our vision and mission</h1>
        <p className="mt-5 xs:text-md md:text-lg text-justify leading-5">
          At Deeh we aim to develop an understanding of our origin. Deeh
          Foundation is committed to the study and promotion of the rich
          cultural traditions and craftsmanship of the vanishing Ghumantu/Vimukt
          community parallel to the Aranyak, Rural and Nagar communities of
          Indian society. These disappearing communities have kept their
          cultural traditions alive, in spite of the relentless migration and
          relocation by the nomadic communities. Historical facts show that from
          the knowledge of science of herbs to the invention and creation of
          primitive arts and crafts, there has been an unprecedented amount of
          contribution by these communities, the ignorance of the mainstream
          towards these communities has brought their rich knowledge and skill
          to the verge of oblivion. Deeh Foundation will work to preserve and
          promote the glorious history of these unknown and neglected
          communities, by bringing their arts and crafts to light, by
          documenting and researching. Along with this, by promoting education
          in these communities, according to their traditional knowledge and art
          oriented skills, it will cooperate at the campaign level in finding
          self-employment opportunities.
        </p>
        <p className="hinditext mt-3  md:text-[1.22rem] text-justify xs:leading-[1.55rem] md:leading-[2.2rem]">
          डीह की संकल्पना अपने मूल जड़ों को जानने व समझने से जुड़ी हुई है।
          भारतीय सामाज के आरण्यक ,ग्राम्य व नागर समुदायों के समानांतर घुमंतु
          /विमुक्त समुदाय की विलुप्त होती समृद्ध सांस्कृतिक परंपराओं व शिल्प
          कलाओं के अध्ययन व संवर्द्धन के लिए डीह फाउंडेशन प्रतिबद्ध हैं। विशेषकर
          घुमंतु समुदायों के द्वारा अनवरत प्रवास व स्थानांतरण करने के वाबजूद
          उन्होंने अपनी सांस्कृतिक परंपराओं को जीवित रखा । ऐतिहासिक तथ्य बताते
          है जड़ी बूटियों के ज्ञान विज्ञान से लेकर आदिम कलाओं व शिल्पों के
          आविष्कार व निर्माण में इन समुदायों का अभूतपूर्व योगदान रहा है लेकिन
          मुख्यधारा द्वारा इनके योगदान को रेखांकित न करने की उदासीनता ने इनके
          समृद्ध ज्ञान विज्ञान को विस्मृति के कगार पर पहुंचा दिया। डीह फाउंडेशन
          इन अज्ञात व उपेक्षित समुदायों के गौरवशाली इतिहास ,का शोधपरक अध्ययन कर
          इनकी कलाओं व शिल्पों को प्रकाश मे लाकर उन्हें लिपिबद्ध कर संरक्षित एवं
          संवर्धित करने का कार्य करेगा। साथ ही इन समुदायों में शिक्षा के प्रचार
          प्रसार द्वारा इनके पारंपरिक ज्ञान व कला दक्षता के अनुसार स्वरोजगार के
          अवसरों को तलाशने में अभियान स्तर पर सहयोग करेगा।
        </p>
      </section>
    </div>
  )
}

function Carousel() {
  let images = {}
  return (
    <div className="flex items-center bg-secondary rounded-xl bg-opacity-30 my-20 xs:w-[300px] md:w-[700px] h-[400px] mx-auto shadow-xl">
      <img src="/assets/img1.webp" className="rounded-xl mx-auto" />
    </div>
  )
}
