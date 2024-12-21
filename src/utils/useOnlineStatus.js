import react from "react";
import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  // useState for status
  const [onlineStatus, setOnlineStatus] = useState(true);

  // useEffetct to call the window event listener once
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;
