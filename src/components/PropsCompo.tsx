
type PropsCompo = {
    children: React.ReactNode
}

const PropsCompo = (props:PropsCompo) => {
  return (
    <div className=" mt-10">
        <div>PropsCompo with children inside</div>
        <div>{props.children}</div>
    </div>
  )
}

export default PropsCompo