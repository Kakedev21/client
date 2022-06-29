import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="main-container">
        <div className="main-row">
          <div className="main-col1">
            <h2>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "15px" }}
              />
              Calauan,Laguna
            </h2>
            <h1>
              MT. <br /> Kalisungan
            </h1>
            <p>
              Enjoy this 4.8-km out-and-back trail near Calauan, Laguna.
              Generally considered a moderately challenging route, it takes an
              average of 2 h 58 min to complete. This trail is great for hiking
              and walking.
            </p>
            <Link to="/areas">
              {" "}
              <button className="main-btn">Explore now</button>
            </Link>
          </div>
          <div className="main-col2">
            <h3>Information Board</h3>
            <div className="information-box">
              <p>
                AS OF:{" "}
                {new Date().toLocaleString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
              <small>no important announcement</small>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
