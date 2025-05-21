// ? IMPORTENT COMPONENT
import Benefit from "../../components/Benefit";
import Hero from "../../components/Hero";
import NavbarLanding from "../../components/NavbarLanding";
import Pricing from "../../components/Pricing";
import Testimonial from "../../components/Testimonial";
import HowItWorks from "../../components/HowItWorks";
import Footer from "../../components/Footer";

// ? DESIGN
import Sign from "../../design/Sign";
import { FaFaceSmileWink } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { FaComments } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { PiNetworkFill } from "react-icons/pi";

// ? CONSTANT
import { SectionDescriptions } from "../../constant/contstant";

function LandingHome() {
  return (
    <div className="relative w-full ">
      <NavbarLanding></NavbarLanding>
      {/* Hero Section */}
      <Hero
        titleSection={SectionDescriptions[0].title}
        descSection={SectionDescriptions[0].description}
        sign={
          <Sign icon={<FaFaceSmileWink size={28}></FaFaceSmileWink>}></Sign>
        }
      ></Hero>

      {/* Benefit Section  */}
      <Benefit
        titleSection={SectionDescriptions[1].title}
        descSection={SectionDescriptions[1].description}
        sign={<Sign icon={<IoLogoFirebase size={28}></IoLogoFirebase>}></Sign>}
      ></Benefit>

      {/* How it works */}
      <HowItWorks
        titleSection={SectionDescriptions[2].title}
        descSection={SectionDescriptions[2].description}
        sign={<Sign icon={<PiNetworkFill size={28}></PiNetworkFill>}></Sign>}
      ></HowItWorks>

      {/* Testimonial Section */}
      <Testimonial
        titleSection={SectionDescriptions[3].title}
        descSection={SectionDescriptions[3].description}
        sign={<Sign icon={<FaComments size={28}></FaComments>}></Sign>}
      ></Testimonial>

      {/* FAQ Section */}

      {/* Pricing Section */}
      <Pricing
        titleSection={SectionDescriptions[4].title}
        descSection={SectionDescriptions[4].description}
        sign={<Sign icon={<FaFire size={28}></FaFire>}></Sign>}
      ></Pricing>

      <Footer></Footer>
    </div>
  );
}

export default LandingHome;
