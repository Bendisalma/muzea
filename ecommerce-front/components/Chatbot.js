import styled from "styled-components";

import React, { useState } from 'react';


const ChatbotButton = styled.button`
    width: 50px;
    height: 50px;
    position: fixed;
    right: 20px; 
    bottom: 20px;
    border-radius: 10px;

      `;

const ChatbotIframe = styled.iframe`
  position: fixed;
  right: 20px;
  top: 130px;
  border-radius: 10px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  `;


export default function Chatbot() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <ChatbotButton onClick={toggleVisibility}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="chatbot"><path fill="#E5E5CB" stroke="#000" stroke-miterlimit="10" stroke-width="20" d="m577.27 804.78-41.85.78-166.87 110.62c-.57.41-1.36 0-1.36-.7V804.34h-81.51c-59 0-106.81-47.82-106.81-106.81V394.45c0-58.99 47.81-106.81 106.81-106.81H738.33c58.99 0 106.81 47.82 106.81 106.81v303.08c0 58.99-47.82 106.81-106.81 106.81l-43.64.44H577.27z"></path><circle cx="389.34" cy="448.2" r="61.34" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="20"></circle><circle cx="635.34" cy="448.2" r="61.34" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="20"></circle><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="20" d="M847.21 634.45V463.13h46.48c19.39 0 35.11 15.72 35.11 35.11v101.11c0 19.39-15.72 35.11-35.11 35.11h-46.48zM95.2 599.35V498.24c0-19.39 15.72-35.11 35.11-35.11h46.48v171.33h-46.48c-19.39-.01-35.11-15.73-35.11-35.11zm546.66 6.99c-8.57 61.51-64.53 109-132.32 109-67.77 0-123.75-47.49-132.32-109h264.64z"></path><circle cx="509.54" cy="149.59" r="41.94" fill="#E5E5CB" stroke="#000" stroke-miterlimit="10" stroke-width="20"></circle><path fill="#E5E5CB" stroke="#000" stroke-miterlimit="10" stroke-width="20" d="M509.54 244.21v-52.68"></path></svg>
      </ChatbotButton>
      
      <ChatbotIframe isVisible={isVisible} width="250" height="400" allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/a0c2d651-62a2-4366-925c-dbe8ced12842"
      />
    </div>
  );
}

