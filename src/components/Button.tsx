import React from 'react'

type ButtonProps = {
    styles: React.CSSProperties
  handleClick:(event:React.MouseEvent<HTMLButtonElement>, id:number) => void
}

const Button = (props:ButtonProps) => {
  return (
    <div >
        <button onClick={ (event)  => props.handleClick(event, 6)}  
            style={props.styles}
            >Button</button>
    </div>
  )
}

export default Button