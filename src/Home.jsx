import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <header className="header">
        <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/06/22202141/squirrel-abstract-logo-or-modern-logo-design-by-reza-un-nobi-dribbble.png" alt="job Logo" className="logo" />
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/review">Company reviews</Link>
          <Link to="/salary">Salary guide</Link>
        </ nav>
        <nav className="nav1">
          <Link to="/signin">Signin</Link>
          <Link to="/postjob">Employers / Post Job</Link>
        </nav>
      </header>
      <div className="search-section">
        <input type="text" placeholder="Job title, keywords, or company" className="search-input" /><br /><br />
        <input type="text" placeholder="City, state, zip code, or 'remote'" className="search-input" /><br /><br />
        <button className="find-jobs-btn">Find jobs</button><br /><br />
      </div>
      <div className="resume-section">
        <p><a href="#">Post your resume</a> - It only takes a few seconds</p>
        <p>Employers: <a href="#">Post a job</a></p><br /><br />
      </div>
      <footer className="footer">
        <p>© 2025 Job Finder Portal</p>
        <nav>
          <a href="#">Accessibility at Job Finder</a>
          <a href="#">Privacy Centre and Ad Choices</a>
          <a href="#">Terms and conditions</a>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
