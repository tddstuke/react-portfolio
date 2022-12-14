import React from "react";

function About() {
  return (
    <div className="container">
      <section>
        <h3 className="m-5 text-center text-lg-start  px-5">About Me</h3>
        <div className="card shadow">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-3 col-lg-3 d-flex justify-content-md-center">
              <img
                className="rounded-circle m-auto my-5"
                style={{ height: "180px" }}
                src={require("../../assets/me.jpg")}
                alt="my profile"
              />
            </div>
            <div className="col-md-12 col-lg-8">
              <p className="m-5">
                {" "}
                Hello! My name is Todd Stuke and I am a recent graduate of a
                full-stack coding bootcamp at the University of Kansas. Through
                hard work and determination I have developed skills in both
                front-end and back-end web development including responsive
                design, and database management. I hope you will take time to
                look at the projects I built during class (including this
                portfolio!) and some I have built or modified after. My Resume
                and a Contact page are also available here as well as a link to
                my GitHub , LinkedIn and Email. Hope to hear from you soon!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
