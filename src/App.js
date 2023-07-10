import React from 'react';
import './App.css';
import { SendBirdProvider } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import "@sendbird/chat-ai-widget/dist/style.css";

function App() {
  return (
    <div className="App">
      <SendBirdProvider
        appId={process.env.REACT_APP_SENDBIRD_APP_ID}
        userId={process.env.REACT_APP_SENDBIRD_USER_ID}
        accessToken={process.env.REACT_APP_SENDBIRD_ACCESS_TOKEN}
        theme="dark"
      >
        <ChatAiWidget
          applicationId={process.env.REACT_APP_SENDBIRD_APP_ID}
          botId="ChromaBot" // Your Bot ID
        />
      </SendBirdProvider>
    </div>
  );
}

export default App;
