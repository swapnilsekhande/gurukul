import Header from "./PageComponents/Header.js";
import Footer from "./PageComponents/Footer.js";
import Brush from "./AboutBody/Assets/brush.png";
const Contact = () => {
    return(<>
<Header />
{/* <!-- page-title --> */}
<section className="page-title bg-cover" data-background={Brush}>
   
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-1 text-dark font-weight-bold font-primary">Contact Us</h1>
      </div>
    </div>
  </div>
</section>
{/* <!-- /page-title --> */}
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7500.272379187856!2d74.22781167201899!3d19.960774030693408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4adad377eca3%3A0x14a16ab8d613d554!2sSangavi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1658929851779!5m2!1sen!2sin" width="100%" height="600" style={{"border":"0"} }allowfullscreen="" title="Location" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<Footer />



    </>)
}

export default Contact;