import React from "react";
import "./Navbar.scss";
import {BsInstagram,BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">ToolsM5</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div class="nav-links">
        <div class=''>
          <a href="/" target="_blank">
            About us{" "}
          </a>
          <a href="/" target="_blank">
            Services
          </a>
          <a href="/" target="_blank">
            Contact
          </a>
        </div>
        <div class='nav-icons-container'>
          <div class='nav-icon-container'>
            <FaFacebookF class='nav-icons'/>
          </div>
          <div class='nav-icon-container'>
            <BsTwitter class='nav-icons'/>
          </div>
          <div class='nav-icon-container'>
            <BsInstagram class='nav-icons'/>
          </div>
      </div>
      </div>
    </div>
  );
};