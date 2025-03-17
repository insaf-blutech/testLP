import './App.css'
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import HomeBg from "./assets/images/homeBg.png";
import GifBg from "./assets/images/gifImageSuccess.gif";
import GetAppGif from "./assets/images/BottomSectionGif.gif";
import SuccessNumbers from './components/SuccessNumbers';
import MediaSection from './components/MediaSection';
import TestimonialSection from './components/TestimonialSection';
import TreatmentProcess from './components/TreatmentProcess';
import PartnersSection from './components/PartnersSection';
import GetAppBottomSection from './components/GetAppBottomSection';
import FooterSection from './components/FooterSection';
import MapSection from './components/MapSection';

const App = () => {
  return (
    <div className="relative w-full min-h-screen mx-auto">

      {/* Content */}
      <div className="relative h-screen px-[8%] w-full bg-cover bg-center z-10 flex flex-col" style={{ backgroundImage: `url(${HomeBg})` }}>
        <Navbar />
        <HeroSection />
      </div>
      <div
        className="bg-blend-lighten bg-[#e6e3e7] px-[8%] bg-cover"
        style={{
          backgroundImage: `url(${GifBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <SuccessNumbers />
      </div>

      <div className="px-[8%] py-[7.5rem]">
        <MediaSection />
      </div>
      <div className="px-[8%] pb-[7.5rem] ">
        <TestimonialSection />
      </div>
      <div className="px-[8%] py-20 bg-gradient-to-l from-[#49c7ab]/30 to-white">
        <TreatmentProcess />
      </div>
      <div className="px-[8%] py-24">
        <PartnersSection />
      </div>
      <div className="px-[8%] py-24">
        <MapSection />
      </div>
      <div className="px-[8%]  flex justify-center items-center min-h-[500px] bg-cover py-24 relative" style={{ backgroundImage: `url(${GetAppGif})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#49C7AB] to-[#FFFFFF] opacity-70"></div>
        <div className="relative h-full z-10">
          <GetAppBottomSection />
        </div>
      </div>
      <div className="px-[8%] pt-24 ">
        <FooterSection />
        <p className="py-5 border-t text-[#475569] border-t-gray-500 mt-16 ">©2024 – recovery Delivered | All Right Reserved</p>
      </div>

    </div>
  );
};

export default App;