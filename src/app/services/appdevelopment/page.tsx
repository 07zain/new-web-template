
import { Container,Row,Col } from 'react-bootstrap'; 
import BacktoTop from '../../components/backtotop';
import Breadcrumb from '../../components/breadcrumb';
import AboutSection from '../../components/servicemessage';
import Typeofservice from '../../components/typeofservice';
import HowWeWork from '../../components/howwework';
import Newsletter from '../../components/newsletter';
import Ourservices from '../../components/OurServices';
import ContactUs from '../../components/contactus';


const Appdevelopment=()=> {
  return (
    <main className='mainServicePage'>
     
    <BacktoTop/>
    <Breadcrumb home="Home"
    activeTitle="Web Development"/>
      <AboutSection 
        title="Web " 
        title2="Development"
        description="We develop and deliver functional, user friendly and beautiful web sites that are both technically compliant and aesthetically perfect." 
        imageSrc="../../assets/WebDevelopment.svg"
      />
        <div className="typeservice">
     <Row >
    
        <h2 >Type Of Development We do</h2>
     
        
       <div  className='col-lg-3 col-md-6 col-sm-6' > <Typeofservice 
          title="Static/Dynamic Website Design"
          iconSrc="../../assets/1.png"
          description="Get website designing and development services to drive your business successfully."
        />
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6' >
        <Typeofservice 
          title="Static/Dynamic Website Design"
          iconSrc="../../assets/2.png"
          description="Get website designing and development services to drive your business successfully."
        />
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>
        <Typeofservice 
          title="Static/Dynamic Website Design"
          iconSrc="../../assets/3.png"
          description="Get website designing and development services to drive your business successfully."
        />
        </div>
        </Row>
        </div>
      <HowWeWork/>
      <Newsletter/>
    <Ourservices/>
       <ContactUs/>
    
  </main>
  );
}
export default Appdevelopment;