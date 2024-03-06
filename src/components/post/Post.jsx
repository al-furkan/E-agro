import React, { useState } from 'react';
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import "./post.css";
import { CiShare2 } from "react-icons/ci";
import { FaComment } from "react-icons/fa";
const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const user = Users.find((u) => u.id === post?.userId);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {user && (
              <>
                <img
                  className="postProfileImg"
                  src={user.profilePicture}
                  alt=""
                />
                <span className="postUsername">{user.username}</span>
              </>
            )}
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/img/p1.jpeg"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/img/p2.jpeg"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">Given {like} taka Hight Rate</span>
          </div>
          <div className="postBottomMid">
            <span className="postCommentText"><FaComment /> {post.comment} comments</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"><CiShare2 /> {post.comment} Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
