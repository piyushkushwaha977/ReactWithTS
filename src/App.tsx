import Message from "./components/Message"
import UserInfo from "./components/UserInfo"
import NameList from "./components/NameList"
import Status from "./components/Status"
import PropsCompo from "./components/PropsCompo"
import Button from "./components/Button"
import Input from "./components/Input"


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

      <div className=" mt-12 text-4xl text-center ">
        <Status status="success"/>

        <PropsCompo children={<Message name="Piyush" email="piyush@gmail.com" isUserVerified={true} id={12345678} />}> 
           {/* <UserInfo user={UserDetails}/> */}
        </PropsCompo>
      </div>
    </div>

    {/* REACT Events with ts  */}
     <div className=" mt-10 text-center text-4xl flex flex-col gap-6">
      <Button styles={{ border: "2px solid red" , padding:"1rem" , borderRadius:"1rem" }}
       handleClick={ (event,id=6) => console.log("button Clicked" , event ,id)}/>

        <Input  changeInput={ event => console.log(event.target.value)}
        // styles={{border:" 2px solid black" ,padding: "1rem ",}}
        />
     </div>

     

    </div>
  )
}

export default App
