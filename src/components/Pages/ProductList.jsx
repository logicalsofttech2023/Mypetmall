import React from "react";

const ProductList = () => {
  return (
    <div>
      <main>
        {/* breadcrumb-area */}
        <section className="breadcrumb__area fix">
          {/* <div class="container">
        <div class="row align-items-end">
            <div class="col-lg-8">
                <div class="breadcrumb__content">
                    <h3 class="title">All Pets</h3>
                    <nav class="breadcrumb">
                        <span property="itemListElement" typeof="ListItem">
                            <a href="index-2.html">Home</a>
                        </span>
                        <span class="breadcrumb-separator"><i class="flaticon-right-arrow-angle"></i></span>
                        <span property="itemListElement" typeof="ListItem">All Pets</span>
                    </nav>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="breadcrumb__img">
                    <img src="assets/img/images/breadcrumb_img.png" alt="img" data-aos="fade-left" data-aos-delay="800">
                </div>
            </div>
        </div>
    </div> */}
          <div className="breadcrumb__shape-wrap">
            <img
              src="assets/img/images/breadcrumb_shape01.png"
              alt="img"
              data-aos="fade-down-right"
              data-aos-delay={400}
            />
            <img
              src="assets/img/images/breadcrumb_shape02.png"
              alt="img"
              data-aos="fade-up-left"
              data-aos-delay={400}
            />
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* features-area */}
        <section className="features__area-two">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="features__item-two">
                  <div className="features__thumb">
                    <img
                      src="assets/img/images/bannerss.jpg"
                      alt="img"
                      style={{ height: 250 }}
                    />
                  </div>
                  <div className="features__content-two">
                    {/* <h2 class="title">30% <span>Sale!</span></h2> */}
                    <br />
                    <br />
                    <br />
                    <br />
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
              {/* <div class="col-md-6">
        <div class="features__item-two">
          <div class="features__thumb">
            <img src="assets/img/images/features_img02.jpg" alt="img">
          </div>
          <div class="features__content-two features__content-three">
            <h2 class="title">Best Premium</h2>
            <strong>Cat Food</strong>
            <a href="product.html" class="btn shop-btn">Shop Now <img src="assets/img/icon/right_arrow.svg" alt=""
                class="injectable"></a>
          </div>
        </div>
      </div> */}
            </div>
          </div>
        </section>
        {/* features-area-end */}
        {/* animal-area */}
        <section className="animal__area-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
                <div className="container custom-container-two">
                  <div className="product__item-wrap-two">
                    <div className="row gutter-20 row-cols-1 row-cols-xl-3  row-cols-md-3 row-cols-sm-2 justify-content-center">
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
                              $18.00 <del>$33.00</del>
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
                              $16.00 <del>$50.00</del>
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
                              $30.00 <del>$88.00</del>
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
                              $22.00 <del>$59.00</del>
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
                              $11.00 <del>$48.00</del>
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
                              $30.00 <del>$88.00</del>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="pagination__wrap mt-50">
                  <ul className="list-wrap">
                    <li className="link-arrow">
                      <a href="#">
                        <img
                          src="assets/img/icon/pagination_icon01.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="courses.html">2</a>
                    </li>
                    <li>
                      <a href="courses.html">3</a>
                    </li>
                    <li>
                      <a href="courses.html">4</a>
                    </li>
                    <li className="link-arrow">
                      <a href="#">
                        <img
                          src="assets/img/icon/pagination_icon02.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-3 col-lg-4">
                <aside className="animal__sidebar">
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Filters</h4>
                    <div className="sidebar-search-form">
                      <form action="#">
                        <input type="text" placeholder="Type Keywords. . ." />
                        <button type="submit">
                          <i className="flaticon-loupe" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Price Range</h4>
                    <div className="price_filter">
                      <div id="slider-range" />
                      <div className="price_slider_amount">
                        <input
                          type="text"
                          id="amount"
                          name="price"
                          placeholder="Add Your Price"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Pet Categories</h4>
                    <div className="courses-cat-list">
                      <ul className="list-wrap">
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_1"
                            />
                            <label className="form-check-label" htmlFor="cat_1">
                              Dogs <span>(344)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_2"
                            />
                            <label className="form-check-label" htmlFor="cat_2">
                              Cats <span>(12)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_3"
                            />
                            <label className="form-check-label" htmlFor="cat_3">
                              Rabbit <span>(56)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_4"
                            />
                            <label className="form-check-label" htmlFor="cat_4">
                              Birds <span>(14)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_5"
                            />
                            <label className="form-check-label" htmlFor="cat_5">
                              Fish <span>(11)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="cat_6"
                            />
                            <label className="form-check-label" htmlFor="cat_6">
                              Others <span>(14)</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Breeds</h4>
                    <div className="courses-cat-list">
                      <ul className="list-wrap">
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="bre_1"
                            />
                            <label className="form-check-label" htmlFor="bre_1">
                              Airedale Terrier
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="bre_2"
                            />
                            <label className="form-check-label" htmlFor="bre_2">
                              American Eskimo
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="bre_3"
                            />
                            <label className="form-check-label" htmlFor="bre_3">
                              Basset Hound
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="bre_4"
                            />
                            <label className="form-check-label" htmlFor="bre_4">
                              Bernese Mountain Dog
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="bre_5"
                            />
                            <label className="form-check-label" htmlFor="bre_5">
                              Bichon Frise
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Gender</h4>
                    <div className="courses-cat-list">
                      <ul className="list-wrap">
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="gender_1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_1"
                            >
                              Male (344)
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="gender_2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_2"
                            >
                              Female (21)
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="animal__widget">
                    <h4 className="animal__widget-title">Location</h4>
                    <div className="courses-cat-list">
                      <ul className="list-wrap">
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="loc_1"
                            />
                            <label className="form-check-label" htmlFor="loc_1">
                              All
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="loc_2"
                            />
                            <label className="form-check-label" htmlFor="loc_2">
                              NewYork City
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="loc_3"
                            />
                            <label className="form-check-label" htmlFor="loc_3">
                              Kansas City
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="loc_4"
                            />
                            <label className="form-check-label" htmlFor="loc_4">
                              NewJersey
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="apply-btn">
                      <a href="#" className="btn">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/* animal-area-end */}
      </main>
    </div>
  );
};

export default ProductList;
