import React from 'react'
import PersonalInfo from './personal-info'
import SummeryAndSkill from './skills'
import '../style/index.css'

function App() {
  return (
    <React.Fragment>
      <div className="middle">
        <div className="personal_section">
          <PersonalInfo />
          <SummeryAndSkill />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
