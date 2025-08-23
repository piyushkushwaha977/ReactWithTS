import Message from "./components/Message"
import UserInfo from "./components/UserInfo"
import NameList from "./components/NameList"


function App() {
  
  const UserDetails = {
    name:"piyush",
    address:"near indore mp",
    id: 123456,
    password:977948484
 }

 const NameListArray = [
  {
    name:"Rahul",
    password:"fdasf",
  },
   {
    name:"Rahul2",
    password:"asdfasd",
  },
   {
    name:"Rahul3",
    password:"fasdfssd",
  },
   {
    name:"Rahul4",
    password:"fasdfgsd",
  },
 ]

  return (
    <div className=" bg-gray-800 text-gray-400 w-full h-screen">
    <h2 className=' text-center text-7xl font-bold'> React With Typescript </h2>

    <div className=" text-center flex justify-between flex-col my-5">
      <Message name="Piyush" email="piyush@gmail.com" isUserVerified={true} id={12345678}/>
      <UserInfo user={UserDetails}  />
      <NameList users={NameListArray} />
    </div>
    </div>
  )
}

export default App
