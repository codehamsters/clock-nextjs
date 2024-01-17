export const getTime = (now) => {
  let strTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return strTime.split(" ");
};

export const getTime24 = (now) => {
  let strTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  return strTime;
};
export const getDate = (now) => {
  let strDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  return strDate;
};

export const convertToAmPmFormat = (time24) => {
  const [hours, minutes] = time24.split(":").map(Number);
  const meridian = hours >= 12 ? "PM" : "AM";
  const time12 = `${String(hours % 12 || 12).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;
  return { time12, meridian };
};
