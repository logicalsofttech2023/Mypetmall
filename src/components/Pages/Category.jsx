import React from "react";

const Category = () => {
  return (
    <div>
      {/* Sub category-area */}
      <section className="category__area">
        <div className="container">
          <div className="row align-tiems-center">
            <div className="col-md-8">
              <div className="section__title-two mb-30">
                <h2 className="title">
                  Shop by Category{" "}
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
                <a href="productlist.html">
                  See All Categories{" "}
                  <i className="flaticon-right-arrow-angle" />
                </a>
              </div>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-lg-6 row-cols-md-4 row-cols-sm-3 justify-content-center">
            <div className="col">
              <div className="category__item">
                <a href="productlist.html">
                  <img src="assets/img/category/puppy.svg" alt="" />
                  <span className="name">Beds</span>
                  <strong>15 Items</strong>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="category__item">
                <a href="productlist.html">
                  <img src="assets/img/category/cat.svg" alt="" />
                  <span className="name">Pet Toys</span>
                  <strong>10 Items</strong>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="category__item">
                <a href="productlist.html">
                  <img src="assets/img/category/fish.svg" alt="" />
                  <span className="name">Dog Food</span>
                  <strong>19 Items</strong>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="category__item">
                <a href="productlist.html">
                  <img src="assets/img/category/bird.svg" alt="" />
                  <span className="name">Cat Food</span>
                  <strong>15 Items</strong>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="category__item">
                <a href="productlist.html">
                  <img src="assets/img/category/bunny.svg" alt="" />
                  <span className="name">Pharmacy</span>
                  <strong>30 Items</strong>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="category__item">
                <a href="productlist.html">
                  <img src="assets/img/category/turtle.svg" alt="" />
                  <span className="name">Accessories</span>
                  <strong>22 Items</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Sub category-area-end */}
    </div>
  );
};

export default Category;
