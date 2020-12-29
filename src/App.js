import React from 'react'
import {useState, useEffect} from 'react'

import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Chat from './components/Chat/Chat'

function App() {

  const [curChat, setcurChat] = useState({
    name:'',
    messages:[]
  });

  const [chats, setChats] = useState([
    {
        id:1,
        name:"Shubham",
        messages:[
            {type:"p", body:"hello"},
            {type:"p", body:"how are u?"},
            {type:"s", body:"hello, I'm good!"},
            {type:"p", body:"what's up!"},
            {type:"s", body:"just chillin"}
        ]
    },
    {
        id:2,
        name:"Neha",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        id:3,
        name:"Rahul",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        id:4,
        name:"Shivam",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        id:5,
        name:"Rahul",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        id:6,
        name:"Shruti",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        id:7,
        name:"Sumit",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      }
  ]);

  useEffect(()=>{
    console.log("chat updated");
  }, [chats])

  function updateMessage(id, message, type){
      let curObj = chats.filter((obj)=>{
        return obj.id === id;
      })
      curObj[0].messages.push({type:type, body:message});
      setChats([...chats], curObj);
      // console.log(chats);
  }

  // updateMessage(1, "new message", "s");

  const [newMsg, setNewMsg] = useState({
    name:'',
    messages:[]
  })

  useEffect(()=>{
    setChats([...chats], newMsg);
  }, [newMsg]);

  function onChatSelect(name, messages){
    setcurChat({
      name:name,
      messages:messages
    })
    // console.log(curChat);
  }

  return (
    <div className="App">
      <Sidebar chats={chats} onChatSelect={onChatSelect} className="sidebar" />
      <Chat chats={chats} updateMessage={updateMessage} className="chat" />
    </div>
  );
}

export default App;
