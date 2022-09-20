import React from "react";
import ReactDom from 'react-dom/client'

import App from "./App";

import {ErrorBoundary} from 'react-error-boundary'

const ErrorFallback = ({error, resetErrorBoundary}) =>{
    return (
        <div>
            <p>مشکل وجدود داره اوس</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>سعی مجدد</button>
        </div>
    )
}

const root =ReactDom.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>

            <App/>


    </React.StrictMode>
)