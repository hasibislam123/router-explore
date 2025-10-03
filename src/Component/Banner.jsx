import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Banner = () => {
    return (
         <div className="  grid rounded-4xl grid-cols-1 md:grid-cols-2 sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">

  {/* Left Section - Text */}
  <div className="flex justify-center items-center px-6 py-10 bg-[#fff0f3]">
    <div className="p-4 bg-[#ffb3c1] rounded-2xl shadow-lg">
      <h1 className="text-3xl md:text-4xl mb-5 font-semibold leading-snug">
        Keep your body <br /> fresh with a good <br /> perfume
      </h1>
      <p className="text-sm md:text-base mb-5">
        Lorem ipsum dolor sit amet consectetur. Scelerisque amet cursus eget amet sit ut. 
        In imperdiet suspendisse adipiscing eu purus. Eget nisl cursus quis nibh. Sed sit amet facilisi viverra.
      </p>
      <button className="btn btn-error w-[150px] rounded-3xl shadow-lg">
        Let’s Shopping
      </button>
    </div>
  </div>

    <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full h-150">
    <img src="https://i.ibb.co.com/5hGsrbFy/ash-edmonds-gyz-H19-KIv-IQ-unsplash-1.jpg" className="w-full h-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide10" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-150">
    <img src="https://i.ibb.co/VpTKC6DW/eve-maier-b-G7-JSKq5-W5-E-unsplash.jpg" className="w-full h-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-150">
    <img src="https://i.ibb.co/DDp4XybQ/maxim-lozyanko-q-Fsxwpo-DIB4-unsplash.jpg" className="w-full h-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-150">
    <img src="https://i.ibb.co/JWWNWxCZ/rosy-h-nguyen-5-Hrl-EGTsa-B4-unsplash.jpg" className="w-full h-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full h-150">
    <img src="https://i.ibb.co/Jw32FZ29/tron-le-E5zsok-LJk-VQ-unsplash.jpg" className="w-full h-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full h-150">
    <img src="https://i.ibb.co/TxQx0skR/olena-bohovyk-w-V0-Or-CO90e-I-unsplash.jpg" className="w-full h-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a>
      <a href="#slide7" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide7" className="carousel-item relative w-full h-150">
    <img src="https://i.ibb.co.com/b5hcS86q/nazanin-enayat-X1-ZILm-Aw3-K4-unsplash-1.jpg" className="w-full h-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle">❮</a>
      <a href="#slide8" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide8" className="carousel-item relative w-full h-150">
    <img src="https://i.ibb.co.com/YgtzTFS/pavlo-talpa-Mf-Go-Z-Qo-JFc-unsplash.jpg" className="w-full h-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn btn-circle">❮</a>
      <a href="#slide9" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide9" className="carousel-item relative w-full h-150">
    <img src="https://i.ibb.co.com/5WKhh94H/edoardo-cuoghi-ufuchd-Zawng-unsplash.jpg" className="w-full h-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide8" className="btn btn-circle">❮</a>
      <a href="#slide10" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide10" className="carousel-item relative w-full h-150">
    <img src="https://i.ibb.co.com/RGL7nhGF/maxim-lozyanko-3d-Lrus3c-o-A-unsplash-1.jpg" className="w-full h-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide9" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
    </div>

</div>
    );
};

export default Banner;