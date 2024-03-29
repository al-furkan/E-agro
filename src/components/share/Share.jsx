import React from 'react';
import './share.css';
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons";
import MaleAvatar from '../../assets/img/male-avatar-profile-picture-vector-10211761.jpg';
const Share = () => {
  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src={MaleAvatar} alt="" />
        <input
          placeholder="What's in your mind Safak?"
          className="shareInput"
        />
      </div>
      <hr className="shareHr"/>
      <div className="shareBottom">
          <div className="shareOptions">
              <div className="shareOption">
                  <PermMedia htmlColor="tomato" className="shareIcon"/>
                  <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                  <Label htmlColor="blue" className="shareIcon"/>
                  <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                  <Room htmlColor="green" className="shareIcon"/>
                  <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                  <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                  <span className="shareOptionText">Feelings</span>
              </div>
          </div>
          <button className="shareButton">Share</button>
      </div>
    </div>
  </div>
  )
}

export default Share;
