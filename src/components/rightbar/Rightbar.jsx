import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/post/13.jpeg" alt="" />
          <span className="birthdayText">
            <b>Buy</b> and <b>3 other Seen</b> All this Product.
          </span>
        </div>
        <img className="rightbarAd" src="assets/post/14.jpeg" alt="" />
        <h4 className="rightbarTitle">Online Farmer & Traders</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Dhaka</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Phone:</span>
            <span className="rightbarInfoValue">01706010076</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Propation:</span>
            <span className="rightbarInfoValue">Farmer</span>
          </div>
        </div>
        <h4 className="rightbarTitle">This Weak Your Post</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/post/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tomato</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/post/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tomato</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/post/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tomato</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/post/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tomato</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/post/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tomato</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/post/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tomato</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}