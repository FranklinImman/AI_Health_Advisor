import React from "react";
import image from './assets/WhatsApp Image 2024-12-15 at 6.49.26 PM.jpeg'
const AboutPage = () => {
  const handleResumeDownload = () => {
    
    const resumeUrl = '../public/Pugazhendhi_Resume.pdf'; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Pugazhendhi_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        <div className="col-md-4 text-center">
          <img
            src={image} 
            alt="Your Name"
            className="img-fluid rounded shadow"
          />
        </div>

        
        <div className="col-md-8">
          <h1 className="mb-4">About Me</h1>
          <p>
            Hi, I'm <strong>Krish Pugazh</strong>. I'm a passionate software developer 
            and problem solver. I specialize in backend development, web development, 
            and AI technologies. When I'm not coding, you'll find me playing piano, 
            enjoying a good chess game, or experimenting with new technologies.
          </p>
          <p>
            My goal is to create innovative solutions that make a difference in 
            people's lives. Let's connect and collaborate!
          </p>

          <h5 className="mt-4">Follow Me</h5>
          <ul className="list-inline">
            <li className="list-inline-item me-3">
              <a
                href="https://github.com/HelloPugazh" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="bi bi-github fs-3"></i> {/* Bootstrap Icon */}
              </a>
            </li>
            <li className="list-inline-item me-3">
              <a
                href="https://www.linkedin.com/in/pugazhendhi-krishnamoorthi-823919287/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="bi bi-linkedin fs-3"></i> 
              </a>
            </li>
            <li className="list-inline-item fs-3">
              <a
                href="https://krishpugazh10.wixsite.com/my-achievements" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i class="bi bi-browser-chrome"></i>
              </a>
            </li>
          </ul>

          
          <button
            className="btn btn-primary mt-4"
            onClick={handleResumeDownload}
          >
            <i className="bi bi-download me-2"></i> Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
