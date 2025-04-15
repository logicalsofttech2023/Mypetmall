import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FeaturedProducts = () => {
  return (
    <div>
      {/* product-area */}
      <section className="product__area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="section__title-two mb-25">
                <h2 className="title">
                  Featured Products{" "}
                  <img
                    src="assets/img/images/title_shape.svg"
                    alt=""
                    className="injectable"
                  />
                </h2>
              </div>
            </div>
            <div className="col-md-5">
              <div className="view-all-btn">
                <a href="product.html">
                  See All <i className="flaticon-right-arrow-angle" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="tab-content product__item-wrap"
                id="productTabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="all-tab-pane"
                  role="tabpanel"
                  aria-labelledby="all-tab"
                  tabIndex={0}
                >
                  <div className="product-active">
                    <Swiper
                      modules={[Navigation]}
                      navigation={{
                        nextEl: ".product-button-next",
                        prevEl: ".product-button-prev",
                      }}
                      spaceBetween={30}
                      slidesPerView={4}
                      loop={true}
                      className="product-active"
                    >
                      {/* Sample Slides - repeat with your product data */}
                      <SwiperSlide>
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img01.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap">
                              <span>New</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" /> Add To
                                Cart
                              </a>
                            </div>
                          </div>
                          <div
                            className="product__content"
                            style={{ padding: 10 }}
                          >
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Dog Harness-Neoprene Comfort Liner-Orange and
                                ...
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 12.00 <del>₹ 25.00</del>
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img01.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap">
                              <span>New</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" /> Add To
                                Cart
                              </a>
                            </div>
                          </div>
                          <div
                            className="product__content"
                            style={{ padding: 10 }}
                          >
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Dog Harness-Neoprene Comfort Liner-Orange and
                                ...
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 12.00 <del>₹ 25.00</del>
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img01.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap">
                              <span>New</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" /> Add To
                                Cart
                              </a>
                            </div>
                          </div>
                          <div
                            className="product__content"
                            style={{ padding: 10 }}
                          >
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Dog Harness-Neoprene Comfort Liner-Orange and
                                ...
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 12.00 <del>₹ 25.00</del>
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img01.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap">
                              <span>New</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" /> Add To
                                Cart
                              </a>
                            </div>
                          </div>
                          <div
                            className="product__content"
                            style={{ padding: 10 }}
                          >
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Dog Harness-Neoprene Comfort Liner-Orange and
                                ...
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 12.00 <del>₹ 25.00</del>
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img01.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap">
                              <span>New</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" /> Add To
                                Cart
                              </a>
                            </div>
                          </div>
                          <div
                            className="product__content"
                            style={{ padding: 10 }}
                          >
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Dog Harness-Neoprene Comfort Liner-Orange and
                                ...
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 12.00 <del>₹ 25.00</del>
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* Add more <SwiperSlide> items here */}
                    </Swiper>
                  </div>
                  <div className="product__nav-wrap">
                    <button className="product-button-prev">
                      <i className="flaticon-left-chevron" />
                    </button>
                    <button className="product-button-next">
                      <i className="flaticon-right-arrow-angle" />
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="best-tab-pane"
                  role="tabpanel"
                  aria-labelledby="best-tab"
                  tabIndex={0}
                >
                  <div className="swiper product-active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img01.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap">
                              <span>New</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div
                            className="product__content"
                            style={{ padding: 10 }}
                          >
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Dog Harness-Neoprene Comfort Liner-Orange and
                                ...
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 12.00 <del>₹ 25.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img02.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap sale-wrap-two">
                              <span>Sale!</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div
                            className="product__content"
                            style={{ padding: 10 }}
                          >
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Arm &amp; Hammer Super Deodori zing Dog Shampoo,
                                Pet Wash
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 20.00 <del>₹ 30.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img03.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div
                            className="product__content"
                            style={{ padding: 10 }}
                          >
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Milk-Bone Brushing Chews Daily Dental Dog Treats
                                ...
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 36.00 <del>₹ 56.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img04.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap sale-wrap-two">
                              <span>Sale!</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div className="product__content">
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Two Door Top Load Plastic Kennel &amp; Pet
                                Carrier, Blue 19”
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 18.00 <del>₹ 33.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img05.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap">
                              <span>New</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div className="product__content">
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                The Kitten House with Mat Sleeping Bed House
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 19.00 <del>₹ 28.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img04.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap sale-wrap-two">
                              <span>Sale!</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div className="product__content">
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Two Door Top Load Plastic Kennel &amp; Pet
                                Carrier, Blue 19”
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 18.00 <del>₹ 33.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__nav-wrap">
                    <button className="product-button-prev">
                      <i className="flaticon-left-chevron" />
                    </button>
                    <button className="product-button-next">
                      <i className="flaticon-right-arrow-angle" />
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="sale-tab-pane"
                  role="tabpanel"
                  aria-labelledby="sale-tab"
                  tabIndex={0}
                >
                  <div className="swiper product-active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img01.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap">
                              <span>New</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div className="product__content">
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Dog Harness-Neoprene Comfort Liner-Orange and
                                ...
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 12.00 <del>₹ 25.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img02.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap sale-wrap-two">
                              <span>Sale!</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div className="product__content">
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Arm &amp; Hammer Super Deodori zing Dog Shampoo,
                                Pet Wash
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 20.00 <del>₹ 30.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img03.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div className="product__content">
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Milk-Bone Brushing Chews Daily Dental Dog Treats
                                ...
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 36.00 <del>₹ 56.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img04.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap sale-wrap-two">
                              <span>Sale!</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div className="product__content">
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Two Door Top Load Plastic Kennel &amp; Pet
                                Carrier, Blue 19”
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 18.00 <del>₹ 33.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img05.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap">
                              <span>New</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div className="product__content">
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                The Kitten House with Mat Sleeping Bed House
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 19.00 <del>₹ 28.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__item">
                          <div className="product__thumb">
                            <a href="product-details.html">
                              <img
                                src="assets/img/products/products_img04.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="product__action">
                              <a href="product-details.html">
                                <i className="flaticon-love" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-loupe" />
                              </a>
                              <a href="product-details.html">
                                <i className="flaticon-exchange" />
                              </a>
                            </div>
                            <div className="sale-wrap sale-wrap-two">
                              <span>Sale!</span>
                            </div>
                            <div className="product__add-cart">
                              <a href="product-details.html" className="btn">
                                <i className="flaticon-shopping-bag" />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          <div className="product__content">
                            <div className="product__reviews">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span>(2 Reviews)</span>
                            </div>
                            <h4 className="title">
                              <a href="product-details.html">
                                Two Door Top Load Plastic Kennel &amp; Pet
                                Carrier, Blue 19”
                              </a>
                            </h4>
                            <h3 className="price">
                              ₹ 18.00 <del>₹ 33.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__nav-wrap">
                    <button className="product-button-prev">
                      <i className="flaticon-left-chevron" />
                    </button>
                    <button className="product-button-next">
                      <i className="flaticon-right-arrow-angle" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product-area-end */}
    </div>
  );
};

export default FeaturedProducts;
