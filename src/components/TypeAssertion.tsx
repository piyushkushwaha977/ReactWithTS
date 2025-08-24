import { useState } from "react"

const TypeAssertion = () => {
 type TypeAssertionProps = {
        name:string 
        email:string 
    }

    const [ authUser, setAuthUser] = useState<TypeAssertionProps>({} as TypeAssertionProps)

    function handleUserAuthentication(){
        setAuthUser({
           name:"Piyush",
           email:"PIyush@gmail.com"
        })
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
        </div>
    </div>

    </div>
  )
}

export default TypeAssertion