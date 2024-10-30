import React from 'react';
import '../Custom Styles/carouselcomp.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carouselcomp() {
    return (
        <div className="carouselcomp w-[85%] mt-10 mb-5 flex justify-center ">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={9.5}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide className='box'>

                    <img src="./public/assets/iphone.png" id="iphone" />
                    <p className='text-center pt-3 text-[18px] font-bold text-[#333]'>Iphone 14 Pro Max</p>
                    <p className='text-center text-[10px] font-semibold text-[#888888]'>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>

                </SwiperSlide>
                <SwiperSlide className='box'>

                    <img src="./public/assets/iphone.png" id="iphone" />

                    <p className='text-center pt-3 text-[18px] font-bold text-[#333]'>Iphone 14 Pro Max</p>
                    <p className='text-center text-[10px] font-semibold text-[#888888]'>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>

                </SwiperSlide>
                <SwiperSlide className='box'>

                    <img src="./public/assets/iphone.png" id="iphone" />

                    <p className='text-center pt-3 text-[18px] font-bold text-[#333]'>Iphone 14 Pro Max</p>
                    <p className='text-center text-[10px] font-semibold text-[#888888]'>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>

                </SwiperSlide>
                <SwiperSlide className='box'>

                    <img src="./public/assets/iphone.png" id="iphone" />

                    <p className='text-center pt-3 text-[18px] font-bold text-[#333]'>Iphone 14 Pro Max</p>
                    <p className='text-center text-[10px] font-semibold text-[#888888]'>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>

                </SwiperSlide>
                <SwiperSlide className='box'>

                    <img src="./public/assets/iphone.png" id="iphone" />

                    <p className='text-center pt-3 text-[18px] font-bold text-[#333]'>Iphone 14 Pro Max</p>
                    <p className='text-center text-[10px] font-semibold text-[#888888]'>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>

                </SwiperSlide>
                <SwiperSlide className='box'>

                    <img src="./public/assets/iphone.png" id="iphone" />

                    <p className='text-center pt-3 text-[18px] font-bold text-[#333]'>Iphone 14 Pro Max</p>
                    <p className='text-center text-[10px] font-semibold text-[#888888]'>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>

                </SwiperSlide>
                <SwiperSlide className='box'>

                    <img src="./public/assets/iphone.png" id="iphone" />

                    <p className='text-center pt-3 text-[18px] font-bold text-[#333]'>Iphone 14 Pro Max</p>
                    <p className='text-center text-[10px] font-semibold text-[#888888]'>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>

                </SwiperSlide>
                <SwiperSlide className='box'>

                    <img src="./public/assets/iphone.png" id="iphone" />

                    <p className='text-center pt-3 text-[18px] font-bold text-[#333]'>Iphone 14 Pro Max</p>
                    <p className='text-center text-[10px] font-semibold text-[#888888]'>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>

                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carouselcomp;
