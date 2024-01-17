"use client";
import { useState, useEffect } from "react";
import AlarmItem from "./AlarmItem/AlarmItem";
import "./alarm.css";
import { convertToAmPmFormat } from "../utils/time-manager";

const Alarm = () => {
  const [alarms, setAlarms] = useState([]);
  const [activeCreate, setActiveCreate] = useState(false);
  const [newAlarmTime, setNewAlarmTime] = useState("");
  const [isValidTime, setIsValidTime] = useState(false);

  const handleDelete = (e) => {
    alarms.pop(e.target.key);
    setAlarms([...alarms]);
  };
  return (
    <div className={`alarm-page`}>
      <div className={"alarm-container "}>
        <div className={"alarms " + (activeCreate && "scroll-lock")}>
          {alarms.map((alarm, index) => {
            const alarm12 = convertToAmPmFormat(alarm);
            console.log(alarm12);
            return (
              <AlarmItem
                key={index}
                time={alarm12.time12}
                meridian={alarm12.meridian}
                handleDelete={handleDelete}
              />
            );
          })}
          {activeCreate && (
            <div className="create-modal">
              <div className="time-input">
                <span>Select Time</span>
                <input
                  type="time"
                  value={newAlarmTime}
                  onChange={(e) => {
                    setNewAlarmTime(e.target.value);
                    if (newAlarmTime) {
                      setIsValidTime(true);
                    }
                  }}
                />
              </div>
              <div className="create-options">
                <button
                  className="cancel-btn"
                  onClick={() => setActiveCreate(false)}
                >
                  Cancel
                </button>
                <button
                  className="create-alarm"
                  onClick={() => {
                    setAlarms([...alarms, newAlarmTime]);
                    setActiveCreate(false);
                  }}
                  disabled={!isValidTime}
                >
                  Create
                </button>
              </div>
            </div>
          )}
        </div>
        <button className="create-button" onClick={() => setActiveCreate(true)}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Alarm;
