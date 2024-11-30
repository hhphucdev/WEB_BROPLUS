import React, { useEffect } from "react";
import "./style.scss";

const Chat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    script.onload = () => {
      console.log("Dialogflow script loaded successfully");
    };
    script.onerror = () => {
      console.error("Failed to load Dialogflow script");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <df-messenger
        intent="WELCOME"
        chat-title="WEB_BROPLUS"
        agent-id="e90dddc1-d7dc-45c9-8c18-92837ee83d45"
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default Chat;
