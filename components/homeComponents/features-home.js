import Image from "next/image"
import Link from "next/link"

const statsImg = '/images/stats.png'
const arrowIcon = '/images/icons/arrow.svg'

const HiwCard = ({ title, desc }) => {
  return (
    <div className="flex flex-col flex-1 my-5 md:my-0 md:px-1">
      <div className="flex items-center mb-6">
        <div className="h-5 w-5 rounded-full bg-primary flex-shrink-0"></div>
        <div className="w-full px-4">
          <h1 className="text-2xl text-primary font-medium">{title}</h1>
        </div>
      </div>
      <p>{desc}</p>
    </div>
  )
}

const FeaturesHome = () => {
  const t = (a)=>{return a}

  const hiwSteps = [
    { title: t("hiw0Title"), desc: t("hiw0Desc")},
    { title: t("hiw1Title"), desc: t("hiw1Desc")},
    { title: t("hiw2Title"), desc: t("hiw2Desc")},
    { title: t("hiw3Title"), desc: t("hiw3Desc")},
  ];

  return (
    <div className="sm:px-6">
      <h3 className="font-bold text-2xl sm:text-5xl text-white mb-6">
        {t("hiwTitle")}
      </h3>
      <div
        className="
            flex
            justify-between
            flex-col
            sm:flex-row
            flex-wrap
            md:flex-no-wrap
            gap-x-6
          "
      >
        {hiwSteps.map((step) => (
          <HiwCard key={step.title} title={step.title} desc={step.desc} />
        ))}
      </div>
      <div className="sm:px-6 pt-24">
        <div className="block md:flex justify-center">
          <div className="w-full mb-12 sm:mb-0 flex md:block justify-center md:w-1/2">
            <Image alt="makromusic for artists statics" width={632} height={508} className="w-full sm:w-1/2 md:w-full" src={statsImg} />
          </div>
          <div className="md:w-1/2 sm:px-12 flex flex-col justify-center">
            <h1 className="mb-8 font-bold text-2xl sm:text-4xl">
              {t("statsHomeTitle")}
            </h1>
            <p className="mb-8 leading-8">{t("statsHomeDesc")}</p>
            <Link href="/app/login" className="flex text-primary">{t("statsHomeLink")} <Image alt="arrow" width={23} height={24} src={arrowIcon} className="ml-4"/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesHome
