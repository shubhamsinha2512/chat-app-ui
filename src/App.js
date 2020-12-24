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
        name:"Shubham",
        messages:[
            {type:"p", body:"hello"},
            {type:"p", body:"how are u?"},
            {type:"s", body:"hello, I'm good!"},
        ]
    },
    {
        name:"Neha",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        name:"Rahul",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        name:"Shivam",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        name:"Jatin",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        name:"Carry",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        name:"John",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        name:"Ross",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
    {
        name:"Monica",
        messages:[
            {type:"s", body:"hello"},
            {type:"s", body:"how are u?"},
            {type:"p", body:"hello, I'm good!"},
          ]
      },
  ]);

  
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
    console.log(curChat);
  }

  return (
    <div className="App">
      <Sidebar chats={chats} onChatSelect={onChatSelect} className="sidebar" />
      <Chat chats={curChat} onNewMsg={setNewMsg} className="chat" />
    </div>
  );
}

export default App;
