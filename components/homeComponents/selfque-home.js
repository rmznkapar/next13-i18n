const heartIcon = './images/icons/heart.svg'
const staticsIcon = '/images/icons/statics.svg'
const searchIcon = '/images/icons/search.svg'
const trendIcon = '/images/icons/trend.svg'

const ItemSelfque = ({title, desc, icon, iconAlt="makromusic"}) => {  
  return (
    <div className="flex">
      <div className="feature-icon-holder mr-4 mt-4 flex-shrink-0">
        <img alt={iconAlt} src={icon} />
      </div>
      <div className="flex flex-col justify-around">
        <h3 className="text-2xl text-primary font-semibold mb-2">
          {title}
        </h3>
        <p>
          {desc}
        </p>
      </div>
    </div>
  )
}

const SelqueHome = () => {
  const t  = (a)=>{return a}

  return (
    <div id="how-it-works" className="px-0 sm:px-6 py-16 sm:py-24 md:py-24">
      <div>
        <h1 className="font-bold text text-2xl sm:text-5xl">
          {t("selfqueHomeTitle")}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-y-12 gap-x-8 py-12">
        <ItemSelfque 
          title={t("selfqueHome0Title")} 
          desc={t("selfqueHome0Desc")}
          icon={heartIcon}
          iconAlt="heart"
        />
        <ItemSelfque 
          title={t("selfqueHome1Title")} 
          desc={t("selfqueHome1Desc")}
          icon={searchIcon}
          iconAlt="search"
        />
        <ItemSelfque 
          title={t("selfqueHome2Title")} 
          desc={t("selfqueHome2Desc")}
          icon={staticsIcon}
          iconAlt="statics"
        />
        <ItemSelfque 
          title={t("selfqueHome3Title")} 
          desc={t("selfqueHome3Desc")}
          icon={trendIcon}
          iconAlt="trend"
        />
      </div>
    </div>
  )
}

export default SelqueHome
