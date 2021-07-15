import React from 'react'
import '../style/skill.css'
import { IoLocationSharp } from 'react-icons/io5'
import { GiWireframeGlobe } from 'react-icons/gi'
import { FaPhoneAlt } from 'react-icons/fa'

function SummeryAndSkill() {
  return (
    <React.Fragment>
      <div className="contact_follow_reference">
        <div className="contact">
          <h3>contact</h3>
          <ul>
            <li>
              <IoLocationSharp className="icon" />
              <div>
                <p>Sainamain-6,colony,Rupandehi,Nepal</p>
              </div>
            </li>
            <li>
              <FaPhoneAlt className='icon'/>
              <div>
                <p>+977 9812990880</p>
              </div>
            </li>
            <li>
              <GiWireframeGlobe className="icon" />
              <div>
                <p>donotdo102@gmail.com</p>
                <p>https://aseem123.github.io/portfolio</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="follow">
          <h2>Skills</h2>
          <ol>
            <li>Here goes the first skills</li>
            <li>Here goes the second skills</li>
            <li>Here goes the third skills</li>
            <li>Here goes the fourth skills</li>
            <li>Here goes the fifth skills</li>
          </ol>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SummeryAndSkill
