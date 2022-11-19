import { APP_ROUTE } from '../../consts/routes';
import Link from 'next/link';
import Image from 'next/image';
const campaignImg = "/images/campaign.png"
const phoneImg = '/images/phone.png'

const HeroHome = () => {
  const t = (a) => { return a }

  return (
    <div
      id="what-is"
      className="xxl:relative xl:mt-2 xxl:mt-8 mb-16 sm:mb-0"
    >
      <div
        id="heroimg-box"
        className="left-1/2 absolute py-8 xxl:py-0 top-0 hidden md:block w-full ml-6"
      >
        <div className="h-full absolute right-0 w-9/12">
          <Image
            id="heroimg-phone"
            className="ml-auto absolute bottom-0 z-10 w-auto h-full"
            src={phoneImg}
            alt="phone"
            width={295}
            height={570}
          />
          <Image
            className="ml-auto w-auto h-full absolute top-0"
            // style="animation: 1.5s ease-in-out 0s 1 slideInFromTop"
            src={campaignImg}
            alt="makromusic for artists dashboard"
            width={887}
            height={570}
          />
        </div>
        {/* <!-- <img
        className="ml-auto w-auto"
        style="width: 56%; height: auto"
        src="/imgs/hold-hero.png"
      /> --> */}
      </div>
      <div className="pt-20 pb-10 md:py-4">
        <div className="md:mx-auto md:mt-24">
          <div className="md:flex md:flex-wrap">
            <div className="md:w-1/2 text-left md:pt-16 relative z-10 md:pr-20">
              <h1
                className="
                font-bold
                text-white text-4xl
                sm:text-5xl
                md:text-6-5xl
                leading-tight
                mb-5
              "
              >
                {/* <Trans i18nKey={"heroHomeTitle"}> */}
                <span className="text-primary"> karşısına çıkart</span>
                {/* </Trans> */}
              </h1>
              <div className="mb-8">
                <p className="text-base">
                  {t("heroHomeDesc")}
                </p>
              </div>
              <div>
                <Link
                  href={APP_ROUTE.LOGIN}
                  className="
                  inline-block
                  text-base
                  font-semibold
                  py-3
                  sm:py-4
                  px-6
                  sm:px-16
                  bg-primary
                  rounded-md
                "
                >
                  {t("heroHomeBtn")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHome
