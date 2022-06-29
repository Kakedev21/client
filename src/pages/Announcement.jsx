import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminLinks from "../components/AdminLinks";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addAnnounce } from "../features/announceSlice";

const Announcement = () => {
  const [textAnnounce, setTextAnnounce] = useState("");

  //redux
  const dispatch = useDispatch();

  const submitAnnounce = (e) => {
    e.preventdefault();
    dispatch(addAnnounce({ textAnnounce }));
    setTextAnnounce("");
  };

  const { announcements } = useSelector((state) => state.announcements);

  return (
    <>
      <AdminHeader />
      <AdminLinks />
      <div className="announcemt">
        <h2>Announcements</h2>
        <div className="announcement-container">
          <h3>Today's announcement</h3>
          <div className="announce-row">
            <div className="acol1">
              <div className="announcement-box">
                <h3>{announcements}</h3>
              </div>
              <button>Delete announce</button>
            </div>
            <div className="a-col2">
              <form onSubmit={submitAnnounce}>
                <textarea
                  type="text"
                  name="text"
                  id="text"
                  value={textAnnounce}
                  placeholder="input announcements"
                  onChange={(e) => setTextAnnounce(e.target.value)}
                />
                <button type="submit">Announce</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
