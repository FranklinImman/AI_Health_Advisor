import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import image2 from './assets/image.png';
import image3 from './assets/image (1).png';
import image4 from './assets/image (2).png';

const Health = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const API_URI = import.meta.env.VITE_API_URL_5000;
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URI}/login`, { email, password });
      console.log(res);
      if (res.data.toLowerCase().includes('login successful')) {
        alert('Login successful!');
        navigate('/healthtips');
      } else {
        setMessage(res.data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setMessage('Login failed. Please try again.');
    }
  };

  useEffect(() => {
    const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExampleDark'), {
      interval: 3000, 
      ride: 'carousel', 
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row m-4 align-items-center">
        {/* Left Column: Carousel */}
        <div className="col-lg-6">
          <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  src={image2}
                  className="d-block w-100"
                  alt="..."
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "15px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='text-light'>Stay Fit & Healthy</h5>
                  <p className='text-light'>Explore simple and effective tips to maintain your health and fitness.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src={image3}
                  className="d-block w-100"
                  alt="..."
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "15px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='text-light'>Nutrition is Key</h5>
                  <p className='text-light'>Learn the importance of a balanced diet and healthy eating habits.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src={image4}
                  className="d-block w-100"
                  alt="..."
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "15px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='text-light'>Exercise Regularly</h5>
                  <p className='text-light'>Discover workout plans that suit your lifestyle and fitness goals.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Right Column: Login Form */}
        <div className="col-lg-6">
          <div className="content mt-5">
            <h1 className="text-center">
              Welcome to <span>AI</span> Health Advisor
            </h1>
            <p className="text-center">
              The future of medicine lies in the hands of technology
            </p>
            <form
              onSubmit={handleLogin}
              className="border border-1 p-4 rounded"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {message && <p className="text-danger">{message}</p>}
              <button type="submit" className="btn btn-success">
                Login
              </button>
              <p className="mt-2">
                Don't have an account? <NavLink to="/signup">Sign up</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
