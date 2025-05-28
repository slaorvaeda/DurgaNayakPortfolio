import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_icon ">
          <li><a href="https://github.com/slaorvaeda"><ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href="https://x.com/KanhuNayak980"><ion-icon name="logo-twitter"></ion-icon></a></li>
          <li><a href="https://www.linkedin.com/in/india-durganayak/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a href="https://www.instagram.com/priyanshu.ind/"><ion-icon name="logo-instagram"></ion-icon> </a></li>
        </ul>
        <div className="logo "><dir></dir>dURGA</div>
      </footer>
    </>
  )
}

export default Footer