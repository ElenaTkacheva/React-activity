import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';

function App() {

  const [activity, setActivity] = useState('');
  const [participants, setParticipants] = useState("1");
  const [type, setType] = useState("");

  const getNewActivity = async() => {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    setActivity(data.activity);
    setParticipants(data.participants);
    setType(data.type);
  }

  const showNext = () => {
    setActivity(data.activity);
  };

  useEffect(() => {
    getNewActivity();
  }, []);


  return (
    <div className="App">
      <p>
        <i>Type of activity :</i> <span className="type span"> {type} </span>
      </p>
      <h2 className="type">{activity}</h2>
      <p>
        <i>
          {" "}
          {participants === 1
            ? "for " + participants + " person"
            : "for " + participants + " people"}
        </i>
      </p>

      <button onClick={getNewActivity}>Show me next!</button>
    </div>
  );
}

export default App;
