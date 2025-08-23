type NameListProps = {
    users: {
        name:string 
        password:string 
    }[]
}

const NameList = (props:NameListProps) => {
  return (
    <div className=" mt-10">
        <div>NameList</div>

        <ul>
            {
                props.users.map(user => (
                    <li key={user.name}> {user.name} and {user.password}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default NameList