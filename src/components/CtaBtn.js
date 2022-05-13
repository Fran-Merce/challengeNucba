import React from 'react'

export const CtaBtn = ({text,className}) => {
  return (
    <div className={className}>
      <a href='/'>{text}</a>
    </div>
  )
}
