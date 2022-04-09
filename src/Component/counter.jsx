import "./counter.css"
import { useState } from "react"

export const Counter=()=>{
    const [counter, setCounter]=useState(1)

    const handleInc=(value)=>{
        setCounter(counter + value)
    }

    const handeledec=(value)=>{
        if(counter > 0){
        setCounter(counter - value)
        }else{
            alert("Sorry , Zero Limit Reached")
            setCounter(0)
        }
    }
    const handledouble=(value)=>{
        setCounter(counter * value)
    }

    return(
        <div className="container">
           {/* <h1 className={`${counter % 2 === 1 ? "red" : "green}`}>Counter : {counter}</h1> */}
           <h1 className={`${counter % 2 ===1 ? "red" : "green"}`}>Counter:{counter}</h1>
            <div className={"btndiv"}>
                <button onClick={()=>{
                    handleInc(1)
                }}>Increment</button>

                 <button onClick={()=>{
                   handeledec(1)
                }}>Decrement</button> 


                <button onClick={()=>{
                    handledouble(2)
                }}>Double</button>
            </div>

            <div className={"created"}>Created by : <a href="https://www.linkedin.com/in/akib-ali-1695081b8/
            "> Akib Ali @2022</a></div>
        </div>
    )
}