import React from "react";
import { FaMicrosoft, FaApple, FaGoogle } from "react-icons/fa";
// import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Bangalore",
      openPositions: 2,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Google",
      location: "Noida",
      openPositions: 1,
      icon: <FaGoogle  />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Mumbai",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;