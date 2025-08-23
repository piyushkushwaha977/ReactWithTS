import React from 'react'

type InputProps = {
    styles?: React.CSSProperties
    value?:string
    changeInput : ( event:React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props:InputProps) => {
    console.log(props)
  return (
    <div style={props.styles}>
        <label >Input </label>
        <input className=' border-black border-2 rounded-md' value={props.value} onChange={props.changeInput}/>
    </div>
  )
}

export default Input