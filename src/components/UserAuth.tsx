import { useState } from "react"
import NormalCompo from "./NormalCompo"


const UserAuth = () => {

    type UserAuthProps = {
        name:string 
        email:string 
    }

    const [ authUser, setAuthUser] = useState< null | UserAuthProps >(null)

    function handleUserAuthentication(){
        setAuthUser({
           name:"Piyush",
           email:"PIyush@gmail.com"
        })
    }

    function handleUserLogout(){
        setAuthUser(null)
    }
  return (
    <div className=" bg-gray-800 text-gray-400 w-full h-screen flex flex-col gap-12 ">

     <div className=" "> 

            <h2>User INFO</h2>

        <div>
            <h2>{authUser?.email}</h2>
            <h2>{authUser?.name}</h2>
        </div>

        <div className=" flex gap-4 ">
            <button onClick={handleUserAuthentication}>Set User</button>
            <button onClick={handleUserLogout} > Logout </button>
        </div>
    </div>

        <div>
            <NormalCompo/>
        </div>


    </div>
  )
}

export default UserAuth