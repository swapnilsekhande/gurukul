import MapPhoto from "./Assets/map.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FetchURLSwapPOST } from "../FetchURLSwap.js";
const Footer = () => {
    const [oldpname, newpname] = useState("");
    const [oldpemail, newpemail] = useState("");
    const [oldpmess, newpmess] = useState("");

    const HandleForm =(event) => {
        event.preventDefault();
        if(Boolean(oldpname) && Boolean(oldpemail) && Boolean(oldpmess))
        {
          const MDinsert = {
            "pname" : oldpname,
            "pemail": oldpemail,
            "pmess": oldpmess
          }
          fetch(FetchURLSwapPOST, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(MDinsert)
          }).then(response => response.json()).then(data => console.log(data))
          newpname("");
          newpemail("");
          newpmess("");
        }
        // console.log({
        //   "pname" : oldpname,
        //   "pemail": oldpemail,
        //   "pmess": oldpmess
        // })
        // newpname("");
        // newpemail("");
        // newpmess("");

    }

    const Handlepname = (event) => {
      newpname(event.target.value);
    }
    const Handlepemail = (event) => {
      newpemail(event.target.value);
    }
    const Handlepmess = (event) => {
      newpmess(event.target.value);
    }
    return(<>
    {/* <!-- footer --> */}



<footer className="bg-secondary position-relative">
  <img src={MapPhoto} className="img-fluid overlay-image" alt="" />
  <div className="section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-3 col-6">
          <h4 className="text-white mb-5">About</h4>
          <ul className="list-unstyled">
              <p>The great thing about learning is that you never have to stop! There's no limit as to the amount of knowledge you can obtain. So,
a page from Gandhis book and keep on learning while you're living</p>
            {/* <li><a href="#" class="text-light d-block mb-3">Service</a></li> */}
            {/* <li><a href="#" class="text-light d-block mb-3">Conatact</a></li> */}
            {/* <li><a href="#" class="text-light d-block mb-3">About us</a></li> */}
            {/* <li><a href="#" class="text-light d-block mb-3">Blog</a></li> */}
            {/* <li><a href="#" class="text-light d-block mb-3">Support</a></li> */}
          </ul>
        </div>
        <div className="col-md-3 col-6">
          <h4 className="text-white mb-5">Visit US</h4>
          <ul className="list-unstyled">
            {/* <li><a href="#" class="text-light d-block mb-3">Service</a></li> */}
            <Link to="/" className="text-light d-block mb-3">Home</Link>
            {/* <li><a href="#" class="text-light d-block mb-3">Conatact</a></li> */}
            <Link to="/about" className="text-light d-block mb-3">About</Link>
            {/* <li><a href="#" class="text-light d-block mb-3">About us</a></li> */}
            <Link to="/contact" className="text-light d-block mb-3">Contact</Link>
            {/* <li><a href="#" class="text-light d-block mb-3">Blog</a></li> */}
            {/* <li><a href="#" class="text-light d-block mb-3">Support</a></li> */}
          </ul>
        </div>
        <div className="col-md-6">
          <div className="bg-white p-4">
            <h3>Contact us</h3>
            <form onSubmit={HandleForm}>
              <input type="text" onChange={Handlepname} value={oldpname} className="form-control mb-4 px-0" placeholder="Full name" />
              <input type="text" onChange={Handlepemail} value={oldpemail} className="form-control mb-4 px-0" placeholder="Email address" />
              <textarea name="message" onChange={Handlepmess} value={oldpmess} id="message" className="form-control mb-4 px-0" placeholder="Message"></textarea>
              <button className="btn btn-primary" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="pb-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-left">
          <p className="text-light mb-0">Copyright &copy; 2022 a Developed by <a className="text-gradient-primary" href="https://www.instagram.com/ekhandeswapnil/">Miracle Developers Community</a>
          </p>
        </div>
        <div className="col-md-6">
          <ul className="list-inline text-md-right text-center">
            {/* <li className="list-inline-item"><a className="d-block p-3 text-white" href="*"><i className="ti-facebook"></i></a></li>
            <li className="list-inline-item"><a className="d-block p-3 text-white" href="*"><i className="ti-twitter-alt"></i></a></li>
            <li className="list-inline-item"><a className="d-block p-3 text-white" href="*"><i className="ti-instagram"></i></a></li>
            <li className="list-inline-item"><a className="d-block p-3 text-white" href="*"><i className="ti-github"></i></a></li> */}
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* <!-- /footer --> */}
    </>)
}

export default Footer;