import LangButton from './components/LangButton'
import Navbar from "./components/Navbar";
import { useContext } from 'react';
import "../node_modules/flag-icon-css/css/flag-icons.min.css";
import {Route, Switch, HashRouter} from "react-router-dom";
import Category from "./components/Category";
import Promotions from "./components/Promotions";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/App.css";
import { languageContext } from './context/languageContext';

const App = () => {
    const date = new Date();
    const customDate = date.toLocaleString('default',{day : "numeric", month: 'long',year: "numeric" })
    const language = useContext(languageContext);

    return (
        <>
            <HashRouter>
                <Navbar
                selectedLang={language}
                />
                <div style={{ display: 'flex' , justifyContent: 'flex-end'}}>
                    <LangButton
                    language={language}
                    />
                </div>
                
                <h5>{customDate}</h5>
                
                <Switch>
                    <Route path="/category/:categoryId">
                        <Category
                        selectedLang={language}
                        />
                    </Route>
                    <Route path="/">
                        <Promotions
                        customDate={customDate}
                        />
                    </Route>
                </Switch>
            </HashRouter>

            <footer>
                <p>{language.lang.footerHeader}</p>
                <p>{language.lang.footerDisclaimer}</p>
            </footer>
        </>
    );
};

export default App;