import { createTheme } from '@mui/material/styles'
import {purple} from "@mui/material/colors";

export  const myTheme = createTheme({
    direction : "rtl",
    typography: {
        fontFamily: "Dirooz, vazir",

    },
    components: {
        MuiToolbar : {
            styleOverrides:{
                root: {
                    margin: "0px"
                }
            }
        }
    },
    palette: {
        mode:"light",
        primary: {
            main:purple[700]
        }
    }

})
