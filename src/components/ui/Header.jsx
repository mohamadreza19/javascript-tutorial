import {AppBar, Toolbar, Button,useScrollTrigger} from '@mui/material'
import {cloneElement} from 'react'

const Header = () =>{




    function ElevationScroll(props) {
        const { children, } = props;

        const trigger = useScrollTrigger({
            disableHysteresis: true, //
            threshold: 30, // when triger happen

        });

        return cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

   return (
       <>
           <ElevationScroll>
               <AppBar >
                   <Toolbar>
                       <Button variant="contained" color="success">دکمه</Button>
                   </Toolbar>
               </AppBar>
           </ElevationScroll>
       </>
   )
}
export default Header