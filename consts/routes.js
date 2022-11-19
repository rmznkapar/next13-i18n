export const API_URL =
  typeof window !== "undefined"
    ? window.location.hostname === "artist-test.makromusic.com" ||
      window.location.hostname === "localhost"
      ? "https://artist-test.makromusic.com/api/"
      : "https://artists.makromusic.com/api/"
    : "https://artist-test.makromusic.com/api/"
export const APP_URL = "http://localhost:3000/"
export const APP_PATH = "/app"
export const IMG_URL = "/imgs/"

export const API_ROUTE = {
  LOGIN: API_URL + "login",
  REGISTER: API_URL + "register",
  MY_CAMPAIGNS: API_URL + "my_campaigns",
  CREATE_CAMPAIGN: API_URL + "create_campaign",
  DELETE_CAMPAIGN: API_URL + "campaign",
  CAMPAIGN_DETAILS: API_URL + "campaign_details",
  SEARCH_IN_SPOTIFY: API_URL + "search_in_spotify",
  TRACK_INFO: API_URL + "track_info",
  SEND_VALIDATE_EMAIL: API_URL + "send_validate_email",
  VALIDATE_EMAIL: API_URL + "validate_email",
  CHANGE_PASSWORD: API_URL + "change_password",
  CHANGE_EMAIL: API_URL + "change_mail",
  CHANGE_NAME: API_URL + "change_name",
  CHANGE_ADDRESS: API_URL + "change_address",
  DELETE_ACCOUNT: API_URL + "delete_account",
  PRICE_LIST: API_URL + "price_list",
  CREATE_CHECKOUT_SESSION: API_URL + "create-checkout-session",
  CREATE_CHECKOUT_CHANGE_TRACK_SESSION:
    API_URL + "create-checkout-change-track-session",
  FORGOT_MY_PASSWORD: API_URL + "forgot_my_password",
  RESET_PASSWORD: API_URL + "reset_password",
  CONTACT: API_URL + "contact_email",
  ME: API_URL + "me",
  MY_COUPONS: API_URL + "my_coupons",
  NAVIGATION: API_URL + "navigation",
  FEEDBACKS: campaignId => API_URL + "campaigns/" + campaignId + "/feedbacks",
  POPOUPS: campaignId => API_URL + "campaigns/" + campaignId + "/popups",
}

export const APP_ROUTE = {
  LOGIN: APP_PATH + "/login",
  REGISTER: APP_PATH + "/register",
  HOME: "/",
  HOME_REACT: APP_PATH + "/",
  CAMPAIGNS: APP_PATH + "/campaigns",
  CAMPAIGN_DETAILS: APP_PATH + "/campaign",
  CAMPAIGN_DETAILS_QUERY: APP_PATH + "/campaign?campaign_id=",
  CAMPAIGN: APP_PATH + "/campaign/:id",
  CAMPAIGN_CHANGE_TRACK_QUERY: APP_PATH + "/campaign/change-track?campaign_id=",
  CAMPAIGN_UNPUBLISHED_TRACK_QUERY:
    APP_PATH + "/campaign/unpublished-track?campaign_id=",
  NEW_CAMPAIGN: APP_PATH + "/new-campaign",
  NEW_CAMPAIGN_SEARCH: APP_PATH + "/new-campaign/search",
  NEW_CAMPAIGN_PACKAGES: APP_PATH + "/new-campaign/packages",
  NEW_CAMPAIGN_PACKAGES_QUERY: APP_PATH + "/new-campaign/packages?track_id=",
  NEW_CAMPAIGN_ADDITIONAL_PACKAGES:
    APP_PATH + "/new-campaign/additional-packages",
  NEW_CAMPAIGN_ADDITIONAL_PACKAGES_QUERY:
    APP_PATH +
    "/new-campaign/additional-packages?only_addons=true&campaign_id=",
  NEW_CAMPAIGN_DATE: APP_PATH + "/new-campaign/date",
  NEW_CAMPAIGN_ADDRESS: APP_PATH + "/new-campaign/address",
  NEW_CAMPAIGN_PAYMENT: APP_PATH + "/new-campaign/payment/:campaign_id?",
  NEW_CAMPAIGN_PAYMENT_PUSH: APP_PATH + "/new-campaign/payment/",
  NEW_CAMPAIGN_PAYMENT_QUERY: APP_PATH + "/new-campaign/payment?campaign_id=",
  NEW_CAMPAIGN_COMPLETED: APP_PATH + "/new-campaign/completed",
  REFRESH_CAMPAIGN: APP_PATH + "/refresh-campaign",
  FORGOT_MY_PASSWORD: APP_PATH + "/forgot-my-password",
  RESET_PASSWORD: APP_PATH + "/reset-password",
  DETAILS: APP_PATH + "/details",
  SETTINGS: APP_PATH + "/settings",
  COUPONS: APP_PATH + "/coupons",
  FAQ: "/faq",
  CONTACT: "/contact",
  LEGAL: "/legal",
  TERMS_OF_SERVICE: "/policy/terms-of-service",
  DISTANCE_SALE_AGREEMENT: "/policy/distance-sale-agreement",
  MEMBERSHIP_AGREEMENT: "/policy/membership-agreement",
  COOKIE_POLICY: "/policy/cookie-policy",
  CLARIFICATION_TEXT: "/policy/clarification-text",
  PRIVACY: "/privacy",
  BLOG: "/blog",
}

export const EXTERNAL_ROUTE = {
  GOOGLE_PLAY:
    "https://play.google.com/store/apps/details?id=com.makro_music.app",
  APP_STORE:
    "https://apps.apple.com/tr/app/makromusic-for-spotify/id1498773489",
  INSTAGRAM: "https://www.instagram.com/makromusicapp/",
  FACEBOOK: "https://www.facebook.com/makromusicapp",
  TWITTER: "https://twitter.com/makromusicapp",
}

export const NC_ROUTE_ORDER = [
  APP_ROUTE.NEW_CAMPAIGN,
  APP_ROUTE.NEW_CAMPAIGN_PACKAGES,
  APP_ROUTE.NEW_CAMPAIGN_ADDITIONAL_PACKAGES,
  APP_ROUTE.NEW_CAMPAIGN_DATE,
  APP_ROUTE.NEW_CAMPAIGN_ADDRESS,
  APP_ROUTE.NEW_CAMPAIGN_PAYMENT_PUSH,
]

export const REQ_NC_ROUTES = {
  [APP_ROUTE.NEW_CAMPAIGN]: {
    reqs: [],
  },
  [APP_ROUTE.NEW_CAMPAIGN_PACKAGES]: {
    reqs: ["track"],
  },
  [APP_ROUTE.NEW_CAMPAIGN_DATE]: {
    reqs: ["track", "package"],
  },
  [APP_ROUTE.NEW_CAMPAIGN_ADDRESS]: {
    reqs: ["track", "package", "date"],
  },
}
