import { Link } from "react-router-dom";
import Logo from "./Assets/samlogo.png";

const Header = () => {
    return(<>
        
 <header className="navigation fixed-top">
  <nav className="navbar navbar-expand-lg navbar-dark">
    {/* <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="Egen" /></a> */}
    <Link to='/' className="navbar-brand"><img src={Logo} alt="logo" style={{ 'height':'50px', 'width':'100px' }} /></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
      aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse text-center" id="navigation">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {/* <a className="nav-link" href="index.html">Home</a> */}
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="about.html">About</a> */}
          <Link to="/about" className="nav-link">About</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="services.html">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="blog.html">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="portfolio.html">Portfolio</a>
        </li> */}
        {/* <li className="nav-item dropdown"> */}
          {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a> */}
          {/* <div className="dropdown-menu"> */}
            {/* <a className="dropdown-item" href="team.html">Team</a> */}
            {/* <a className="dropdown-item" href="team-single.html">Team Details</a> */}
            {/* <a className="dropdown-item" href="career.html">Career</a> */}
            {/* <a className="dropdown-item" href="career-single.html">Career Details</a> */}
            {/* <a className="dropdown-item" href="blog-single.html">Blog Details</a> */}
            {/* <a className="dropdown-item" href="pricing.html">Pricing</a></a> */}
            {/* <a className="dropdown-item" href="faqs.html">FAQ's</a> */}
          {/* </div> */}
        {/* </li> */}
        <li className="nav-item">
          {/* <a className="nav-link" href="contact.html">Contact</a> */}
            <Link to='/contact' className="nav-link">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
</header>

    </>)
}

export default Header;