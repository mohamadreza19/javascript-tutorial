// import names from "./names";
import {useState} from "react";


const App =()=>{
    const [names, setName] = useState(null)
    const onLoad = () =>{
        import("./names")
        .then( ({names} )=>{
        setName(names)
        })
    }

    return(
       <div className='text-center'>
           <h1>app</h1>
           <button
               onClick={onLoad}
           >click</button>
           <hr/>
           {JSON.stringify(names)}

       </div>
    )
}



export default App