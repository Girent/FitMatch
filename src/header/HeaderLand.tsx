import React from 'react'
import { ButtonLand } from '../button/Button'
import './HeaderLand.css'
import { TextHead } from './TextHead'

export const HeaderLand = () => {
  return (
    <div className="header grid grid-cols-4">
      <TextHead />
      <div className="menu">
        Main
        <hr className="bottom-line" />
      </div>
      <div className="functionality">Functionality</div>
      <ButtonLand />
    </div>
  )
}
