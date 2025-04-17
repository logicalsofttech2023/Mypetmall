import React from "react";

const Checkout = () => {
  return (
    <div>
      <main className="fix">
        <section className="registration__area-two p-5">
          <div className="container m-10">
            <div className="registration__inner-wrap-two">
              <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12 pl-0 mt-3">
                  <div className="registration__form-wrap">
                    <form
                      action="#"
                      className="registration__form checkout__form"
                    >
                      <h4 className="title">Register / Login</h4>
                      {/* <span>If you already have an account with us, please login at the <a href="login.html">login page</a></span> */}
                      <div className="divider-area">
                        <div className="container">
                          <div className="divider-wrap" />
                        </div>
                      </div>
                      <div className="sub__registration-detials mt-3">
                        <div className="row gutter-20 ">
                          <h5 className="sub__title sub__title2">
                            Personal Detials
                          </h5>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">
                                Full Name
                              </label>
                              <input type="text" placeholder="Full Name" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">Email</label>
                              <input type="email" placeholder="E-mail" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">Phone</label>
                              <input type="number" placeholder="Phone" />
                            </div>
                          </div>
                          {/* <div class="col-md-12">
                  <div class="form-grp">
                    <input type="date">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-grp select-grp">
                    <select name="Species" class="orderby">
                      <option value="Species">Species</option>
                      <option value="Cat">Cat</option>
                      <option value="Dog">Dog</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-grp">
                    <input type="text" placeholder="Breed">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-grp select-grp">
                    <select name="Reason" class="orderby">
                      <option value="Reason For Appointment">Reason For Appointment</option>
                      <option value="Select One">Select One</option>
                      <option value="Select Two">Select Two</option>
                    </select>
                  </div>
                </div> */}
                        </div>
                      </div>
                      <div className="divider-area">
                        <div className="container">
                          <div className="divider-wrap" />
                        </div>
                      </div>
                      <div className="sub__registration-detials mt-3">
                        <div className="row gutter-20 ">
                          <h5 className="sub__title sub__title2">
                            Your Address
                          </h5>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">Address</label>
                              <input type="text" placeholder="Address" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp select-grp">
                              <label className="r__form__label">Country</label>
                              <select name="Reason" className="orderby">
                                <option value="Reason For Appointment">
                                  Country
                                </option>
                                <option value="Select One">India</option>
                                <option value="Select Two">Select Two</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp select-grp">
                              <label className="r__form__label">Region</label>
                              <select name="Reason" className="orderby">
                                <option value="Reason For Appointment">
                                  Region
                                </option>
                                <option value="Select One">India</option>
                                <option value="Select Two">Select Two</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">City</label>
                              <input type="text" placeholder="City" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">
                                Postal Code
                              </label>
                              <input type="number" placeholder="Postal Code" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <label className="r__form__label">Region</label>
                              <input type="text" placeholder="Region" />
                            </div>
                          </div>
                          {/* <div class="col-md-12">
                  <div class="form-grp select-grp">
                    <select name="Species" class="orderby">
                      <option value="Species">Species</option>
                      <option value="Cat">Cat</option>
                      <option value="Dog">Dog</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-grp">
                    <input type="text" placeholder="Breed">
                  </div>
                </div> */}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <input
                          type="checkbox"
                          id="bill__toggle"
                          className="toggle-checkbox"
                        />
                        <label
                          htmlFor="bill__toggle"
                          className="r__form__label"
                        >
                          The billing address is the same as the shipping
                          address.
                        </label>
                        <div className="divider-area">
                          <div className="container">
                            <div className="divider-wrap" />
                          </div>
                        </div>
                        <div className="bill__address sub__registration-detials mt-3">
                          <div className="row gutter-20 ">
                            <h5 className="sub__title sub__title2">
                              Billing Address
                            </h5>
                            <div className="col-md-12">
                              <div className="form-grp">
                                <label className="r__form__label">
                                  Full Name
                                </label>
                                <input type="text" placeholder="Full Name" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-grp">
                                <label className="r__form__label">
                                  Address
                                </label>
                                <input type="text" placeholder="Address" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-grp select-grp">
                                <label className="r__form__label">
                                  Country
                                </label>
                                <select name="Reason" className="orderby">
                                  <option value="Reason For Appointment">
                                    Country
                                  </option>
                                  <option value="Select One">India</option>
                                  <option value="Select Two">Select Two</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-grp select-grp">
                                <label className="r__form__label">Region</label>
                                <select name="Reason" className="orderby">
                                  <option value="Reason For Appointment">
                                    Region
                                  </option>
                                  <option value="Select One">India</option>
                                  <option value="Select Two">Select Two</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-grp">
                                <label className="r__form__label">City</label>
                                <input type="text" placeholder="City" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-grp">
                                <label className="r__form__label">
                                  Postal Code
                                </label>
                                <input
                                  type="number"
                                  placeholder="Postal Code"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-grp">
                                <label className="r__form__label">Region</label>
                                <input type="text" placeholder="Region" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <button type="submit" class="btn">Buy it now <img src="assets/img/icon/right_arrow.svg" alt=""
                class="injectable"></button> */}
                    </form>
                  </div>
                </div>
                <div className=" row col-md-8 col-sm-12 pr-0 checkout__div">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 pl-0 mt-3">
                    <div className="registration__form-wrap">
                      <form
                        action="#"
                        className="registration__form checkout__form"
                      >
                        <h4 className="title">Shipping Method</h4>
                        <div className="divider-area">
                          <div className="container">
                            <div className="divider-wrap" />
                          </div>
                        </div>
                        <div className="sub__registration-detials mt-3">
                          <div className="row gutter-20 ">
                            <div className="shipping__method">
                              <div className="payment__type">
                                <input
                                  type="radio"
                                  id="cash__pay"
                                  name="options"
                                  className="shipping__radio"
                                  defaultChecked=""
                                />
                                <label htmlFor="cash__pay">
                                  Cash on Delivery
                                </label>
                              </div>
                              <div className="payment__type">
                                <input
                                  type="radio"
                                  id="card__pay"
                                  name="options"
                                  className="card__pay shipping__radio"
                                />
                                <label htmlFor="card__pay">
                                  Credit / Debit Card
                                </label>
                                <div className="pay_via_card">
                                  <div className="col-md-12">
                                    <div className="form-grp">
                                      <input
                                        type="number"
                                        placeholder="Card Number"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-grp">
                                      <input
                                        type="text"
                                        placeholder="Name on card"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="form-grp">
                                      <input
                                        type="date"
                                        placeholder="Valid till"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-grp">
                                      <input type="number" placeholder="cvv" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="payment__type">
                                <input
                                  type="radio"
                                  id="upi__pay"
                                  name="options"
                                  className="upi__pay shipping__radio"
                                />
                                <label htmlFor="upi__pay">
                                  UPI(Pay via any app)
                                </label>
                                <div className="pay_via_upi">
                                  <div className="mt-3">
                                    <input
                                      type="radio"
                                      id="phone__pay"
                                      name="options"
                                      className="shipping__radio"
                                    />
                                    <label htmlFor="phone__pay">PhonePe</label>
                                  </div>
                                  <div className="mt-3">
                                    <input
                                      type="radio"
                                      id="google__pay"
                                      name="options"
                                      className="shipping__radio"
                                    />
                                    <label htmlFor="upi__pay">Google Pay</label>
                                  </div>
                                </div>
                              </div>
                              <div className="payment__type">
                                <input
                                  type="radio"
                                  id="net__pay"
                                  name="options"
                                  className="shipping__radio"
                                />
                                <label htmlFor="net__pay">Net Banking</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider-area">
                          <div className="container">
                            <div className="divider-wrap" />
                          </div>
                        </div>
                        {/* <div class="sub__registration-detials mt-3">
                <div class="row gutter-20 ">
                  <h5 class="sub__title sub__title2">Your Address</h5>
                  <div class="col-md-12">
                    <div class="form-grp">
                      <Label class="r__form__label">Address</Label>
                      <input type="text" placeholder="Address">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp select-grp">
                      <label class="r__form__label">Country</label>
                      <select name="Reason" class="orderby">
                        <option value="Reason For Appointment">Country</option>
                        <option value="Select One">India</option>
                        <option value="Select Two">Select Two</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp select-grp">
                      <label class="r__form__label">Region</label>
                      <select name="Reason" class="orderby">
                        <option value="Reason For Appointment">Region</option>
                        <option value="Select One">India</option>
                        <option value="Select Two">Select Two</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp">
                      <Label class="r__form__label">City</Label>
                      <input type="text" placeholder="City">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp">
                      <Label class="r__form__label">Postal Code</Label>
                      <input type="number" placeholder="Postal Code">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp">
                      <Label class="r__form__label">Region</Label>
                      <input type="text" placeholder="Region">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp select-grp">
                      <select name="Species" class="orderby">
                        <option value="Species">Species</option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp">
                      <input type="text" placeholder="Breed">
                    </div>
                  </div>
                  
                </div>
              </div> */}
                      </form>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 pl-0 mt-3">
                    <div className="registration__form-wrap">
                      <form
                        action="#"
                        className="registration__form checkout__form"
                      >
                        <h4 className="title">Use Coupon</h4>
                        <div className="divider-area">
                          <div className="container">
                            <div className="divider-wrap" />
                          </div>
                        </div>
                        <div className="sub__registration-detials mt-3">
                          <div className="row gutter-20 ">
                            <div className="col-md-12">
                              <div className="form-grp coupon__form">
                                <input type="text" placeholder="Coupon" />
                                <button type="submit" className="btn">
                                  Apply Coupon{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sub__registration-detials mt-3">
                          <div className="row gutter-20 justify-content-center ">
                            <h5 className="sub__title sub__title2">
                              Order Summary
                            </h5>
                            <div className="row ">
                              <div className="checkout__img row mt-10 p-0">
                                <div className="col-4 ">
                                  <div className="checkout__image">
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
                                </div>
                                <div className="col-8">
                                  <div className="product__details-content m-0">
                                    <h5 className="sub__title2">
                                      Meow Mix Seafood Medley Dry Cat Food
                                    </h5>
                                    <h5 className="price text-center">
                                      {" "}
                                      ₹ 29.00
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 mt-20">
                                <div className="product__details-content">
                                  <div className="product__details-qty">
                                    <div className="cart-plus-minus cart-plus-minus2">
                                      <input type="text" defaultValue={1} />
                                    </div>
                                    <p className="total__price">Total: ₹ 29</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 mt-10">
                              <div className="form-grp">
                                <label className="r__form__label">
                                  Add comments for the order
                                </label>
                                <textarea
                                  className="comment__area"
                                  defaultValue={""}
                                />
                              </div>
                              {/* <div class="form-grp coupon__form">
                      <input type="text" placeholder="Coupon">
                      <button type="submit" class="btn">Apply Coupon </button> 
                    </div> */}
                            </div>
                            <div className="col-md-12">
                              <input
                                type="checkbox"
                                id="terms__toggle"
                                className="toggle-checkbox"
                              />
                              <label
                                htmlFor="terms__toggle"
                                className="r__form__label"
                              >
                                I have read and agree to the{" "}
                                <a href="">Terms and Conditions</a>.
                              </label>
                            </div>
                          </div>
                          <div className="product__details-content checkout__btn">
                            <a href="checkout.html" className="buy-btn">
                              Order confirmation
                            </a>
                          </div>
                        </div>
                        <div className="divider-area mt-20">
                          <div className="container">
                            <div className="divider-wrap" />
                          </div>
                        </div>
                        {/* <div class="sub__registration-detials mt-3">
                <div class="row gutter-20 ">
                  <h5 class="sub__title sub__title2">Your Address</h5>
                  <div class="col-md-12">
                    <div class="form-grp">
                      <Label class="r__form__label">Address</Label>
                      <input type="text" placeholder="Address">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp select-grp">
                      <label class="r__form__label">Country</label>
                      <select name="Reason" class="orderby">
                        <option value="Reason For Appointment">Country</option>
                        <option value="Select One">India</option>
                        <option value="Select Two">Select Two</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp select-grp">
                      <label class="r__form__label">Region</label>
                      <select name="Reason" class="orderby">
                        <option value="Reason For Appointment">Region</option>
                        <option value="Select One">India</option>
                        <option value="Select Two">Select Two</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp">
                      <Label class="r__form__label">City</Label>
                      <input type="text" placeholder="City">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp">
                      <Label class="r__form__label">Postal Code</Label>
                      <input type="number" placeholder="Postal Code">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp">
                      <Label class="r__form__label">Region</Label>
                      <input type="text" placeholder="Region">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp select-grp">
                      <select name="Species" class="orderby">
                        <option value="Species">Species</option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-grp">
                      <input type="text" placeholder="Breed">
                    </div>
                  </div>
                  
                </div>
              </div> */}
                      </form>
                    </div>
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

export default Checkout;
