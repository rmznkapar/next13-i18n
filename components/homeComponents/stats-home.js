const ItemStats = ({ name, stat }) => {
  return (
    <div className="w-1/2 py-4 px-2 sm:w-auto sm:flex-grow">
      <div className="sm:mr-4 border-b-2 border-primary">
        <p className="font-bold text-2xl sm:text-6xl text-primary">{stat}</p>
        <p className="mb-2">{name}</p>
      </div>
    </div>
  )
}

const StatsHome = () => {
  const t = (a) => { return a }

  return (
    <div className="flex items-center justify-between flex-wrap sm:gap-x-12 sm:px-6 mb-16">
      <ItemStats name={t("statsHome0")} stat={"170+"} />
      <ItemStats name={t("statsHome1")} stat={"300+"} />
      <ItemStats name={t("statsHome2")} stat={"3.5M+"} />
      <ItemStats name={t("statsHome3")} stat={"1.5M+"} />
    </div>
  )
}

export default StatsHome
