import React from 'react'
import { ButtonLand } from '../button/Button'
import './HeaderLand.css'
import { TextHead } from './TextHead'

export const HeaderLand = () => {
  return (
    <div className="header grid grid-cols-3 h-32">
        <div><TextHead /></div>
      <div className="menu text-3xl grid-cols-2">
        Main
        <hr className="bottom-line w-11 h-px" />
      <div className="functionality text-3xl">Functionality</div>
      </div>
      <div> <ButtonLand /></div>
    </div>
  )
}
