import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post(`${apiUrl}api/user/loginUser`, {
        identifier: email,
        password,
      });

      setMessage("Login successful!");
      console.log("User:", response?.data?.user);
      localStorage.setItem("token", response?.data?.token);
      localStorage.setItem("role", response?.data?.user?.role);
      window.location.href = "/";
      // navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong during login."
      );
    }
  };

  return (
    <main className="fix">
      <section className="registration__area-two p-5">
        <div className="container">
          <div className="registration__inner-wrap-two">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="registration__form-wrap">
                  <form onSubmit={handleLogin} className="registration__form">
                    <h3 className="title">Login Account</h3>
                    <span>
                      If you don't have an account with us,{" "}
                      <Link className="text-primary font-semibold underline hover:text-blue-700" to="/register">Register</Link>
                      
                    </span>

                    <div className="divider-area">
                      <div className="container">
                        <div className="divider-wrap" />
                      </div>
                    </div>

                    <div className="sub__registration-detials mt-3">
                      <div className="row gutter-20">
                        <div className="col-md-12">
                          <div className="form-grp">
                            <input
                              type="test"
                              placeholder="Enter your email/phone"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-grp">
                            <input
                              type="password"
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {message && <p className="text-success mt-3">{message}</p>}
                    {error && <p className="text-danger mt-3">{error}</p>}

                    <button type="submit" className="btn mt-3">
                      Login Now{" "}
                      <img
                        src="assets/img/icon/right_arrow.svg"
                        alt=""
                        className="injectable"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
