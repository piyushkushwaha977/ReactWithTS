type MessageProps = {
    id:number
    name:string
    email:string
    isUserVerified:boolean
}

const Message = (props:MessageProps) => {
  return (
    <div>
        <div>Hii My Name is {props.name} & Have a look at MY Email -- {props.email} </div>
        <div>Well the User ID is { props.id} and  user is {props.isUserVerified ? "True" : "false"}</div>
    </div>
  )
}

export default Message