import { useEffect, useState } from "react";

const useOnlinestatus = () => {
  const [onlinestatus, setOnlinestatus] = useState(true);

  useEffect(() => {
    // Listen for 'offline' and 'online' events
    const handleOffline = () => {
      setOnlinestatus(false);
    };

    const handleOnline = () => {
      setOnlinestatus(true);
    };

    // Add event listeners
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return onlinestatus;
};

export default useOnlinestatus;
