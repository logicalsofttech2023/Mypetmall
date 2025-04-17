import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <main className="fix">
        {/* breadcrumb-area */}
        <section className="breadcrumb__area fix">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="breadcrumb__content">
                  <nav className="breadcrumb">
                    <span property="itemListElement" typeof="ListItem">
                      <a href="index-2.html">Home</a>
                    </span>
                    <span className="breadcrumb-separator">
                      <i className="flaticon-right-arrow-angle" />
                    </span>
                    <span property="itemListElement" typeof="ListItem">
                      All Products
                    </span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* product-details-area */}
        <section className="product__details-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="product__details-images-wrap">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane show active"
                      id="itemOne-tab-pane"
                      role="tabpanel"
                      aria-labelledby="itemOne-tab"
                      tabIndex={0}
                    >
                      <a
                        href="assets/img/products/products_img01.jpg"
                        className="popup-image"
                      >
                        <img
                          src="assets/img/products/products_img01.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div
                      className="tab-pane"
                      id="itemTwo-tab-pane"
                      role="tabpanel"
                      aria-labelledby="itemTwo-tab"
                      tabIndex={0}
                    >
                      <a
                        href="assets/img/products/products_img02.jpg"
                        className="popup-image"
                      >
                        <img
                          src="assets/img/products/products_img02.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div
                      className="tab-pane"
                      id="itemThree-tab-pane"
                      role="tabpanel"
                      aria-labelledby="itemThree-tab"
                      tabIndex={0}
                    >
                      <a
                        href="assets/img/products/products_img03.jpg"
                        className="popup-image"
                      >
                        <img
                          src="assets/img/products/products_img03.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div
                      className="tab-pane"
                      id="itemFour-tab-pane"
                      role="tabpanel"
                      aria-labelledby="itemFour-tab"
                      tabIndex={0}
                    >
                      <a
                        href="assets/img/products/products_img04.jpg"
                        className="popup-image"
                      >
                        <img
                          src="assets/img/products/products_img04.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="itemOne-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#itemOne-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="itemOne-tab-pane"
                        aria-selected="true"
                      >
                        <img
                          src="assets/img/products/products_img01.jpg"
                          alt="img"
                        />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="itemTwo-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#itemTwo-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="itemTwo-tab-pane"
                        aria-selected="false"
                      >
                        <img
                          src="assets/img/products/products_img02.jpg"
                          alt="img"
                        />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="itemThree-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#itemThree-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="itemThree-tab-pane"
                        aria-selected="false"
                      >
                        <img
                          src="assets/img/products/products_img03.jpg"
                          alt="img"
                        />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="itemFour-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#itemFour-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="itemFour-tab-pane"
                        aria-selected="false"
                      >
                        <img
                          src="assets/img/products/products_img04.jpg"
                          alt="img"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product__details-content">
                  <div className="product__reviews-wrap">
                    <div className="product__reviews">
                      <span className="tag  mt-10">In stock</span>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(2 Reviews)</span>
                    </div>
                    <div className="product__code">
                      <span>
                        SKU: <strong>CAT4502</strong>
                      </span>
                    </div>
                    <div className="product__code">
                      <span>
                        Brands: <strong>Ark Naturals</strong>
                      </span>
                    </div>
                  </div>
                  <h3 className="title">
                    Meow Mix Seafood Medley Dry Cat Food, 3.15-Pound
                  </h3>
                  <h4 className="price">$29.00</h4>
                  <div className="product__code">
                    <a href="store-details.html">
                      <span>
                        <b>Furry pet shop </b>
                      </span>
                    </a>
                  </div>
                  {/* <p>Cat Food nullam malesuada aenean congue semper donec velit ultrice search hendrerit enim, conubia sociis adipiscing sed tempor curae elit nibh rutrum ipsum. Consectetur sollicitudin.</p> */}
                  <br />
                  <div className="product__size-wrap">
                    <span className="size-title">Size:</span>
                    <ul className="list-wrap">
                      <li>
                        <button>250mg</button>
                      </li>
                      <li>
                        <button>500mg</button>
                      </li>
                      <li>
                        <button>1kg</button>
                      </li>
                    </ul>
                  </div>
                  <div className="product__details-qty">
                    <div className="cart-plus-minus">
                      <input type="text" defaultValue={1} />
                    </div>
                    <a href="product-details.html" className="add-btn">
                      Add To Cart
                    </a>
                  </div>
                  <a href="product-details.html" className="buy-btn">
                    Buy it Now
                  </a>
                  <div className="product__wishlist-wrap">
                    <a href="product-details.html">
                      <i className="flaticon-love" />
                      Add To Wishlist
                    </a>
                    {/* <a href="product-details.html"><i class="flaticon-exchange"></i>Compare To Other</a> */}
                  </div>
                  <div className="product__details-bottom">
                    <ul className="list-wrap">
                      <li className="product__details-category">
                        <span className="title">Categories:</span>
                        <a href="product-details.html">Cat,</a>
                        <a href="product-details.html">Food,</a>
                        <a href="product-details.html">Care</a>
                      </li>
                      <li className="product__details-tags">
                        <span className="title">Tags:</span>
                        <a href="product-details.html">Food Pet,</a>
                        <a href="product-details.html">Pet Essentials</a>
                      </li>
                      <li className="product__details-social">
                        <span className="title">Share :</span>
                        <ul className="list-wrap">
                          <li>
                            <a href="https://www.facebook.com/" target="_blank">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/" target="_blank">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.whatsapp.com/" target="_blank">
                              <i className="fab fa-whatsapp" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.youtube.com/" target="_blank">
                              <i className="fab fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="product__details-checkout">
                    <span className="title">Guaranteed Safe Checkout</span>
                    <img src="assets/img/products/card.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-desc-wrap">
                  <ul className="nav nav-tabs" id="myTab2" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="description-tab-pane"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#reviews-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="reviews-tab-pane"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent2">
                    <div
                      className="tab-pane fade show active"
                      id="description-tab-pane"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                      tabIndex={0}
                    >
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet
                        ante. ibero sit amet quam egestas semper. Aenean
                        ultricies mi vitae est. Mauris placerat eleifend leo.ea
                        commodo consat. Duis aute irure dolor in reprehenderit
                        volup tate velitesse cillum dolore euy elit ale ruin
                        irure dolor.uis aute irure dolor in reprehenderit n
                        volup tate velit esse cillum,
                      </p>
                      <p>
                        habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Vestibulum tortor quam, feugiat
                        vitae, ultricies eget, tempor sit amet bero sit amet uam
                        egestas semper. Aenean ultricies mi vitae est. Mauris
                        placerat eleifend leo.ea commodo consat.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="reviews-tab-pane"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                      tabIndex={0}
                    >
                      <div className="product-desc-review">
                        <div className="product-desc-review-title mb-15">
                          <h5 className="title">Customer Reviews (0)</h5>
                        </div>
                        <div className="left-rc">
                          <p>No reviews yet</p>
                        </div>
                        <div className="right-rc">
                          <a href="#">Write a review</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        {/* product-details-area-end */}
      </main>
    </div>
  );
};

export default ProductDetails;
