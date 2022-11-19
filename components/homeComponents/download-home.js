import { EXTERNAL_ROUTE } from "../../consts/routes"
import Image from "next/image"
import Link from "next/link"
const socialPhoneImg = "/images/social_phone.png"
const explorePhoneImg = "/images/explore_phone.png"
const gplayIcon = "/images/icons/gplay.svg"
const astoreIcon = "/images/icons/astore.svg"

const DownloadHome = () => {
  const t = (a) => { return a }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-5xl font-extrabold mb-6">
            {t("downloadHomeTitle")}
          </h1>
          <p className="leading-8 font-normal mb-8">
            {t("downloadHomeDesc")}
          </p>
          <div>
            <h5 className="font-medium text-lg mb-2">{t("downloadHomeLink")}</h5>
            <div className="flex">
              <Link
                rel="noreferrer"
                target="_blank"
                href={EXTERNAL_ROUTE.GOOGLE_PLAY}
              >
                <Image alt="app store" width={135} height={40} src={gplayIcon} />
              </Link>
              <Link
                rel="noreferrer"
                target="_blank"
                href={EXTERNAL_ROUTE.APP_STORE}
              >
                <Image alt="app store" width={135} height={40} src={astoreIcon} className="ml-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block relative px-16">
          <div className="absolute phone-postion-1">
            <Image
              className="img-shadow-main"
              width={230}
              height={465}
              src={socialPhoneImg}
              alt="makromusic app social page"
            />
          </div>
          <div className="absolute phone-postion-2">
            <Image
              className="img-shadow-main"
              width={230}
              height={465}
              src={explorePhoneImg}
              alt="makromusic app explore page"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadHome
