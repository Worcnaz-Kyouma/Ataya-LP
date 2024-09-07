import React from 'react';
import './WhatsappButton.css';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5542988312411"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};