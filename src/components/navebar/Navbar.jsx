import React from 'react';
import './navebar.css';
// import { Search, Person, Chat, Notifications } from "@material-ui/icons"; // Corrected import
import { FaSearch, FaUser, FaComment, FaBell } from 'react-icons/fa';
import MaleAvatar from '../../assets/img/male-avatar-profile-picture-vector-10211761.jpg';

const Navbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">E-AgRo</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FaSearch className="searchIcon" />
          <input
            placeholder="Search Traders,Farmer, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">View Post</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaUser />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FaComment />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <FaBell />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={MaleAvatar} alt="profile Img" className="topbarImg" />
      </div>
    </div>
  );
};

export default Navbar;
