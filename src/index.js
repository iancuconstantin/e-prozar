import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App.jsx";
import LanguageContextProvider from './context/languageContext';


render(
    <LanguageContextProvider>
        <App />    
    </LanguageContextProvider>
,document.getElementById("root"));
