import "./style.css"
export function Footer(){
  return (
    <section className="main-footer">
    <div className="footer">
      <div className="content">
        <h3>Abstract</h3>
        <a href="https://www.w3schools.com">Branches</a>
      </div>
      <div className="content">
        <h3>Resources</h3>
        <a href="https://www.w3schools.com">Blog</a>
        <a href="https://www.w3schools.com">Help Center</a>
        <a href="https://www.w3schools.com">Release Notes</a>
        <a href="https://www.w3schools.com">Status</a>
      </div>
      <div className="content">
        <h3>Community</h3>
        <a href="https://www.w3schools.com">Twitter</a>
        <a href="https://www.w3schools.com">LinkedIn</a>
        <a href="https://www.w3schools.com">Facebook</a>
        <a href="https://www.w3schools.com">Dribble</a>
        <a href="https://www.w3schools.com">Podcast</a>
      </div>
      <div className="content">
        <h3>Company</h3>
        <a href="https://www.w3schools.com">About Us</a>
        <a href="https://www.w3schools.com">Careers</a>
        <a href="https://www.w3schools.com">Legal</a>

        <h4>Contact Us</h4>
        <p>info@abstract.com</p>
      </div>
      <div className="copyright">
        <span className="background-icon">
          <img
            className="Logo-Image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJNJREFUSEvdlNsOgDAIQ93/f7TGRRLEQiGRGOeb7nJKC46t+RnN92+fAvarOiYi3BcdbgdIPB4oJYCVf0LaAHJxttGg2EwGrwOschFR/T6FoQqqF3n7HwDP82oFYuk8pyuohsqyWRjgeZ6yxA4mysAC2LTbSb+9rwXwPNbti/IJLWT+6r+pnhsEhQIzANY94fr/AQdq9ikZ67RLUgAAAABJRU5ErkJggg=="
            title="Logo"
            alt="Logo"
          />
        </span>
        <p>
          Copyright 2022
          <br />
          Abstract Studio Design, Inc.
          <br />
          All rights reserved
        </p>
      </div>
    </div>
    </section>  
  );
}