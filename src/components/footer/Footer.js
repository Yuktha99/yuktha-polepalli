import React from 'react'
import './footer.css'
import CopyRightIcon from '../../images/copyright.png'
import EnthusiasmIcon from '../../images/enthusiasm.png'
import JoyIcon from '../../images/party.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='left'>
        <div>Copyright</div>
        <img src={CopyRightIcon} alt='copyright' className='copyright-icon'/>
        <div>2024 | by Yuktha Polepalli</div>
      </div>
      <div className='right'>
        <div>Made with enthusiasm,</div> 
        <img src={EnthusiasmIcon} alt='enthusiasm'/>
        <div>a few sleepless nights,</div>
        <div> and an endless supply of JavaScript.</div>
        <img src={JoyIcon} alt='joy'/>
      </div>

    </div>
  )
}

export default Footer