import React, { useState, useEffect } from 'react';
import "../Profile/Profile.css";

function Profile() {


  return (
  
        <div className="wrapper">
          <div className="left">
          <img src="img/rachelgreen.jpg" />
            <h1>Rachel Green</h1>
          </div>
          <div className="right">
            <div className="info">
              <h3>Profile</h3>
              <div className="info_data">
                <div className="data">
                  <h4>Email</h4>
                  <p>test2@test.com</p>
                </div>
                <div className="data">
                  <h4>Phone</h4>
                  <p>000-123-4567</p>
                </div>
              </div>
            </div>
            <div className="projects">
              <h3>Trending Political Topics</h3>
              <div className="projects_data">
                <div className="data">
                  <h4>Recent</h4>
                  <p>2021 Inaguration</p>
                </div>
                <div className="data">
                  <h4>Most Viewed</h4>
                  <p>Kamala Harris VP Oath</p>
                </div>
              </div>
            </div>
            <div className="projects">
              <h3>Bio</h3>
              <div className="projects_data">
                <div className="data">
                  <p>Text</p>
                </div>
                <div className="data">
                  <p />
                </div>
              </div>
            </div>
            <div className="social_media">
              <ul>
                <li><a href="https://www.facebook.com/"><i className="fa fa-facebook-f" /></a></li>
                <li><a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://www.instagram.com/?hl=en#"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
            <div className="buttons">
              <div className="action_btn">
                <button name="submit" className="action_btn edit" type="submit" value="Edit" onclick="myFunction()">Edit</button>
                
                <a href="https://video-and-chat-application.herokuapp.com/940d670a-8e9c-4bb1-ac8a-515ff21d9467">
                <button name="submit" className="action_btn debate"  onclick="myFunction2()">Debate Now</button>
                </a>
                
              </div>
             </div> 
          </div> 
         </div> 
      );
    }
 
  export default Profile;