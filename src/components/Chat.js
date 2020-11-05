import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import db from "../firebase";
import "./Chat.css";
import formatDate from "../time";

function Chat() {
  const [seed, setSeed] = useState(""),
    [input, setInput] = useState(""),
    [roomName, setRoomName] = useState(""),
    [messages, setMessages] = useState([]),
    { roomId } = useParams();

  const user = useSelector((state) => state.user);
  // const { ...rest } = useSelector(({ user, posts }) => {
  //   return { user, posts };
  // });
  // console.log("👨‍💻", posts);
  // console.log("👨", rest.posts);

  const sendMsg = (e) => {
    e.preventDefault();
    console.log("You typed >>> ", input);
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    setSeed(roomId);
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name)) &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
  }, [roomId]);

  const slotInDate = new Date(
    messages[messages.length - 1]?.timestamp?.toDate()
  );

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>
            {messages[0]?.message
              ? `Last seen ${formatDate(slotInDate, "time&date")}`
              : "Offline"}
          </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat__receiver"
            }`}
          >
            <span className="chat__name">{message.name}</span> {message.message}
            <span className="chat__timestamp">
              {formatDate(slotInDate, "just time")}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message..."
          />
          <button onClick={sendMsg} type="submit">
            Send a message
          </button>
        </form>

        <Mic />
      </div>
    </div>
  );
}

export default Chat;
