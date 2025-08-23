type UserInfoProps = {
 user:{
    name:string 
    address:string 
    id:number 
    password:number 
 }
}

const UserInfo = (props:UserInfoProps) => {

    const {address,id,name,password} =  props.user

  return (
    <div className=" mt-8 ">
        <h2>User Information</h2>
        <div>
            <h2>{name}</h2>
            <h3>{address}</h3>
            <h3> Password -- { password } and ID -- {id}</h3>
        </div>
    </div>
  )
}

export default UserInfo