import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            A biography typically includes essential details such as the
            person's full name, birth and death dates, and their place of birth.
            It covers educational background, highlighting institutions attended
            and degrees earned. A significant portion focuses on the person's
            career, outlining key achievements, roles held, and major
            contributions in their field. Additionally, personal life details
            such as family, marital status, and hobbies may be mentioned if
            relevant. The biography also highlights awards or recognitions
            received, showcasing the individual's impact on their profession or
            society. 
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          
          </p>
          <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
