import { EXTERNAL_ROUTE, APP_PATH , APP_ROUTE } from "../../consts/routes"
import Link from "next/link"
import Image from "next/image"


export const FooterHome = () => { 
    const t = (a)=>{return a}
    let logo = '/images/logo.png'
    let instagramLogo ='/images/icons/instagram.svg'
    let facebookLogo ='/images/icons/facebook.svg'
    let twitterLogo ='/images/icons/twitter.svg'
    return (
      <footer className="flex-shrink-0 bg-background text-white font-part mx-auto py-12">
        <div className="py-8">
          <div className="container m-auto">
            <div>
              <div className="flex flex-wrap max-w-full px-2 justify-between">
                <div className="w-full px-4 sm:w-1/2 lg:w-1/2">
                  <div>
                    <div className="flex flex-row items-center w-full h-full mb-10">
                      <Image
                        src={logo}
                        className="h-6"
                        width={306}
                        height={24}
                        alt="makromusic for artists"
                      />
                    </div>
                    <div className="mb-10 text-gray-300">
                      <p className="mb-2">Copyright © 2019 makromusic INC.</p>
                      <p>All rights reserved</p>
                    </div>
                    <div className="inline-block">
                      <div className="flex">
                        <Link href={EXTERNAL_ROUTE.INSTAGRAM}>
                          <Image
                            className="h-8"
                            src={instagramLogo}
                            width={33}
                            height={32}
                            alt="instagram-makromusic"
                          />
                        </Link>
                        <Link
                          className="ml-4"
                          href={EXTERNAL_ROUTE.FACEBOOK}
                        >
                          <Image
                            className="h-8"
                            src={facebookLogo}
                            width={33}
                            height={32}
                            alt="facebook-makromusic"
                          />
                        </Link>
                        <Link
                          className="ml-4"
                          href={EXTERNAL_ROUTE.TWITTER}
                        >
                          <Image
                            className="h-8"
                            src={twitterLogo}
                            width={40}
                            height={32}
                            alt="twitter-makromusic"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full px-4 sm:w-1/2 lg:w-1/2">
                  <div
                    className="
                      flex
                      items-start
                      w-full
                      mt-12
                      sm:mt-0 sm:w-1/3
                      lg:w-1/3 lg:justify-center
                    "
                  >
                    <div>
                      <h3 className="text-xl font-medium mb-4 sm:mb-8">
                      {t("footerAbout")}
                      </h3>
                      <ul className="text-base font-normal list-none">
                        <li className="mb-3">
                          <Link href="/#what-is">  {t("footerWhatis")} </Link>
                        </li>
                        <li className="mb-3">
                          <Link href="/#how-it-works"> {t("footerHowitworks")} </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="
                      flex
                      items-start
                      w-full
                      mt-12
                      sm:mt-0 sm:w-1/3
                      lg:w-1/3 lg:justify-center
                    "
                  >
                    <div>
                      <h3 className="text-xl font-medium mb-4 sm:mb-8">{t("footerSupport")}</h3>
                      <ul className="text-base font-normal list-none">
                        <li className="mb-3">
                          <Link href={APP_ROUTE.CONTACT}> {t("footerContact")} </Link>
                        </li>
                        <li className="mb-3">
                          <Link href={APP_ROUTE.FAQ}> {t("footerFaq")} </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="
                    flex
                    items-start
                    w-full
                    mt-12
                    sm:mt-0 sm:w-1/3
                    lg:w-1/3 lg:justify-center
                  "
                  >
                    <div>
                      <h3 className="text-xl font-medium mb-4 sm:mb-8">{t("footerPrivacy")}</h3>
                      <ul className="text-base font-normal list-none">
                        <li className="mb-3">
                          <Link href={APP_ROUTE.CLARIFICATION_TEXT}>
                            {" "}
                            {t("footerClarification")}{" "}
                          </Link>
                        </li>
                        <li className="mb-3">
                          <Link href={APP_ROUTE.MEMBERSHIP_AGREEMENT}>
                            {" "}
                            {t("footerMember")}{" "}
                          </Link>
                        </li>
                        <li className="mb-3">
                          <Link href={APP_ROUTE.TERMS_OF_SERVICE}>
                            {" "}
                            {t("footerSite")}{" "}
                          </Link>
                        </li>
                        <li className="mb-3">
                          <Link href={APP_ROUTE.COOKIE_POLICY}> {t("footerCookie")} </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }