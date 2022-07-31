import grouppic from "./Assets/grouppic.jpg";
import gurukul from "./Assets/gurukul.png";
import videothumb from "./Assets/video.jpg";
// import Brush from "./Assets/brush.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchURLSwapGETIMG } from "../FetchURLSwap.js";
const AboutBody = () => {
  const [oldData, newData] = useState([]);
    useEffect(()=>{
      fetch(FetchURLSwapGETIMG).then(response => response.json()).then(data => newData(data)).catch(err => console.log(err))
    },[])

    
    return(<>



<section>
<img  src={grouppic} className="banner bg-cover position-relative d-flex justify-content-center align-items-center" style={{ 'width': '100%'}} alt="banner" />
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        {/* <h1 className="display-1 text-white font-weight-bold font-primary">About Agen</h1> */}
      </div>
    </div>
  </div>
</section>
{/* Banner Section */}


{/* <!-- progressbar --> */}
<section className="section pb-0">
  <div className="container">
    <div className="row">
      <div className="col-md-6 mb-4 mb-lg-0">
        <img src={gurukul} alt="about" style={{ 'height': '300px' }} className="img-fluid" />
      </div>
      <div className="col-md-6 col-lg-5">
        <div className="progress-block">
          <h6 className="text-uppercase">Experienced Staff</h6>
          <div className="progress">
            <div className="progress-bar" data-percent="98">
              <span className="skill-number text-dark font-weight-bold"><span className="count">98</span>%</span>
            </div>
          </div>
        </div>
        <div className="progress-block">
          <h6 className="text-uppercase">Computer Lab</h6>
          <div className="progress">
            <div className="progress-bar" data-percent="95">
              <span className="skill-number text-dark font-weight-bold"><span className="count">95</span>%</span>
            </div>
          </div>
        </div>
        <div className="progress-block">
          <h6 className="text-uppercase">Digital Classes</h6>
          <div className="progress">
            <div className="progress-bar" data-percent="96">
              <span className="skill-number text-dark font-weight-bold"><span className="count">96</span>%</span>
            </div>
          </div>
        </div>
        <div className="progress-block">
          <h6 className="text-uppercase">Adaptive Communication</h6>
          <div className="progress">
            <div className="progress-bar" data-percent="90">
              <span className="skill-number text-dark font-weight-bold"><span className="count">90</span>%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /progressbar --> */}


{/* <!-- video --> */}
<section className="section pb-0">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="overlay-secondary video-player">
          <img src={videothumb} alt="video-thumb" className="img-fluid w-100" />
          <a className="play-icon" href="https://www.youtube.com/embed/qCPNgTqF1BA">
            <i className="text-center icon-sm icon-box-sm rounded-circle text-white bg-gradient-primary d-block ti-control-play content-center"
              data-video="https://www.youtube.com/embed/qCPNgTqF1BA">
              <div className="ripple"></div>
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /video --> */}


{/* <!-- testimonial-slider --> */}
<section className="section">
  <div className="container section-sm overlay-secondary-half bg-cover" data-background="">
  <div className="row">
    <div className="col-lg-8 offset-lg-1">
      <h2 className="text-gradient-primary">Let's Start With Us!</h2>
      <p className="h4 font-weight-bold text-white mb-4">आरम्भ है प्रचण्ड!!</p>
      {/* <a href="contact.html" className="btn btn-lg btn-primary">Contact Us</a> */}
      <Link to="/contact" className="btn btn-lg btn-primary">Contact Us</Link>
    </div>
  </div>
</div>
</section>
{/* <!-- /testimonial-slider --> */}

 <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h2>Events</h2>
                <p>
                  Events encourage social abilities and understanding the
                  outward-oriented dimensions of emotional intelligence.
                </p>
                <div className="section-border" />
              </div>
            </div>
            <div className="row no-gutters">
            {oldData.map( x =>
                         
                          <div className="col-lg-3 col-sm-6">
                            <div className="card hover-shadow">
                              <img
                                src={x.edata}
                                alt="team-member"
                                className="card-img-top"
                                style={{ 'height': '200px', 'padding':'4px' }}
                              />
                              <div className="card-body text-center position-relative zindex-1">
                                <h4>{x.ename}</h4>
                                <i></i>
                              </div>
                            </div>
                          </div>
                        )}
                        </div>
            {/* <div className="row no-gutters">
              <div className="col-lg-3 col-sm-6">
                <div className="card hover-shadow">
                  <img
                    src={""}
                    alt="team-member"
                    className="card-img-top"
                    style={{ 'height': '200px', 'padding':'4px' }}
                  />
                  <div className="card-body text-center position-relative zindex-1">
                    <h4>Rangoli Compitition</h4>
                    <i></i>
                  </div>
                </div>
              </div>
            </div> */}


          </div>
        </section> 

    </>)
}

export default AboutBody;