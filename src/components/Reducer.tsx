import { useReducer } from "react"

const initialState = {count:0}

type ReducerState = {
    count:number 
}

type UpdateAction = {
    type:"increment" | "decrement" 
    payload:number 
}

type ResetAction = {
    type:"reset"
}

type ReducerAction = UpdateAction | ResetAction

// type ReducerAction = {
//     type:string 
//     payload:number 
// }

function reducer(state:ReducerState, action:ReducerAction){
    switch(action.type){
        case("increment"):
          return {count: state.count + action.payload}
        case("decrement"):
          return {count:state.count - action.payload}
        case("reset"):
          return initialState
        default:
            return state;
    }
}

const Reducer = () => {


    const [ state, dispatch ] = useReducer(reducer , initialState)

  return (
    <div className=" w-full h-screen  bg-gray-900 text-blue-200 flex  items-center justify-center text-4xl ">

        <div className=" flex-col">
          <h2 className=" text-center py-8">Reducer</h2>
          <div className=" text-red-800 font-bold">Current State : {state.count}</div>
        </div>
        <div>
        <button onClick={ () => dispatch({type:"increment", payload:10})} className=" border-2 border-blue-700 rounded-lg p-2 "
            >Count +10</button>
        <button onClick={ () => dispatch({type:"decrement", payload:10})} className=" border-2 border-blue-700 rounded-lg p-2 "
            >Count -10</button>
        <button onClick={ () => dispatch({type:"reset"})}>Reset</button>
        </div>
    </div>
  )
}

export default Reducer