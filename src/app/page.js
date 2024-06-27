import AboutSection from './components/servicemessage';
import Typeofservice from './components/typeofservice';
import ServiceItemsSection from './components/typeofservice';
import HowWeWork from './components/howwework';
import Newsletter from './components/newsletter';
import Ourservices from './components/OurServices';
import ContactUs from './components/contactus';
import { Container,Row,Col } from 'react-bootstrap'; // Import Container from react-bootstrap
import BacktoTop from './components/backtotop';
import Breadcrumb from './components/breadcrumb';
import Localseo from './packages/localseo/page'
import Chooseus from './components/whychooseus'
export default function Home() {
  return (
   
    <div>
      <BacktoTop/>
      <Breadcrumb home="Home"
      activeTitle="Web Development"/>
    <Localseo/>
      <Chooseus/>  
      
    </div>
    
  );
}
