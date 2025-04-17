import React from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <div>
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
                <Link to="/doctorList">
                  See All
                  <i className="flaticon-right-arrow-angle" />
                </Link>
              </div>
            </div>
          </div>
          {/* Doctor Cards */}
          <div className="row justify-content-center">
            {/* Doctor Card 1 */}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <Link to="/doctorsDetails">
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
              </Link>
            </div>
            {/* Doctor Card 2 */}
            <div className="col-xl-3 col-lg-4 col-md-6">
            <Link to="/doctorsDetails">
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
                  <p className="doc_specialty">Animal Welfare Specialists</p>
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
                    <img src="assets/img/icon/icon8-degree-48.png" alt="img" />
                    M.V.Sc.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            {/* Doctor Card 3 */}
            <div className="col-xl-3 col-lg-4 col-md-6">
            <Link to="/doctorsDetails">
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
                  <p className="doc_specialty">Internal Medicine Specialists</p>
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
                    <img src="assets/img/icon/icon8-degree-48.png" alt="img" />
                    M.V.Sc.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            {/* Doctor Card 4 */}
            <div className="col-xl-3 col-lg-4 col-md-6">
            <Link to="/doctorsDetails">
              <div className="doc_post">
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
                    <img src="assets/img/icon/icon8-degree-48.png" alt="img" />
                    M.V.Sc.
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
