import React, { useState } from "react";
import Select from "react-select";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [activeTab, setActiveTab] = useState("customer");
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  // State variables for doctor registration
  const [docProfilePreview, setDocProfilePreview] = useState(null);
  const [availableDays, setAvailableDays] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [documents, setDocuments] = useState([]);
  const [docProfilePicture, setDocProfilePicture] = useState(null);
  const [docName, setDocName] = useState("");
  const [docEmail, setDocEmail] = useState("");
  const [docPassword, setDocPassword] = useState("");
  const [docConfirmPassword, setDocConfirmPassword] = useState("");
  const [docPhone, setDocPhone] = useState("");
  const [docEducation, setDocEducation] = useState("");
  const [docExperience, setDocExperience] = useState("");
  const [docCollege, setDocCollege] = useState("");
  const [docSpecialization, setDocSpecialization] = useState("");
  const [docLicenseNumber, setDocLicenseNumber] = useState("");
  const [docConsultationFee, setDocConsultationFee] = useState("");
  const [docClinicAddress, setDocClinicAddress] = useState("");

  // State variables for customer registration
  const [profilePreview, setProfilePreview] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const daysOptions = [
    { value: "Mon", label: "Monday" },
    { value: "Tue", label: "Tuesday" },
    { value: "Wed", label: "Wednesday" },
    { value: "Thu", label: "Thursday" },
    { value: "Fri", label: "Friday" },
    { value: "Sat", label: "Saturday" },
    { value: "Sun", label: "Sunday" },
  ];

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleDocProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocProfilePicture(file);
      setDocProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (acceptedFiles) => {
    setDocuments((prev) => [...prev, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "application/pdf": [],
      "image/jpeg": [],
      "image/png": [],
    },
    multiple: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation (optional)
    if (userPassword !== userConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", userName);
    formData.append("userEmail", userEmail);
    formData.append("password", userPassword);
    formData.append("phone", userPhone);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const response = await axios.post(
        `${apiUrl}api/user/registerUser`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("User registered successfully:", response.data);
        navigate("/verifyOtp", {
          state: {
            otp: response.data.user.otp,
            phone: response.data.user.phone,
          },
        });
      }
      // Redirect or show success message
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDocSubmit = async (e) => {
    e.preventDefault();

    // Form validation (optional)
    if (docPassword !== docConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("role", "doctor");
    formData.append("name", docName);
    formData.append("userEmail", docEmail);
    formData.append("password", docPassword);
    formData.append("phone", docPhone);
    formData.append("education", docEducation);
    formData.append("experience", docExperience);
    formData.append("college", docCollege);
    formData.append("specialization", docSpecialization);
    formData.append("licenseNumber", docLicenseNumber);
    formData.append("consultationFee", docConsultationFee);
    formData.append("clinicAddress", docClinicAddress);
    if (docProfilePicture) {
      formData.append("profilePicture", docProfilePicture);
    }
    if (documents.length > 0) {
      documents.forEach((file) => {
        formData.append("documents", file);
      });
    }
    availableDays.forEach((day) => {
      formData.append("availableDays", day.value);
    });
    formData.append(
      "timings",
      JSON.stringify({ start: startTime, end: endTime })
    );

    try {
      const response = await axios.post(
        `${apiUrl}api/user/registerUser`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Doctor registered successfully:", response.data);
        navigate("/verifyOtp", {
          state: {
            otp: response.data.user.otp,
            phone: response.data.user.phone,
          },
        });
      }
      // Redirect or show success message
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <main className="fix">
        <section className="registration__area-two p-5">
          <div className="container">
            <div className="registration__inner-wrap-two">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="registration__form-wrap">
                    {/* Tabs for Customer and Doctor */}
                    <div className="nav nav-tabs mb-4">
                      <div className="row w-100">
                        <div className="col-6 text-center" role="presentation">
                          <a
                            className={`nav-link ${
                              activeTab === "customer" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("customer")}
                            href="#customer"
                            role="tab"
                            aria-controls="customer"
                            aria-selected={activeTab === "customer"}
                            style={{
                              color:
                                activeTab === "customer" ? "#002169" : "#000",
                              fontWeight: "600",
                            }}
                          >
                            Customer
                          </a>
                        </div>
                        <div className="col-6 text-center" role="presentation">
                          <a
                            className={`nav-link ${
                              activeTab === "doctor" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("doctor")}
                            href="#doctor"
                            role="tab"
                            aria-controls="doctor"
                            aria-selected={activeTab === "doctor"}
                            style={{
                              color:
                                activeTab === "doctor" ? "#002169" : "#000",
                              fontWeight: "600",
                            }}
                          >
                            Doctor
                          </a>
                        </div>
                      </div>
                    </div>

                    {activeTab === "customer" && (
                      <div className="tab-content" id="registrationTabsContent">
                        <form
                          onSubmit={handleSubmit}
                          className="registration__form"
                        >
                          <h3 className="title text-center">
                            Register Account
                          </h3>
                          <span className="d-block text-center mb-3">
                            If you already have an account with us, please login
                            at the{" "}
                            <Link
                              className="text-primary font-semibold underline hover:text-blue-700"
                              to="/login"
                            >
                              Login
                            </Link>
                          </span>

                          {/* Profile Picture Preview */}
                          <div className="text-center mb-4">
                            <label
                              htmlFor="profileInput"
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={
                                  profilePreview ||
                                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-TruksPXPI5imDL_kfzEfFiAZwg5AzHtWg&s"
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

                          <div className="sub__registration-detials mt-3">
                            <div className="row gutter-20">
                              <h5 className="sub__title">Personal Details</h5>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="text"
                                    placeholder="Full Name"
                                    name="name"
                                    value={userName}
                                    onChange={(e) =>
                                      setUserName(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="email"
                                    placeholder="E-mail"
                                    name="email"
                                    value={userEmail}
                                    onChange={(e) =>
                                      setUserEmail(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={userPassword}
                                    onChange={(e) =>
                                      setUserPassword(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={userConfirmPassword}
                                    onChange={(e) =>
                                      setUserConfirmPassword(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="number"
                                    placeholder="Phone"
                                    name="phone"
                                    value={userPhone}
                                    onChange={(e) =>
                                      setUserPhone(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="btn mt-4"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                Registering...
                              </>
                            ) : (
                              <>
                                Submit
                                <img
                                  src="assets/img/icon/right_arrow.svg"
                                  alt=""
                                  className="injectable"
                                />
                              </>
                            )}
                          </button>
                        </form>
                      </div>
                    )}

                    {activeTab === "doctor" && (
                      <div className="tab-content" id="registrationTabsContent">
                        <form
                          onSubmit={handleDocSubmit}
                          className="registration__form"
                        >
                          <h3 className="title text-center">
                            Doctor Registration
                          </h3>
                          <span className="d-block text-center mb-3">
                            Already have an account?{" "}
                            <Link
                              className="text-primary font-semibold underline hover:text-blue-700"
                              to="/login"
                            >
                              Login
                            </Link>
                          </span>

                          {/* Profile Picture Preview */}
                          <div className="text-center mb-4">
                            <label
                              htmlFor="doctorProfileInput"
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={
                                  docProfilePreview ||
                                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-TruksPXPI5imDL_kfzEfFiAZwg5AzHtWg&s"
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
                              id="doctorProfileInput"
                              name="profilePicture"
                              onChange={handleDocProfileChange}
                              style={{ display: "none" }}
                            />
                            <small className="d-block mt-2 text-muted">
                              Click image to upload
                            </small>
                          </div>

                          <div className="sub__registration-detials mt-3">
                            <div className="row gutter-20">
                              <h5 className="sub__title">Personal Details</h5>

                              {/* Common Fields */}
                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="text"
                                    placeholder="Full Name"
                                    name="Name"
                                    value={docName}
                                    onChange={(e) => setDocName(e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="email"
                                    placeholder="Email"
                                    name="Email"
                                    value={docEmail}
                                    onChange={(e) =>
                                      setDocEmail(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={docPassword}
                                    onChange={(e) =>
                                      setDocPassword(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={docConfirmPassword}
                                    onChange={(e) =>
                                      setDocConfirmPassword(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="number"
                                    placeholder="Phone"
                                    name="phone"
                                    value={docPhone}
                                    onChange={(e) =>
                                      setDocPhone(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              {/* Doctor Specific Fields */}
                              <h5 className="sub__title mt-4">
                                Professional Details
                              </h5>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="text"
                                    placeholder="Education"
                                    name="education"
                                    value={docEducation}
                                    onChange={(e) =>
                                      setDocEducation(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="text"
                                    placeholder="Experience (e.g. 5 years)"
                                    name="experience"
                                    value={docExperience}
                                    onChange={(e) =>
                                      setDocExperience(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="text"
                                    placeholder="College / University"
                                    name="college"
                                    value={docCollege}
                                    onChange={(e) =>
                                      setDocCollege(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="text"
                                    placeholder="Specialization"
                                    name="specialization"
                                    value={docSpecialization}
                                    onChange={(e) =>
                                      setDocSpecialization(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="text"
                                    placeholder="License Number"
                                    name="licenseNumber"
                                    value={docLicenseNumber}
                                    onChange={(e) =>
                                      setDocLicenseNumber(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <input
                                    type="number"
                                    placeholder="Consultation Fee (₹)"
                                    name="consultationFee"
                                    value={docConsultationFee}
                                    onChange={(e) =>
                                      setDocConsultationFee(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-12">
                                <div className="form-grp">
                                  <textarea
                                    placeholder="Clinic Address"
                                    name="clinicAddress"
                                    rows="2"
                                    value={docClinicAddress}
                                    onChange={(e) =>
                                      setDocClinicAddress(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-12">
                                <div className="form-grp">
                                  <label>Available Days</label>
                                  <Select
                                    options={daysOptions}
                                    isMulti
                                    onChange={setAvailableDays}
                                    value={availableDays}
                                    classNamePrefix="react-select"
                                    placeholder="Select available days"
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <label>Start Time</label>
                                  <input
                                    type="time"
                                    name="startTime"
                                    value={startTime}
                                    onChange={(e) =>
                                      setStartTime(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-grp">
                                  <label>End Time</label>
                                  <input
                                    type="time"
                                    name="endTime"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="col-md-12">
                                <div className="form-grp">
                                  <label>Upload Documents</label>
                                  <div
                                    {...getRootProps()}
                                    style={{
                                      border: "2px dashed #ccc",
                                      padding: "20px",
                                      borderRadius: "10px",
                                      textAlign: "center",
                                      background: isDragActive
                                        ? "#f0f8ff"
                                        : "#fafafa",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                      <p>Drop the files here...</p>
                                    ) : (
                                      <p>
                                        Drag & drop PDF, JPG, PNG files here, or
                                        click to browse
                                      </p>
                                    )}
                                  </div>

                                  {documents.length > 0 && (
                                    <ul className="mt-2 small text-muted">
                                      {documents.map((file, index) => (
                                        <li key={index}>
                                          {file.name} (
                                          {Math.round(file.size / 1024)} KB)
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {isLoading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Registering...
                            </>
                          ) : (
                            <>
                              Submit
                              <img
                                src="assets/img/icon/right_arrow.svg"
                                alt=""
                                className="injectable"
                              />
                            </>
                          )}
                        </form>
                      </div>
                    )}
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

export default Register;
