import React from 'react';
import '../../styles/Sidebar.css';



const Sidebar = () => {
  return (
    <div className="sidebar">
      
        <img
          src="/path/to/your/logo.png"
          alt="Company Logo"
          className="company-logo"
        />
        
      
      <ul>
        <li>
          <i className="fas fa-comments"></i> Conversations
        </li>
        <li>
          <i className="fas fa-cogs"></i> Automations
        </li>
        <li>
          <i className="fas fa-bullhorn"></i> Campaigns
        </li>
        <li>
          <i className="fas fa-comments"></i> Conversations
        </li>
        <li>
          <i className="fas fa-window-maximize"></i> Popup
        </li>
        <li>
        <i className="fa-solid fa-livechat"></i> Livechat
        </li>
        <li>
          <i className="fas fa-sliders-h"></i> Segment
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
