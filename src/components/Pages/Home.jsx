import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerSlider from "./BannerSlider";
import FeaturedProducts from "./FeaturedProducts";
import Category from "./Category";
import TrendingReels from "./TrendingReels";

const Home = () => {
  return (
    <div className="">
      <>
        {/* main-area */}
        <main className="fix">
          {/* banner-area */}
          <BannerSlider />
          {/* banner-area-end */}
          {/* features-area */}
          <section className="features__area">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-sm-6 ">
                  <div className="features__item features__c1">
                    <div className="features__icon">
                      <img
                        width={65}
                        height={65}
                        src="assets/img/icon/shipped.png"
                        alt="truck--v1"
                        className="injectable"
                      />
                    </div>
                    <div className="features__content">
                      <h4 className="title">Save 35%</h4>
                      <p>On your first repeat delivery</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 ">
                  <div className="features__item features__c2">
                    <div className="features__icon">
                      <img
                        width={65}
                        height={65}
                        src="assets/img/icon/kitty.png"
                        alt="pocket-money-skin-type-3"
                        className="injectable"
                      />
                    </div>
                    <div className="features__content">
                      <h4 className="title">Latest Deals</h4>
                      <p>Save up to $399/year</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 ">
                  <div className="features__item features__c3">
                    <div className="features__icon">
                      <img
                        width={65}
                        height={65}
                        src="assets/img/icon/star.png"
                        alt="return-purchase"
                        className="injectable"
                      />
                    </div>
                    <div className="features__content">
                      <h4 className="title">Top Rated Products</h4>
                      <p>Recommended pet favourits</p>
                    </div>
                  </div>
                </div>
                {/* icon 4 commented */}
                {/* <div class="col-xl-3 col-lg-4 col-sm-6 ">
                  <div class="features__item features__c4">
                      <div class="features__icon">
                         <img width="75" height="75" src="https://img.icons8.com/bubbles/100/handshake-heart.png" alt="handshake-heart" class="injectable"/>
                      </div>
                      <div class="features__content">
                          <h4 class="title">Best Deal Offer</h4>
                          <p>Grab Your Gear and Go</p>
                      </div>
                  </div>
              </div> */}
              </div>
            </div>
          </section>
          {/* features-area-end */}
          {/* divider-area */}
          <div className="divider-area">
            <div className="container">
              <div className="divider-wrap" />
            </div>
          </div>
          {/* divider-area-end */}
          {/*features-area */}
          <section className="features__area-two">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img src="assets/img/images/Screenshot1.png" alt="img" />
                    </div>
                    
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img src="assets/img/images/Screenshot2.png" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img src="assets/img/images/Screenshot3.png" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img src="assets/img/images/Screenshot4.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* features-area-end */}
          <FeaturedProducts />
          
          <Category />
          {/* divider-area */}
          <div className="divider-area">
            <div className="container">
              <div className="divider-wrap" />
            </div>
          </div>
          {/* divider-area-end */}
          {/* Trending-reels-area */}
          <TrendingReels />
          {/* Trending-reels-area-end */}
          {/* Near by store */}
          <section className="near-by-store">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="section__title-two mb-25">
                    <h2 className="title">
                      Near By Store{" "}
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
                    <a href="nearallstore.html">
                      See All Store <i className="flaticon-right-arrow-angle" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 p-0">
                  <div className="store__pic">
                    <img
                      src="https://threebestrated.in/images/GiantlandPetShop-Indore-MP.jpeg"
                      alt="img"
                    />
                    <div className="row store__profile">
                      <div className="store__profile_1 p-0">
                        <img
                          className=""
                          src="https://ih1.redbubble.net/image.5013357025.2285/tst,large,507x507-pad,600x600,f8f8f8.u2.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="store__profile_2">
                        <h5 className="title"> Pet Shop Indore</h5>
                        <p>500.0 m away</p>
                        <div className="product__reviews">
                          <div className="rating" style={{ marginLeft: 0 }}>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span>(2 Reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="store__add">
                      <div className="store__location">
                        <img
                          src="assets/img/icon/icons8-location-100.png"
                          alt="gif"
                        />
                      </div>
                      <div className="store__location2">
                        Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                      </div>
                    </div>
                    <div className="store__btn">
                      <a href="store-details.html" className="btn shop-btn">
                        Shop Now{" "}
                        <img
                          src="assets/img/icon/right_arrow.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </div>
                    {/* <div class="view-store">
                          <button class="view-store-btn">View Store →</button>
                      </div> */}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 p-0">
                  <div className="store__pic">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrE6Npglqi0GIJREX1vWlcDTx1GJehNgj3uqXlZBoqZcIh9PUA1wujaJuGpcOlz-cXZDs&usqp=CAU"
                      alt="img"
                    />
                    <div className="row store__profile">
                      <div className="store__profile_1 p-0">
                        <img
                          src="https://i.pinimg.com/736x/1a/fb/fd/1afbfd6c2fdb71242db1c7389d15720d.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="store__profile_2">
                        <h5 className="title"> Persian Paradise Cattery</h5>
                        <p>500.0 m away</p>
                        <div className="product__reviews">
                          <div className="rating" style={{ marginLeft: 0 }}>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span>(2 Reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="store__add">
                      <div className="store__location">
                        <img
                          src="assets/img/icon/icons8-location-100.png"
                          alt="gif"
                        />
                      </div>
                      <div className="store__location2">
                        Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                      </div>
                    </div>
                    <div className="store__btn">
                      <a href="store-details.html" className="btn shop-btn">
                        Shop Now{" "}
                        <img
                          src="assets/img/icon/right_arrow.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </div>
                    {/* <div class="view-store">
                          <button class="view-store-btn">View Store →</button>
                      </div> */}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 p-0">
                  <div className="store__pic">
                    <img
                      src="https://threebestrated.in/images/GiantlandPetShop-Indore-MP.jpeg"
                      alt="img"
                    />
                    <div className="row store__profile">
                      <div className="store__profile_1 p-0">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNg9qiPZ3VyJouaLMs66R5kaMSi_rcp3WvA&s"
                          alt="img"
                        />
                      </div>
                      <div className="store__profile_2">
                        <h5 className="title"> Pet Shop Indore</h5>
                        <p>1.5 km away</p>
                        <div className="product__reviews">
                          <div className="rating" style={{ marginLeft: 0 }}>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span>(2 Reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="store__add">
                      <div className="store__location">
                        <img
                          src="assets/img/icon/icons8-location-100.png"
                          alt="gif"
                        />
                      </div>
                      <div className="store__location2">
                        Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                      </div>
                    </div>
                    <div className="store__btn h-20">
                      <a href="store-details.html" className="btn shop-btn">
                        Shop Now{" "}
                        <img
                          src="assets/img/icon/right_arrow.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </div>
                    {/* <div class="view-store">
                          <button class="view-store-btn">View Store →</button>
                      </div> */}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 p-0">
                  <div className="store__pic">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKdqhd2iQh9TMYWTtt7a_KNDvYd5YLkZc1g&s"
                      alt="img"
                    />
                    <div className="row store__profile">
                      <div className="store__profile_1 p-0">
                        <img
                          src="https://img.freepik.com/premium-vector/colorful-cute-dog-sticker-dog-clipart-dog-lover-design-vector-illustration_658322-94.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="store__profile_2">
                        <h5 className="title"> Pet Shop Indore</h5>
                        <p>1.5 km away</p>
                        <div className="product__reviews">
                          <div className="rating" style={{ marginLeft: 0 }}>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span>(2 Reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="store__add">
                      <div className="store__location">
                        <img
                          src="assets/img/icon/icons8-location-100.png"
                          alt="gif"
                        />
                      </div>
                      <div className="store__location2">
                        Shanker Nagar Lodhipara Chowk, Raipur-Chhattisgarh
                      </div>
                    </div>
                    <div className="store__btn">
                      <a href="store-details.html" className="btn shop-btn">
                        Shop Now{" "}
                        <img
                          src="assets/img/icon/right_arrow.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </div>
                    {/* <div class="view-store">
                      <button class="view-store-btn">View Store →</button>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* features-area */}
          <section className="features__area-two">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img
                        src="assets/img/images/features_img01.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="features__content-two">
                      <h2 className="title">
                        30% <span>Sale!</span>
                      </h2>
                      <strong>Free Shipping</strong>
                      <a href="product.html" className="btn shop-btn">
                        Shop Now{" "}
                        <img
                          src="assets/img/icon/right_arrow.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img
                        src="assets/img/images/features_img02.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="features__content-two features__content-three">
                      <h2 className="title">Best Premium</h2>
                      <strong>Cat Food</strong>
                      <a href="product.html" className="btn shop-btn">
                        Shop Now{" "}
                        <img
                          src="assets/img/icon/right_arrow.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* features-area-end */}
          <section className="product__area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="section__title-two mb-25">
                    <h2 className="title">
                      Hot selling product{" "}
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
                                    <i className="flaticon-shopping-bag" /> Add
                                    To Cart
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
                                    Dog Harness-Neoprene Comfort Liner-Orange
                                    and ...
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
                                    <i className="flaticon-shopping-bag" /> Add
                                    To Cart
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
                                    Dog Harness-Neoprene Comfort Liner-Orange
                                    and ...
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
                                    <i className="flaticon-shopping-bag" /> Add
                                    To Cart
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
                                    Dog Harness-Neoprene Comfort Liner-Orange
                                    and ...
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
                                    <i className="flaticon-shopping-bag" /> Add
                                    To Cart
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
                                    Dog Harness-Neoprene Comfort Liner-Orange
                                    and ...
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
                                    <i className="flaticon-shopping-bag" /> Add
                                    To Cart
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
                                    Dog Harness-Neoprene Comfort Liner-Orange
                                    and ...
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
                                    Dog Harness-Neoprene Comfort Liner-Orange
                                    and ...
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
                                    Arm &amp; Hammer Super Deodori zing Dog
                                    Shampoo, Pet Wash
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
                                    Milk-Bone Brushing Chews Daily Dental Dog
                                    Treats ...
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
                                    Dog Harness-Neoprene Comfort Liner-Orange
                                    and ...
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
                                    Arm &amp; Hammer Super Deodori zing Dog
                                    Shampoo, Pet Wash
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
                                    Milk-Bone Brushing Chews Daily Dental Dog
                                    Treats ...
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
                                  <a
                                    href="product-details.html"
                                    className="btn"
                                  >
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
          {/* Near by store end */}
          {/* My Expertise */}
          <section className="our__expertise mt-20">
            <div className="container">
              {/* Section Title */}
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="section__title-two mb-20">
                    <h2 className="title">
                      Meet Our Expert Doctors
                      <img
                        src="assets/img/images/title_shape.svg"
                        alt=""
                        className="injectable"
                      />
                    </h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="view-all-btn">
                    <a href="expertlist.html">
                      See All
                      <i className="flaticon-right-arrow-angle" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Doctor Cards */}
              <div className="row justify-content-center">
                {/* Doctor Card 1 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    className="doc_post"
                    onclick="window.location.href='doctor_details.html';"
                  >
                    <div className="doc_post_pic">
                      <img
                        src="https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE="
                        alt="Dr. Nitin Kandpal"
                      />
                    </div>
                    <div className="doc_post_content">
                      <h3 className="doc_name">Dr. Nitin Kandpal</h3>
                      <p className="doc_specialty">Food Animal Veterinarians</p>
                      <div className="product__reviews our_expertise_reviews">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span>(48 Reviews)</span>
                      </div>
                      <p>Exp : 7 years</p>
                      <p className="doc__qual">
                        <img
                          src="assets/img/icon/icon8-degree-48.png"
                          alt="img"
                        />
                        M.V.Sc.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Doctor Card 2 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="doc_post">
                    <div
                      className="doc_post_pic"
                      onclick="window.location.href='doctor_details.html';"
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-n-Eb5PPHCiRyGR1vpCKxiucX1RsoZ0gEA&s"
                        alt="Dr. Aditi Tiwari"
                      />
                    </div>
                    <div className="doc_post_content">
                      <h3 className="doc_name">Dr. Aditi Tiwari</h3>
                      <p className="doc_specialty">
                        Animal Welfare Specialists
                      </p>
                      <div className="product__reviews our_expertise_reviews">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span>(48 Reviews)</span>
                      </div>
                      <p>Exp : 7 years</p>
                      <p className="doc__qual">
                        <img
                          src="assets/img/icon/icon8-degree-48.png"
                          alt="img"
                        />
                        M.V.Sc.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Doctor Card 3 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="doc_post">
                    <div
                      className="doc_post_pic"
                      onclick="window.location.href='doctor_details.html';"
                    >
                      <img
                        src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                        alt="Dr. Vikash Chauhan"
                      />
                    </div>
                    <div className="doc_post_content">
                      <h3 className="doc_name">Dr. Vikash Chauhan</h3>
                      <p className="doc_specialty">
                        Internal Medicine Specialists
                      </p>
                      <div className="product__reviews our_expertise_reviews">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span>(48 Reviews)</span>
                      </div>
                      <p>Exp : 7 years</p>
                      <p className="doc__qual">
                        <img
                          src="assets/img/icon/icon8-degree-48.png"
                          alt="img"
                        />
                        M.V.Sc.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Doctor Card 4 */}
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    className="doc_post"
                    onclick="window.location.href='doctor_details.html';"
                  >
                    <div className="doc_post_pic">
                      <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
                        alt="Dr. Mony Bora"
                      />
                    </div>
                    <div className="doc_post_content">
                      <h3 className="doc_name">Dr. Mony Bora</h3>
                      <p className="doc_specialty">
                        Nutritionists, Ophthalmologists
                      </p>
                      <div className="product__reviews our_expertise_reviews">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span>(48 Reviews)</span>
                      </div>
                      <p>Exp : 7 years</p>
                      <p className="doc__qual">
                        <img
                          src="assets/img/icon/icon8-degree-48.png"
                          alt="img"
                        />
                        M.V.Sc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* My Expertise */}
          {/* ad-banner-area */}
          <div className="ad-banner-area pb-30">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="ad-banner-img">
                    <a href="#">
                      <img
                        src="assets/img/images/advertisement.jpg"
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ad-banner-area-end */}
          {/* product-area-two */}
          <section className="product__area-two">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="section__title-two mb-20">
                    <h2 className="title">
                      Featured Products
                      <img
                        src="assets/img/images/title_shape.svg"
                        alt=""
                        className="injectable"
                      />
                    </h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="view-all-btn">
                    <a href="product.html">
                      See All
                      <i className="flaticon-right-arrow-angle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container custom-container-two">
              <div className="product__item-wrap-two">
                <div className="row gutter-20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
                  <div className="col">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/img/products/products_img06.jpg"
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
                            Dog Puzzle Toys, Squeaky Treat Dispensing Dog
                          </a>
                        </h4>
                        <h3 className="price">
                          {" "}
                          ₹ 18.00 <del> ₹ 33.00</del>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/img/products/products_img07.jpg"
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
                            Zesty Paws Calming Puppy Bites Stress Relief for
                            Dogs, 60 Count
                          </a>
                        </h4>
                        <h3 className="price">
                          {" "}
                          ₹ 16.00 <del> ₹ 50.00</del>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/img/products/products_img08.jpg"
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
                            Hartz Groomer's Best Extra Gentle Puppy Shampoo,
                            18oz.
                          </a>
                        </h4>
                        <h3 className="price">
                          {" "}
                          ₹ 30.00 <del> ₹ 88.00</del>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/img/products/products_img09.jpg"
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
                            The Kitten House with Mat Sleeping Bed House
                          </a>
                        </h4>
                        <h3 className="price">
                          {" "}
                          ₹ 22.00 <del> ₹ 59.00</del>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product__item">
                      <div className="product__thumb">
                        <a href="product-details.html">
                          <img
                            src="assets/img/products/products_img10.jpg"
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
                            Dog Harness-Neoprene Comfort Liner-Orange and
                            Comfort
                          </a>
                        </h4>
                        <h3 className="price">
                          {" "}
                          ₹ 11.00 <del> ₹ 48.00</del>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product__shape-wrap">
              <img
                src="assets/img/products/products_shape01.png"
                alt="shape"
                className="ribbonRotate"
              />
              <img
                src="assets/img/products/products_shape02.png"
                alt="shape"
                data-aos="fade-up-right"
                data-aos-delay={400}
              />
            </div>
          </section>
          {/* product-area-two-end */}
          {/* features-area */}
          <section className="features__area-two">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img
                        src="assets/img/images/features_img01.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="features__content-two">
                      <h2 className="title">
                        30% <span>Sale!</span>
                      </h2>
                      <strong>Free Shipping</strong>
                      <a href="product.html" className="btn shop-btn">
                        Shop Now{" "}
                        <img
                          src="assets/img/icon/right_arrow.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="features__item-two">
                    <div className="features__thumb">
                      <img
                        src="assets/img/images/features_img02.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="features__content-two features__content-three">
                      <h2 className="title">Best Premium</h2>
                      <strong>Cat Food</strong>
                      <a href="product.html" className="btn shop-btn">
                        Shop Now{" "}
                        <img
                          src="assets/img/icon/right_arrow.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* features-area-end */}
          {/* blog-post-area */}
          <section className="blog__post-area-four">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="section__title-two mb-20">
                    <h2 className="title">
                      Latest News &amp; Updates{" "}
                      <img
                        src="assets/img/images/title_shape.svg"
                        alt=""
                        className="injectable"
                      />
                    </h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="view-all-btn">
                    <a href="blog.html">
                      See All <i className="flaticon-right-arrow-angle" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="blog__post-item-four shine-animate-item">
                    <div className="blog__post-thumb-four shine-animate">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/h4_blog_post01.jpg"
                          alt="img"
                        />
                      </a>
                      <ul className="list-wrap blog__post-tag blog__post-tag-three">
                        <li>
                          <a href="blog.html">Pet</a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog__post-content-four">
                      <div className="blog__post-meta">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-calendar" />
                            25th Aug
                          </li>
                          <li>
                            <i className="flaticon-user" />
                            by <a href="blog-details.html">admin</a>
                          </li>
                        </ul>
                      </div>
                      <h2 className="title">
                        <a href="blog-details.html">
                          10 Things You Didn’t Know about The Shinese
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="blog__post-item-four shine-animate-item">
                    <div className="blog__post-thumb-four shine-animate">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/h4_blog_post02.jpg"
                          alt="img"
                        />
                      </a>
                      <ul className="list-wrap blog__post-tag blog__post-tag-three">
                        <li>
                          <a href="blog.html">Care</a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog__post-content-four">
                      <div className="blog__post-meta">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-calendar" />
                            25th Aug
                          </li>
                          <li>
                            <i className="flaticon-user" />
                            by <a href="blog-details.html">admin</a>
                          </li>
                        </ul>
                      </div>
                      <h2 className="title">
                        <a href="blog-details.html">
                          A Complete Price Guide for the Shar Pei Breed
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="blog__post-item-four shine-animate-item">
                    <div className="blog__post-thumb-four shine-animate">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/h4_blog_post03.jpg"
                          alt="img"
                        />
                      </a>
                      <ul className="list-wrap blog__post-tag blog__post-tag-three">
                        <li>
                          <a href="blog.html">Pet Health</a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog__post-content-four">
                      <div className="blog__post-meta">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-calendar" />
                            25th Aug
                          </li>
                          <li>
                            <i className="flaticon-user" />
                            by <a href="blog-details.html">admin</a>
                          </li>
                        </ul>
                      </div>
                      <h2 className="title">
                        <a href="blog-details.html">
                          Comparing the Blue vs. Lilac French Bulldog
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="blog__post-item-four shine-animate-item">
                    <div className="blog__post-thumb-four shine-animate">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/h4_blog_post04.jpg"
                          alt="img"
                        />
                      </a>
                      <ul className="list-wrap blog__post-tag blog__post-tag-three">
                        <li>
                          <a href="blog.html">Cat</a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog__post-content-four">
                      <div className="blog__post-meta">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-calendar" />
                            25th Aug
                          </li>
                          <li>
                            <i className="flaticon-user" />
                            by <a href="blog-details.html">admin</a>
                          </li>
                        </ul>
                      </div>
                      <h2 className="title">
                        <a href="blog-details.html">
                          Five Things You Didn’t Know about the Red
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog__shape-wrap-four">
              <img
                src="assets/img/blog/h4_blog_shape01.png"
                alt="img"
                data-aos="fade-down-left"
                data-aos-delay={400}
              />
              <img
                src="assets/img/blog/h4_blog_shape02.png"
                alt="img"
                data-aos="fade-up-right"
                data-aos-delay={400}
              />
            </div>
          </section>
          {/* blog-post-area-end */}
        </main>
        {/* main-area-end */}
      </>
    </div>
  );
};

export default Home;
