import { useState } from 'react'

const NormalCompo = () => {

 
const [ authUser, setAuthUser] = useState(false)
 
  function handleAuth(){
    setAuthUser(!authUser)
  }
   return (
     <div>
 
         <div> User INFO</div>
 
         <div>
             { authUser && <div> User is Authenticated</div>}
         </div>
 
         <div className=" flex gap-4 ">
             <button onClick={handleAuth}>Login</button>
             <button onClick={handleAuth} > Logout </button>
         </div>
 
 
     </div>
   )
}

export default NormalCompo