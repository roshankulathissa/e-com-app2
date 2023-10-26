// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='rounded-lg overflow-hidden'
      >
        <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGagNnhzKI9hoJDmtWyHFlrn-9179AK5rIg&usqp=CAU" alt="add" className="w-full object-contain rounded-r-lg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGagNnhzKI9hoJDmtWyHFlrn-9179AK5rIg&usqp=CAU" alt="add" className="w-full object-contain rounded-r-lg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGagNnhzKI9hoJDmtWyHFlrn-9179AK5rIg&usqp=CAU" alt="add" className="w-full object-contain rounded-r-lg"/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

     
