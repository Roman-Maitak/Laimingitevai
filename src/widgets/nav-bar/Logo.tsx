import React from 'react'
import { logo } from '../../assets'

const Logo = () => {
  return (
    <a className="w-[124px] h-[32px] flex items-center">
    <img
      src={logo}
      alt="Laimingitevai Logo"
      className="mr-3 h-6 sm:h-9"
    />
  </a>
  )
}

export default Logo