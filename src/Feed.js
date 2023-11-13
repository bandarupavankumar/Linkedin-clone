import React, { useEffect, useState } from "react";
import FlipMove from 'react-flip-move';
import ImageIcon from "@mui/icons-material/Image";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import db from "./firebase";
import firebase from 'firebase/compat/app';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function Feed() {
  const user = useSelector(selectUser)
  const [input , setInput] = useState('');
  const [posts, setPost] = useState([]);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
        name: user.displayName,
        descripiton: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  };


  useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setPost(
        snapshot.docs.map((document) => ({
          id: document.id,
          data: document.data(),
        }))
      )
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#7FC15E"
          />
        </div>
      </div>
      {/* post */}
      <FlipMove>
      {posts.map(({ id , data:{name , descripiton , message , photoUrl}}) => (
        <Post
         key={id}
         name={name}
         description ={descripiton}
         message={message}
         photoUrl={photoUrl}
         />
      ))}
        
      </FlipMove>
    </div>
  );
}

export default Feed;
