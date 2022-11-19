import Link from "next/link";
import Image from "next/image";
import { APP_ROUTE } from "../../consts/routes"
import { Button } from "../common/Button";


const NavbarHome = () => {
  const t = (a) => { return a }
  const Logo = "/images/logo.png"

  return (
    <header>
      <div className=" box-shadow-main px-4 lg:px-8 sticky top-0 w-full md:relative md:w-auto hidden md:block">
        <div className="py-2 md:px-6 md:container md:mx-auto md:flex md:items-center md:justify-between">
          <div className="flex justify-between">
            <div className="flex justify-between items-center w-full md:w-auto">
              <div
                className="inline-block py-2 text-white text-xl font-bold"
              >
                <Image src={Logo} width={306} height={24} />
              </div>
            </div>

            <div className="md:ml-12 text-white">
              <div className="hidden  md:block">
                <Link
                  href={APP_ROUTE.FAQ}
                  className=" inline-block py-1 text-base md:py-4 hover:text-gray-100 mr-8"
                >
                  {t("navbarHomeFAQ")}
                </Link>
                <Link
                  href={APP_ROUTE.CONTACT}
                  className="inline-block py-1 text-base md:py-4 hover:text-gray-100 mr-8"
                >
                  {t("navbarHomeContact")}
                </Link>
                {/* {languages.map((lng) => {
                  if (language !== lng) {
                    return */}
                <Link
                  className="inline-block py-1 text-base md:py-4 hover:text-gray-100 mr-8"
                  // key={lng}
                  href="#"
                // onClick={(e) => {
                //   e.preventDefault();
                //   changeLanguage(lng);
                // }}
                >
                  {/* {LANGUAGE_DICT[language][lng]} */}
                </Link>
                {/* }
                  return '';
                })} */}
              </div>
            </div>
          </div>

          <div className="hidden md:block text-white">
            <Button type="transparent" link={APP_ROUTE.LOGIN}>
              {t("navbarHomeLogin")}
            </Button>
            <Button type="primary" link={APP_ROUTE.REGISTER}>
              {t("navbarHomeRegister")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavbarHome
