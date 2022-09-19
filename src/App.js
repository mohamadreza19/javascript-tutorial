import {ThemeProvider, createTheme,responsiveFontSizes} from '@mui/material/styles'
 //TRL
import {CacheProvider} from '@emotion/react'
import createCache from "@emotion/cache"
import rtlPlug from "stylis-plugin-rtl"
import {prefixer} from 'stylis'

//material
import {
    Button,
} from '@mui/material'

//NOTE cacheTRL
const cacheRTL = createCache({
    key:"muirtl",
    stylisPlugins : [prefixer, rtlPlug]
})

const myTheme = createTheme({
    direction : "rtl",
    typography: {
        fontFamily: "Dirooz, vazir",
    }
})


const App =()=>{



    return(
    < CacheProvider value={cacheRTL}>
        <ThemeProvider theme={myTheme}>
        <Button variant="contained"
                seze='large'

        >
            دکمه
        </Button>
        </ThemeProvider>
    </CacheProvider>
    )
}



export default App