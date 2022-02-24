import {useState, createContext, useEffect} from "react";
import language from "../components/language";
export const languageContext = createContext();


const LanguageContextProvider = ({children}) =>{
    const [lang, setLang] = useState(language.english);
    const [selectedLanguage, setSelectedLanguage]= useState("english")

    useEffect(()=>{
        setLang(language[selectedLanguage]);
    }, [selectedLanguage]);

    return(
        <languageContext.Provider value={{lang, setSelectedLanguage}}>
            {children}
        </languageContext.Provider>
    )
}

export default LanguageContextProvider;