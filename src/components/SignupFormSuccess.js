import React from 'react';
import "../App.css";


const SignupFormSuccess = () => {
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>The Artt Lobby</title>
      <link
      rel="stylesheet"
      href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
    />
    </head>
    <body>
      <div class="header">
        <div class="header-item"><></></div>
        <div class="header-item header-item__about">
        </div>
      </div>
      <div class="content">
        <h1><i>WELCOME TO THE ARTT LOBBY</i></h1>
        <a href="#image" class="cta">
          <span>Know now</span>
          <svg width="13px" height="15px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
      <div class="image-container" id="image">
        <img src="https://i.postimg.cc/Yqs29PP3/IMG20210529231950.jpg" alt="ishika"></img>
        <img src="https://i.postimg.cc/dt22888g/IMG-20200812-234534.jpg" alt="ishika"></img>
        <img src="https://i.postimg.cc/v8WgjGcV/IMG-20200818-225457.jpg" alt="ishika"></img>
        <img src="https://i.postimg.cc/brKqrcB2/IMG-20200821-135528.jpg" alt="ishika"></img>
      </div>
      <footer>
      <div class="row">
        <div class="col span-1-of-2">
          <ul class="footer-nav">
            <li><a href="#">About us</a></li>
          </ul>
        </div>
        <div class="col span-1-of-2">
          <ul class="social-links">
            <li>
              <a href="#"><i class="ion-social-github"></i></a>
            </li>
            <li>
              <a href="#"><i class="ion-social-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="ion-social-snapchat"></i></a>
            </li>
            <li>
              <a href="#"><i class="ion-social-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </body>
  </html>
  )
};

export default SignupFormSuccess;
