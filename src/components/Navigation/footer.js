import React from 'react';
import "../../App.css"
import logo from './logo.jpg'
export default function(){
	return(
		<div class="footer">
		<div class="footerLinks">
        <ul>
		<li><img src={logo} alt="Logo" style={{width:50,margin:10}}/></li>
          <li><a href="#">Privacy Policy</a>
          </li>
          <li><a href="#">Legal</a>
          </li>
          <li><a href="#">Site Map</a>
          </li>
          <li><a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        {/* <p>Copyright © 2020</p> */}
      </div>
	   </div>
	)
}