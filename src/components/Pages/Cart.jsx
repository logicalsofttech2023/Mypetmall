import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <main className="fix">
        {/* Shipping Cart */}
        <section className="shipping__cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <table className="table shipping__maincart">
                  <thead>
                    <tr className="cart_list_head">
                      <th scope="col">#</th>
                      <th scope="col" />
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="cart_list_product">
                      <th scope="row">1</th>
                      <td className="cart__image">
                        <img
                          src="assets/img/products/products_img01.jpg"
                          alt=""
                        />
                      </td>
                      <td>
                        <a href="product-details.html">
                          Meow Mix Seafood Medley Dry Cat Food
                        </a>
                      </td>
                      <td className="cart__price">
                        <p>₹ 29</p>
                      </td>
                      <td className="cart__quantity">
                        <div className="product__details-qty">
                          <div className="cart-plus-minus">
                            <input type="text" defaultValue={1} />
                          </div>
                        </div>
                      </td>
                      <td className="cart__subtotal">
                        <p>₹ 29</p>
                      </td>
                    </tr>
                    <tr className="cart_list_product">
                      <th scope="row">2</th>
                      <td className="cart__image">
                        <img
                          src="assets/img/products/products_img02.jpg"
                          alt=""
                        />
                      </td>
                      <td>
                        <a href="product-details.html">
                          Arm &amp; Hammer Super Deodori zing Dog Shampoo
                        </a>
                      </td>
                      <td className="cart__price">
                        <p>₹ 20</p>
                      </td>
                      <td className="cart__quantity">
                        <div className="product__details-qty">
                          <div className="cart-plus-minus">
                            <input type="text" defaultValue={2} />
                          </div>
                        </div>
                      </td>
                      <td className="cart__subtotal">
                        <p>₹ 40</p>
                      </td>
                    </tr>
                    <tr className="cart_list_product">
                      <th scope="row">3</th>
                      <td className="cart__image">
                        <img
                          src="assets/img/products/products_img03.jpg"
                          alt=""
                        />
                      </td>
                      <td>
                        <a href="product-details.html">
                          Milk-Bone Brushing Chews Daily Dental Dog Treats ...
                        </a>
                      </td>
                      <td className="cart__price">
                        <p>₹ 36</p>
                      </td>
                      <td className="cart__quantity">
                        <div className="product__details-qty">
                          <div className="cart-plus-minus">
                            <input type="text" defaultValue={1} />
                          </div>
                        </div>
                      </td>
                      <td className="cart__subtotal">
                        <p>₹ 36</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-3 col-md-12 mt-50">
                <div className="cart__amount">
                  <h4 className="sub-title"> Cart Totals</h4>
                  <div className="cart__total">
                    <p className="">Subtotal : </p>
                    <p>₹ 105</p>
                  </div>
                  <div className="divider-area">
                    <div className="container">
                      <div className="divider-wrap" />
                    </div>
                  </div>
                  <div className="cart__total">
                    <p className="">Total : </p>
                    <p>₹ 105</p>
                  </div>
                  <div className="checkout__btn">
                    <Link to="/checkout" className="btn checkout-btn">
                      {" "}
                      Proceed to checkout{" "}
                      <img
                        src="assets/img/icon/right_arrow.svg"
                        alt=""
                        className="injectable"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
