import bannerimg from "./Assets/bannerimg.jpg";
import feature from "./Assets/event.jpg";
import Swami from "./Assets/swami.jpg";
import event1 from "./Assets/event1.jpg";
import event2 from "./Assets/event2.jpg";
import event3 from "./Assets/event3.jpg";
import event4 from "./Assets/event4.jpg";




const AppBody =() => {
    return(<>

{/* <!-- banner -->  data-background={bannerimg} */}
{/* <section className="banner bg-cover position-relative d-flex justify-content-center align-items-center"
  style={{'background-image': bannerimg }} > */}
     <section>
      <img src={bannerimg} alt="banner" style={{ 'width': '100%'}} className="banner bg-cover position-relative d-flex justify-content-center align-items-center" />
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
          
        <h1 className="display-1 text-white font-weight-bold font-primary">Creative Agency</h1>
      </div>
    </div>
  </div>
</section>
{/* <!-- /banner --> */}


{/* <!-- service --> */}
<section className="section">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 mx-auto text-center">
        <h2 className="section-title">Our Services</h2>
        <p className="lead">
            <h3>Nursing, Junior,Senior KG, 1th & 7th School</h3><br />
            Good Experinced Staff | Digital Class | Teaches Sanskrut |
                  Computer Learning
        </p>
        <div className="section-border"></div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 mb-4 mb-lg-0">
        <div className="card hover-bg-secondary shadow py-4 ">{/* active removed */}
          <div className="card-body text-center">
            <div className="position-relative">
              <i
                className="icon-lg icon-box bg-gradient-primary rounded-circle ti-palette mb-5 d-inline-block text-white"></i>
              <i className="icon-lg icon-watermark text-white ti-palette"></i>
            </div>
            <h4 className="mb-4">Experienced Staff</h4>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p> */}
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4 mb-lg-0">
        <div className="card hover-bg-secondary shadow py-4">
          <div className="card-body text-center">
            <div className="position-relative">
              <i
                className="icon-lg icon-box bg-gradient-primary rounded-circle ti-dashboard mb-5 d-inline-block text-white"></i>
              <i className="icon-lg icon-watermark text-white ti-dashboard"></i>
            </div>
            <h4 className="mb-4">Quick Improvement</h4>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p> */}
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4 mb-lg-0">
        <div className="card hover-bg-secondary shadow py-4">
          <div className="card-body text-center">
            <div className="position-relative">
              <i
                className="icon-lg icon-box bg-gradient-primary rounded-circle ti-announcement mb-5 d-inline-block text-white"></i>
              <i className="icon-lg icon-watermark text-white ti-announcement"></i>
            </div>
            <h4 className="mb-4">Communication skills</h4>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /service --> */}

{/* Events */}


{/* <!-- feature --> */}
<section className="section bg-secondary position-relative">
  <div className="bg-image overlay-secondary">
    <img src={feature} alt="bg" />
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-xl-9 mx-auto">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img src={feature} alt="feature" class="img-fluid" />
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="row">
              <div className="col-12">
                <h2 className="text-white">Gurukul Event</h2>
                <div className="section-border ml-0"></div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="media">
                  {/* <i className="icon text-gradient-primary ti-vector mr-3"></i> */}
                  <div className="media-body">
                    <h4 className="text-white">Rangoli</h4>
                    <p className="text-light"></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="media">
                  {/* <i className="icon text-gradient-primary ti-layout mr-3"></i> */}
                  <div className="media-body">
                    <h4 className="text-white">Chatrpati Shivaji Maharaj Jaynti</h4>
                    <p className="text-light"></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="media">
                  {/* <i className="icon text-gradient-primary ti-headphone-alt mr-3"></i> */}
                  <div className="media-body">
                    <h4 className="text-white">Savitribai Phule Jaynti</h4>
                    <p className="text-light"></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="media">
                  {/* <i className="icon text-gradient-primary ti-ruler-pencil mr-3"></i> */}
                  <div className="media-body">
                    <h4 className="text-white">Cross Country</h4>
                    <p className="text-light"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /feature --> */}




        {/* event */}
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
              <div className="col-lg-3 col-sm-6">
                <div className="card hover-shadow">
                  <img
                    src={event1}
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
              <div className="col-lg-3 col-sm-6">
                <div className="card hover-shadow">
                  <img
                    src={event2}
                    alt="team-member"
                    className="card-img-top"
                    style={{ 'height': '200px', 'padding':'4px' }}
                  />
                  <div className="card-body text-center position-relative zindex-1">
                    <h5>Chatrpati Shivaji Maharaj Jaynti</h5>
                    <i></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card hover-shadow">
                  <img
                    src={event3}
                    alt="team-member"
                    className="card-img-top"
                    style={{ 'height': '200px', 'padding':'4px' }}
                  />
                  <div className="card-body text-center position-relative zindex-1">
                    <h4>Savitribai Phule Jaynti</h4>
                    <i></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card hover-shadow">
                  <img
                    src={event4}
                    alt="team-member"
                    className="card-img-top" style={{ 'height': '200px', 'padding':'4px' }}
                  />
                  <div className="card-body text-center">
                    <h4>Savitribai Phule Jaynti</h4>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

















{/* Team */}









{/* <!-- team --> */}
<section className="section">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 mx-auto text-center">
        <h2>Our Ideal</h2>
        <p>An ideal person is one who is ideal in respect of physical and emotional balance, behavior and attitude, moral values, personality. In practical life, the combination of all these fine characteristics is very rarely found in any person in practical life.</p>
        <div className="section-border"></div>
      </div>
    </div>
    <div style={{'text-align': 'center', 'padding': '20px 25px','flex-basis': '33%',
    'border-radius': '20px',
    'margin-bottom': '10%' }}>
            <img src={Swami} style={{ 'height': 'auto',
    'width': '150px',  
    // 'margin-left':'5px',
    // 'margin-right': '30px',
    // 'border-radius': '50%',
    'border-top-left-radius': '50%',' border-top-right-radius':'50%', 'border-bottom-right-radius': '50%',' border-bottom-left-radius': '50%',
    // 'shape-image-threshold': 'intial'
     }} alt="Swap" />
            <div>
                <p>|| भव्य भवतु भव्याय ||</p>
                <h3>Swami Devanandgirji.</h3>
            </div>

        </div>
  </div>
  {/* <img src={GroupPic} style={{ 'width':'100%' }} alt="loading.." /> */}
</section>
{/* <!-- /team --> */}




    </>)
}

export default AppBody;