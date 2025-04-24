import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const apiUrl = import.meta.env.VITE_API_URL;
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    fetchUser();
  }, [token]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${apiUrl}api/user/getUserById`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("User data:", response.data.user);

      if (response.status === 200) {
        const user = response.data.user;
        setUserName(user.name || "");
        setEmail(user.userEmail || "");
        setPhone(user.phone || "");
        setProfileImage(user.profilePicture || "");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", userName);
    formData.append("userEmail", email);
    formData.append("phone", phone);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const response = await axios.post(
        `${apiUrl}api/user/updateUser`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Update response:", response.data);
      if (response.status === 200) {
        AlertMsg("Profile updated successfully!", "success", "Profile Update");
        fetchUser();
      } else {
        AlertMsg("Failed to update profile", "error", "Profile Update");
      }
    } catch (error) {
      console.error("Update error:", error);
      AlertMsg("Failed to update profile", "error", "Profile Update");
    }
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        AlertMsg("Logout successful!", "success", "Success");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    });
  };

  const AlertMsg = (msg, type, title) => {
    Swal.fire({
      icon: type,
      title: title,
      text: msg,
    });
  };

  return (
    <div>
      <section className="blog__area pt-50 pb-100 account__page">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-5">
              <aside className="blog-sidebar account__sidebar">
                <div
                  className="acc__profile mb-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {/* Profile Image */}
                  <img
                    src="https://us.123rf.com/450wm/virtosmedia/virtosmedia2301/virtosmedia230116752/197246325-programmer-programmer-developer-vector-illustration-in-flat-style.jpg"
                    className="rounded-circle mb-3"
                    width="100"
                    height="100"
                    alt="profile"
                    style={{
                      objectFit: "cover",
                      border: "2px solid #ddd",
                    }}
                  />

                  {/* Text Section */}
                  <p className="text-muted m-0">Hello,</p>
                  <p className="acc__profile_name fw-bold fs-5">{userName}</p>
                </div>

                <h5 className="sub-title">ACCOUNT SETTINGS</h5>
                <div className="sidebar-cat-list">
                  <ul className="list-wrap">
                    <li>
                      <Link onClick={() => setActiveTab("profile")}>
                        Profile Information
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setActiveTab("coupons")}>
                        My Coupons
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setActiveTab("reviews")}>
                        My Reviews & Ratings
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setActiveTab("notifications")}>
                        All Notifications
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setActiveTab("wishlist")}>
                        My Wishlist
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </aside>
            </div>
            <div className="col-xl-9 col-lg-8 col-sm-7">
              {activeTab === "profile" && (
                <form className="registration__form checkout__form account__sidebar">
                  <div className="sub__registration-detials">
                    <div className="row gutter-20">
                      <div className="col-12">
                        <h5 className="sub__title">Personal Information</h5>
                      </div>

                      {/* Profile Picture Upload */}
                      <div className="col-12 d-flex justify-content-center mb-3">
                        <div className="form-grp text-center">
                          <label
                            htmlFor="profileInput"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={
                                profilePreview ||
                                (profileImage
                                  ? apiUrl + profileImage
                                  : "https://us.123rf.com/450wm/virtosmedia/virtosmedia2301/virtosmedia230116752/197246325-programmer-programmer-developer-vector-illustration-in-flat-style.jpg")
                              }
                              alt="Profile Preview"
                              className="rounded-circle"
                              style={{
                                width: "120px",
                                height: "120px",
                                objectFit: "cover",
                                border: "2px solid #ddd",
                              }}
                            />
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            id="profileInput"
                            name="profilePicture"
                            onChange={handleProfileChange}
                            style={{ display: "none" }}
                          />
                          <small className="d-block mt-2 text-muted">
                            Click image to upload
                          </small>
                        </div>
                      </div>

                      {/* First Name */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">First Name</label>
                          <input
                            type="text"
                            placeholder="First Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Email</label>
                          <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-grp">
                          <label className="r__form__label">Phone</label>
                          <input
                            type="number"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            disabled
                          />
                        </div>
                      </div>

                      {/* Save Button */}
                      <div className="col-12 mt-3">
                        <div className="store__btn text-center">
                          <button
                            onClick={handleUpdate}
                            className="btn shop-btn"
                          >
                            Save Changes
                            <img
                              src="assets/img/icon/right_arrow.svg"
                              alt=""
                              className="injectable"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="divider-area">
                    <div className="container">
                      <div className="divider-wrap" />
                    </div>
                  </div>
                  <div className="mt-30 account__faq">
                    <h5 className="sub__title">FAQ's</h5>
                    <div className="faq__qa">
                      <p className="faq__question">
                        What happens when I update my email address (or mobile
                        number)?
                      </p>
                      <p className="faq__answer">
                        Your login email id (or mobile number) changes,
                        likewise. You'll receive all your account related
                        communication on your updated email address (or mobile
                        number).
                      </p>
                    </div>
                    <div className="faq__qa">
                      <p className="faq__question">
                        When will my account be updated with the new email
                        address (or mobile number)?
                      </p>
                      <p className="faq__answer">
                        It happens as soon as you confirm the verification code
                        sent to your email (or mobile) and save the changes.
                      </p>
                    </div>
                    <div className="faq__qa">
                      <p className="faq__question">
                        What happens to my existing account when I update my
                        email address (or mobile number)?
                      </p>
                      <p className="faq__answer">
                        Updating your email address (or mobile number) doesn't
                        invalidate your account. Your account remains fully
                        functional. You'll continue seeing your Order history,
                        saved information and personal details.
                      </p>
                    </div>
                    <div className="faq__qa">
                      <p className="faq__question">
                        Does my Seller account get affected when I update my
                        email address?
                      </p>
                      <p className="faq__answer">
                        Mypetmall has a 'single sign-on' policy. Any changes
                        will reflect in your Seller account also.
                      </p>
                    </div>
                  </div>
                  <div className="account__delete">
                    <a href="account.html">Delete Account</a>
                  </div>
                </form>
              )}
              {activeTab === "coupons" && <p>Coupons content goes here...</p>}
              {activeTab === "reviews" && <p>Reviews content goes here...</p>}
              {activeTab === "notifications" && (
                <p>Notifications content goes here...</p>
              )}
              {activeTab === "wishlist" && <p>Wishlist content goes here...</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
