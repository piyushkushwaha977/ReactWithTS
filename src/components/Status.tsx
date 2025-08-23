type StatusPropsType = {
    status: "loading" | "success" | "error"
}

const Status = ( props:StatusPropsType) => {
    let Message;
    if(props.status == "loading"){
        Message = "loading"
    }
    if(props.status == "success"){
        Message = "success"
    }
    if(props.status == "error"){
        Message = "error"
    }
  return (
    <div>Status --  {Message} </div>
  )
}

export default Status