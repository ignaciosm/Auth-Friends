import React, {useState, useEffect} from 'react';
import axios from "axios";



const FriendsList = () => {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getData();
    if (!localStorage.getItem("token")) {
      console.error("Please Login!!!");
    } else {
      console.info("We are logged in");
    }
  }, [])

  const getData = () => {
    axios.get("http://localhost:5000/api/friends", {
      headers: { authorization: localStorage.getItem("token") }
    })
      .then(res => {
        setFriends(res.data)
      });
  };

  console.log('friends', friends)


  return (
    <div>
      <h1>Hello from Friends List</h1>
      <ul>
        {friends.map(friend=> (
          <li>{friend.name} {friend.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default FriendsList
