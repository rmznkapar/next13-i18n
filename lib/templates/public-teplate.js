import PropTypes from "prop-types"
import "../../styles/public.css"

import NavbarHome from "../../components/homeComponents/Navbar"
import MobileMenu from "../../components/mobile-menu"
import Seo from "../../components/seo"

const PublicTemplate = ({ children, title }) => {
  return (
    <>
      {/* <Seo title={title} /> */}
      <div className="home-bg-gradient w-full sm:w-auto"></div>
      <NavbarHome />
      {/* <MobileMenu type="home" /> */}
      <main>{children}</main>
    </>
  )
}

PublicTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PublicTemplate
