import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Doctors = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [doctorData, setDoctorData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDoctorData = async () => {
    try {
      const response = await axios.get(`${apiUrl}api/user/getAllDoctors`);
      console.log(response);

      if (response.status === 200) {
        setDoctorData(response?.data?.doctors);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error fetching doctor data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate("/doctorsDetails", {
      state: { doctorId: id },
    });
  };

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
            {isLoading ? (
              <p>Loading...</p> // Show a loading message while the data is being fetched
            ) : (
              doctorData.map((doctor) => (
                <div key={doctor._id} className="col-xl-3 col-lg-4 col-md-6">
                  <button
                    style={{ border: "none", background: "none", padding: 0 }}
                    onClick={() => handleCardClick(doctor._id)}
                  >
                    <div className="doc_post">
                      <div className="doc_post_pic">
                        <img
                          src={
                            doctor.profilePicture
                              ? `${apiUrl}${doctor.profilePicture}`
                              : "https://placehold.it/100x100"
                          }
                          alt={doctor.name}
                        />
                      </div>
                      <div className="doc_post_content">
                        <h3 className="doc_name">{doctor.name}</h3>
                        <p className="doc_specialty">{doctor.specialization}</p>
                        <div className="product__reviews our_expertise_reviews">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span>(48 Reviews)</span>{" "}
                          {/* You can replace 48 with the actual number of reviews if available */}
                        </div>
                        <p>Exp: {doctor.experience}</p>
                        <p className="doc__qual">
                          <img
                            src="assets/img/icon/icon8-degree-48.png"
                            alt="Degree"
                          />
                          {doctor.education}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
