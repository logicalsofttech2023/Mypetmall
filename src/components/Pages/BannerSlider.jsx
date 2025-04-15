import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const BannerSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Pet Healthy Food",
      subtitle: "Delicious Food Made With Love",
      discount: "30%",
    },
    {
      title: "Pet Care Essentials",
      subtitle: "Everything Your Pet Needs",
      discount: "50%",
    },
  ];

  return (
    <section className="banner__area-four">
      <div className="container">
        <div className="row gutter-20">
          <div className="col-lg-8 position-relative overflow-hidden">
            {/* Fixed background */}
            <div
              className="slider__bg"
              style={{
                backgroundImage: "url(assets/img/banner/h3_banner_slide01.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                inset: 0,
                zIndex: 1,
              }}
            />

            {/* Swiper */}
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, Navigation, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".product-button-next",
                prevEl: ".product-button-prev",
              }}
              className="slider__active"
              style={{ position: "relative", zIndex: 2 }}
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="slider__single">
                    <div
                      className={`slider__content ${
                        activeIndex === idx ? "animate" : ""
                      }`}
                    >
                      <h1 className="title animated-title">
                        {slide.title} <br /> & Accessories
                      </h1>
                      <h4 className="sub-title animated-subtitle">
                        {slide.subtitle}
                      </h4>
                      <a href="product.html" className="btn animated-btn">
                        Shop Now{" "}
                        <img
                          src="assets/img/icon/right_arrow.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                      <div className="discount__shape animated-discount">
                        <img
                          src="assets/img/banner/sale.svg"
                          alt=""
                          className="injectable"
                        />
                        <h2 className="title">
                          {slide.discount} <span>Flat Sale!</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Nav */}
            <div
              className="product__nav-wrap"
              style={{ position: "relative", zIndex: 3 }}
            >
              <button className="product-button-prev">
                <i className="flaticon-left-chevron" />
              </button>
              <button className="product-button-next">
                <i className="flaticon-right-arrow-angle" />
              </button>
            </div>

            {/* Animations */}
            <style jsx>{`
              .slider__content {
                opacity: 0;
              }
              .slider__content.animate {
                opacity: 1;
              }

              .animated-title,
              .animated-subtitle,
              .animated-btn,
              .animated-discount {
                opacity: 0;
                transform: translateY(20px);
              }

              .slider__content.animate .animated-title {
                animation: fadeUp 0.8s ease forwards;
                animation-delay: 0.2s;
              }

              .slider__content.animate .animated-subtitle {
                animation: fadeUp 0.8s ease forwards;
                animation-delay: 0.8s;
              }

              .slider__content.animate .animated-btn {
                animation: fadeUp 0.8s ease forwards;
                animation-delay: 1.4s;
              }

              .slider__content.animate .animated-discount {
                transform: scale(0.5);
                animation: scaleUp 0.8s ease forwards;
                animation-delay: 2s;
              }

              @keyframes fadeUp {
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes scaleUp {
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
            `}</style>
          </div>
          <div className="col-lg-4">
            <div className="banner__post-item-wrap">
              <div className="banner__post-item shine-animate-item">
                <div className="banner__post-thumb shine-animate">
                  <img src="assets/img/banner/h3_banner_img01.jpg" alt="img" />
                </div>
                <div className="banner__post-content">
                  <h2 className="title">
                    The Best Quality House{" "}
                    <span>
                      <strong>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 66 42"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.0952 2.41842C18.5987 1.09323 22.1904 0.607768 25.8799 0.378947C29.7051 0.141712 49.0312 0.123062 52.6628 1.05552C57.0727 2.1878 62.9146 2.42124 64.8207 6.374C66.7564 10.3881 62.3819 15.0531 61.5901 19.5685C60.9204 23.3881 62.1249 27.2823 60.5219 30.8902C58.8022 34.7608 56.2758 38.8903 52.2619 40.5639C48.2685 42.2289 28.5024 39.5356 24.2541 39.5109C20.1671 39.4871 16.0887 41.3434 12.1742 40.4213C7.68366 39.3634 2.26479 38.0084 0.524582 33.9207C-1.24656 29.7604 3.05097 25.1169 3.70387 20.525C4.27715 16.493 1.88863 12.1607 4.12361 8.60819C6.35856 5.05573 11.107 3.92693 15.0952 2.41842Z"
                            fill="#FFAD0E"
                          />
                        </svg>
                        15%
                      </strong>
                      Off For Your Pet
                    </span>
                  </h2>
                </div>
              </div>
              <div className="banner__post-item-two shine-animate-item">
                <div className="banner__post-thumb shine-animate">
                  <img src="assets/img/banner/h3_banner_img02.jpg" alt="img" />
                </div>
                <div className="banner__post-content-two">
                  <h2 className="title">
                    For Your <br /> Pet Busket
                  </h2>
                  <a href="product.html" className="btn">
                    Shop Now{" "}
                    <img
                      src="assets/img/icon/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </a>
                </div>
                <div className="discount__shape-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 74"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M150 0H0C7.59494 63.3462 56.3291 75.6203 79.7468 73.8391C135.57 69.9528 149.842 22.9938 150 0Z"
                      fill="#FF3489"
                    />
                  </svg>
                  <h2 className="title">
                    12% <span>Off</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
