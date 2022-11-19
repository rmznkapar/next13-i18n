// import { useState, useContext, useEffect } from "react"
// import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"
// import { Link, navigate } from "gatsby"

// import Logo from "./common/logo"
// import { APP_ROUTE } from "../constants/Routes"
// import { authLogout } from "../services/Auth"
// import {
//   GlobalDispatchContext,
//   GlobalStateContext,
// } from "../context/GlobalContextProvider"
// import { LANGUAGE_DICT } from "../constants/Dicts"
// import Campaign from "../images/icons/campaign.in.svg"
// import Settings from "../images/icons/settings.in.svg"
// import Discount from "../images/icons/discount.in.svg"
// import Info from "../images/icons/info.in.svg"
// import Message from "../images/icons/message.in.svg"
// import Logout from "../images/icons/logout.in.svg"
// import Globe from "../images/icons/globe.in.svg"
// import Plus from "../images/icons/plusSolid.in.svg"
// import ACTION_KEY from "../context/reducers/actionKey"
// import Button from "./common/button"

// let langNavs = []

// const MobileMenu = ({ type = "app" }) => {
//   const { t } = useTranslation()
//   const { languages, changeLanguage, language } = useI18next()

//   const dispatch = useContext(GlobalDispatchContext)
//   const { ncPage } = useContext(GlobalStateContext)

//   const [isOpen, setIsOpen] = useState(false)

//   useEffect(() => {
//     langNavs = languages
//       .filter(lng => lng !== language)
//       .map(lng => {
//         return {
//           onClick: () => changeLanguage(lng),
//           title: LANGUAGE_DICT[language][lng],
//         }
//       })
//   }, [])

//   const homeNavs = [
//     [
//       {
//         link: APP_ROUTE.LOGIN,
//         title: t("panelNavLogin"),
//       },
//       {
//         link: APP_ROUTE.REGISTER,
//         title: t("panelNavRegister"),
//       },
//     ],
//     [
//       ...langNavs,
//       {
//         link: APP_ROUTE.FAQ,
//         title: t("panelNavFaq"),
//       },
//       {
//         link: APP_ROUTE.CONTACT,
//         title: t("panelNavContact"),
//       },
//     ],
//   ]

//   const appNavs = [
//     [
//       {
//         link: APP_ROUTE.CAMPAIGNS,
//         title: t("panelNavHome"),
//         icon: <Campaign />,
//       },
//       {
//         link: APP_ROUTE.COUPONS,
//         title: t("panelNavCoupons"),
//         icon: <Discount />,
//       },
//       {
//         link: APP_ROUTE.SETTINGS,
//         title: t("panelNavSettings"),
//         icon: <Settings />,
//       },
//       {
//         onClick: () => dispatch({ type: ACTION_KEY.TOGGLE_LANGUAGE_MODAL }),
//         title: t(language) + ` (${language.toUpperCase()})`,
//         icon: <Globe />,
//       },
//     ],
//     [
//       {
//         onClick: authLogout,
//         title: t("panelNavLogout"),
//         icon: <Logout />,
//       },
//       {
//         link: APP_ROUTE.CONTACT,
//         title: t("panelNavContact"),
//         icon: <Message />,
//       },
//       {
//         link: APP_ROUTE.FAQ,
//         title: t("panelNavFaq"),
//         icon: <Info />,
//       },
//     ],
//   ]

//   return (
//     <>
//       <div
//         // id="mobile-menu"
//         className={
//           "duration-500 z-20 bg-[#0f141ecc] backdrop-blur-[14px] p-4 pt-8 flex justify-end fixed flex-col h-[calc(100vh_-_64px)] bottom-16 w-full " +
//           (isOpen ? "opacity-100" : "translate-y-[100vh]")
//         }
//       >
//         <div className="border-b border-casper">
//           {(type === "home" ? homeNavs : appNavs)[1].map(nav => (
//             <div key={nav.title}>
//               {nav.link ? (
//                 <Link
//                   key={nav.title}
//                   to={nav.link}
//                   className={
//                     "flex items-center mb-3 py-1 px-3 hover:text-gray-100 text-base " +
//                     (ncPage === nav.link
//                       ? "text-primary font-bold"
//                       : "font-semibold")
//                   }
//                 >
//                   {nav.icon ? <span className="mr-4">{nav.icon}</span> : ""}{" "}
//                   {nav.title}
//                 </Link>
//               ) : (
//                 <div
//                   key={nav.title}
//                   className="flex items-center mb-3 py-1 px-3 hover:text-gray-100 text-base"
//                   onClick={nav.onClick}
//                 >
//                   {nav.icon ? <span className="mr-4">{nav.icon}</span> : ""}{" "}
//                   {nav.title}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="mt-4">
//           {(type === "home" ? homeNavs : appNavs)[0].map(nav => (
//             <div key={nav.title}>
//               {nav.link ? (
//                 <Link
//                   key={nav.title}
//                   to={nav.link}
//                   className={
//                     "flex items-center mb-3 py-1 px-3 text-base hover:text-gray-100 " +
//                     (ncPage === nav.link
//                       ? "text-primary font-bold"
//                       : "font-semibold")
//                   }
//                 >
//                   {nav.icon ? <span className="mr-4">{nav.icon}</span> : ""}{" "}
//                   {nav.title}
//                 </Link>
//               ) : (
//                 <div
//                   key={nav.title}
//                   className="flex items-center mb-3 py-1 px-3 font-semibold text-base hover:text-gray-100"
//                   onClick={nav.onClick}
//                 >
//                   {nav.icon ? <span className="mr-4">{nav.icon}</span> : ""}{" "}
//                   {nav.title}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         {type === "app" && (
//           <Button onClick={() => navigate(APP_ROUTE.NEW_CAMPAIGN)} fullWidth>
//             <div className="flex items-center justify-center">
//               <span className="mr-2.5">
//                 <Plus />
//               </span>
//               {t("panelNavNewCampaign")}
//             </div>
//           </Button>
//         )}
//       </div>
//       <div className="sm:hidden fixed bottom-0 z-30 w-full bg-[#0f141e85] border-t border-casper backdrop-blur-[14px]">
//         <div
//           className={
//             "px-4 py-6 flex justify-between z-20 " + (isOpen ? "relative" : "")
//           }
//         >
//           <Logo />
//           <div
//             id="hamburger-btn"
//             className={
//               "inline-block cursor-pointer md:hidden " + (isOpen ? "open" : "")
//             }
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default MobileMenu
