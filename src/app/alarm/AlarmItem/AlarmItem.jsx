"use client";
import { useState, useEffect } from "react";
import "./alarm-item.css";
import { convertToAmPmFormat, getTime } from "@/app/utils/time-manager";

const AlarmItem = ({ time, meridian, handleDelete }) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const timeUpdater = setInterval(() => {
      setDateState(new Date());
    }, 1000);

    return () => {
      clearInterval(timeUpdater);
    };
  }, []);
  const [nowTime, nowMeridian] = getTime(dateState);
  const [alarmTime, setAlarmTime] = useState(time);
  const [alarmMeridian, setAlarmMeridian] = useState(meridian);
  const [editedTime, setEditedTime] = useState("");
  const [editUtil, setEditUtil] = useState(false);
  const [inactiveToggleBtnState, setInactiveToggleBtnState] = useState(false);
  const [isValidTime, setIsValidTime] = useState(false);

  const handleSave = () => {
    setAlarmTime(convertToAmPmFormat(editedTime).time12);
    setAlarmMeridian(convertToAmPmFormat(editedTime).meridian);
    setEditUtil(false);
  };

  const checkAlarm = () => {
    console.log(nowTime, nowMeridian, alarmTime, alarmMeridian);
    if (
      nowTime == alarmTime &&
      nowMeridian == alarmMeridian &&
      !inactiveToggleBtnState
    ) {
      alert("Alarm!!" + alarmTime + alarmMeridian);
      setInactiveToggleBtnState(true);
    }
  };
  return (
    <div className="alarm-item-container">
      {checkAlarm()}
      <div className="alarm-item">
        <div className="alarm">
          <div className="time">
            <span className="value">{alarmTime}</span>
            <span className="meridian">{alarmMeridian}</span>
          </div>
        </div>
        <div className="options">
          <button
            className={
              "toggle-button " + (inactiveToggleBtnState && "inactive")
            }
            onClick={() => {
              setInactiveToggleBtnState(!inactiveToggleBtnState);
            }}
          >
            <div className="btn"></div>
          </button>
          <div className="hover-options">
            <button
              className="option"
              onClick={() => {
                setEditUtil(!editUtil);
              }}
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="option" onClick={handleDelete}>
              <i className="fa-regular fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      {editUtil && (
        <div className="editor">
          <div className="time-input">
            <span>Select Time</span>
            <input
              type="time"
              value={editedTime}
              onChange={(e) => {
                setEditedTime(e.target.value);
                if (editedTime) {
                  setIsValidTime(true);
                }
              }}
            />
          </div>
          <div className="edit-options">
            <button
              className="cancel-btn"
              onClick={() => {
                setEditUtil(false);
              }}
            >
              Cancel
            </button>
            <button
              className="save-btn"
              onClick={handleSave}
              disabled={!isValidTime}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlarmItem;
