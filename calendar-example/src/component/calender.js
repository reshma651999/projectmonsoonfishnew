import React, { useState } from "react";

// install react calender using "npm i react-calendar"
import Calendar from "react-calendar";

// React-Calendar provides some default styling, which you can apply by importing its stylesheet.
import "react-calendar/dist/Calendar.css";
import "./calender.css";

const UserCalender = () => {
  const [messages, setMessages] = useState({});

  // The `message` and `selectedDate` states are used to store the
  //  values of the input field and the selected date on the calendar
  const [message, setMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addMessage = () => {
    setMessages({
      ...messages,
      [selectedDate.toISOString().substr(0, 10)]: message,
    });
    localStorage.setItem("Messages", JSON.stringify(messages));
  };

  return (
    <section className="app">
      <div className="calendar-container">
        <Calendar
          onClickDay={(date) => setSelectedDate(date)}
          tileContent={({ date }) => {
            const message = messages[date.toISOString().substr(0, 10)];

            if (message) {
              return <p className="message">{message}</p>;
            }
            return null;
          }}
        />
      </div>
      <div className="input">
        <input
          className="inputmain"
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={addMessage}>Add Message</button>
      </div>
    </section>
  );
};

export default UserCalender;
