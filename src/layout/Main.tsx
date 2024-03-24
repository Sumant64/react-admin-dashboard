import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import { BrowserRouter } from "react-router-dom";


const Main = (props: any) => {
    const [theme, colorMode] = useMode();

    return (
        <>
            <BrowserRouter>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        {props.children}
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default Main