import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";


const Main = (props: any) => {
    const [theme, colorMode] = useMode();

    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {props.children}
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}

export default Main