import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "./SectionHeading";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
} from "../images/Images";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <SectionHeading
          heading="Testimonial"
          subHeading1="See What Our"
          subHeading2="Clients Have To Say"
        />
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
        >
          <SwiperSlide className="testimonial-wrapper">
            <div className="blockquote-container">
              <blockquote cite="https://datatracker.ietf.org/doc/html/rfc1149">
                <p className="quote">
                  Avian carriers can provide high delay, low throughput, and low
                  altitude service. The connection topology is limited to a
                  single point-to-point path for each carrier, used with
                  standard carriers, but many carriers can be used without
                  significant interference with each other, outside of early
                  spring.
                </p>
              </blockquote>
              <span className="quote-icon-left">
                <ImQuotesLeft />
              </span>
              <span className="quote-icon-right">
                <ImQuotesRight />
              </span>
              <div className="user d-flex  align-items-center text-white">
                <img src="https://unsplash.com/photos/NohB3FJSY90/download?force=true&w=640" />
                <div className="user-details">
                  <h4 className="title">Kowsick Borgohain</h4>
                  <p className="position">MD, XYZ Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial-wrapper">
            <div className="blockquote-container">
              <blockquote cite="https://datatracker.ietf.org/doc/html/rfc1149">
                <p className="quote">
                  Avian carriers can provide high delay, low throughput, and low
                  altitude service. The connection topology is limited to a
                  single point-to-point path for each carrier, used with
                  standard carriers, but many carriers can be used without
                  significant interference with each other, outside of early
                  spring.
                </p>
              </blockquote>
              <span className="quote-icon-left">
                <ImQuotesLeft />
              </span>
              <span className="quote-icon-right">
                <ImQuotesRight />
              </span>
              <div className="user d-flex  align-items-center text-white">
                <img src="https://unsplash.com/photos/Jxw0mxW8bPw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NzJ8fGF2YXRhcnxlbnwwfHx8fDE2NTQ1Mzg3MDc&force=true&w=640" />
                <div className="user-details">
                  <h3 className="title">Kamal Hassan</h3>
                  <p className="position">MD, XYZ Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial-wrapper">
            <div className="blockquote-container">
              <blockquote>
                <p className="quote">
                  Avian carriers can provide high delay, low throughput, and low
                  altitude service. The connection topology is limited to a
                  single point-to-point path for each carrier, used with
                  standard carriers, but many carriers can be used without
                  significant interference with each other, outside of early
                  spring.
                </p>
              </blockquote>
              <span className="quote-icon-left">
                <ImQuotesLeft />
              </span>
              <span className="quote-icon-right">
                <ImQuotesRight />
              </span>
              <div className="user d-flex  align-items-center text-white">
                <img src="https://unsplash.com/photos/rDEOVtE7vOs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHx8fDE2NTQ2MTU1OTc&force=true&w=640" />
                <div className="user-details">
                  <h3 className="title">Samantha Murphy</h3>
                  <p className="position">MD, XYZ Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial-wrapper">
            <div className="blockquote-container">
              <blockquote>
                <p className="quote">
                  Avian carriers can provide high delay, low throughput, and low
                  altitude service. The connection topology is limited to a
                  single point-to-point path for each carrier, used with
                  standard carriers, but many carriers can be used without
                  significant interference with each other, outside of early
                  spring.
                </p>
              </blockquote>
              <span className="quote-icon-left">
                <ImQuotesLeft />
              </span>
              <span className="quote-icon-right">
                <ImQuotesRight />
              </span>
              <div className="user d-flex  align-items-center text-white">
                <img src="https://unsplash.com/photos/iFgRcqHznqg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHx8fDE2NTQ2MTU1OTc&force=true&w=640" />
                <div className="user-details">
                  <h3 className="title">Anthony Smith</h3>
                  <p className="position">MD, XYZ Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial-wrapper">
            <div className="blockquote-container">
              <blockquote>
                <p className="quote">
                  Avian carriers can provide high delay, low throughput, and low
                  altitude service. The connection topology is limited to a
                  single point-to-point path for each carrier, used with
                  standard carriers, but many carriers can be used without
                  significant interference with each other, outside of early
                  spring.
                </p>
              </blockquote>
              <span className="quote-icon-left">
                <ImQuotesLeft />
              </span>
              <span className="quote-icon-right">
                <ImQuotesRight />
              </span>
              <div className="user d-flex  align-items-center text-white">
                <img src="https://unsplash.com/photos/L2dTmhQzx4Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHx8fDE2NTQ2MTU1OTc&force=true&w=640" />
                <div className="user-details">
                  <h3 className="title">Dean Jackson</h3>
                  <p className="position">MD, XYZ Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial-wrapper">
            <div className="blockquote-container">
              <blockquote>
                <p className="quote">
                  Avian carriers can provide high delay, low throughput, and low
                  altitude service. The connection topology is limited to a
                  single point-to-point path for each carrier, used with
                  standard carriers, but many carriers can be used without
                  significant interference with each other, outside of early
                  spring.
                </p>
              </blockquote>
              <span className="quote-icon-left">
                <ImQuotesLeft />
              </span>
              <span className="quote-icon-right">
                <ImQuotesRight />
              </span>
              <div className="user d-flex  align-items-center text-white">
                <img src="https://unsplash.com/photos/fHXpgMd_XhE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGF2YXRhcnxlbnwwfHx8fDE2NTQ2MTU2OTE&force=true&w=640" />
                <div className="user-details">
                  <h3 className="title">Peter Parkar</h3>
                  <p className="position">MD, XYZ Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial-wrapper">
            <div className="blockquote-container">
              <blockquote>
                <p className="quote">
                  Avian carriers can provide high delay, low throughput, and low
                  altitude service. The connection topology is limited to a
                  single point-to-point path for each carrier, used with
                  standard carriers, but many carriers can be used without
                  significant interference with each other, outside of early
                  spring.
                </p>
              </blockquote>
              <span className="quote-icon-left">
                <ImQuotesLeft />
              </span>
              <span className="quote-icon-right">
                <ImQuotesRight />
              </span>
              <div className="user d-flex  align-items-center text-white">
                <img src="https://unsplash.com/photos/MZf0mI14RI0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjJ8fGF2YXRhcnxlbnwwfHx8fDE2NTQ2MTU2OTE&force=true&w=640" />
                <div className="user-details">
                  <h3 className="title">James Anderson</h3>
                  <p className="position">MD, XYZ Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container-fluid sponsored bg-dark">
        <div className="row gx-0">
          <div className="col-lg-6 col-md-6 d-flex justify-content-around align-items-center py-4">
            <div className="logos">
              <img src={logo1} className="img-fluid" />
            </div>
            <div className="logos">
              <img src={logo2} className="img-fluid" />
            </div>
            <div className="logos">
              <img src={logo3} className="img-fluid" />
            </div>
            <div className="logos">
              <img src={logo4} className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 d-flex justify-content-around align-items-center py-4">
            <div className="logos">
              <img src={logo5} className="img-fluid" />
            </div>
            <div className="logos">
              <img src={logo6} className="img-fluid" />
            </div>
            <div className="logos">
              <img src={logo7} className="img-fluid" />
            </div>
            <div className="logos">
              <img src={logo8} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
