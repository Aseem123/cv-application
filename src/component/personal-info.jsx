import React from 'react'
import Profile from '../profile.jpg'

function PersonalInfo() {
  return (
    <React.Fragment>
      <div className="personal_info">
        <div className="user_image">
          <img src={Profile} alt="user images" />
        </div>
        <div className="about_me">
          <h3>About me</h3>
          <p>
            Hopes and dreams were dashed that day. It should have been expected,
            but it still came as a shock. The warning signs had been ignored in
            favor of the possibility, however remote, that it could actually
            happen.
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PersonalInfo
