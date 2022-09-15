import {Helmet,HelmetProvider} from 'react-helmet-async'
import {useState} from "react";
import { FcCheckmark } from "react-icons/fc";


const App =()=>{
    const [names, setName] = useState(null)


    return(
       <HelmetProvider>
           <Helmet>
               <title>دوره جامع ریکت  </title>
           </Helmet>
           <div className='text-center'>
               <h1>app</h1>
               < FcCheckmark/>
           </div>
       </HelmetProvider>
    )
}



export default App