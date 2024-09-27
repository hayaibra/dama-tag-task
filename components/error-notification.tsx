import React, { useEffect, useState } from "react";

type ErrorNotificationProps = {
  message: string;
};
const ErrorNotification = ({ message }: ErrorNotificationProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="flex items-center justify-between p-4 mb-4 text-sm text-red-400 bg-gray-800 rounded-lg shadow-lg border border-red-500">
      <span>{message}</span>
      <button
        className="text-gray-400 hover:text-gray-300 focus:outline-none"
        onClick={() => setVisible(false)}
      >
        ✕
      </button>
    </div>
  );
};

export default ErrorNotification;
