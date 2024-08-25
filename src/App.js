import { createContext, useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer.jsx";
import ArabicAbout from "./Components/Sections/About/ArabicAbout";
import { BrowserRouter } from "react-router-dom";
import Sections from "./Components/Sections/Sections.jsx";

export const LanguageContext = createContext(null)
export const setLanguageContext = createContext(null)

function App() {
  const [language, setLanguage] = useState('arabic')
  return (
    <LanguageContext.Provider value={language}>
      <setLanguageContext.Provider value={setLanguage}>
        <BrowserRouter>
          <Header />
          <Sections />
          <Footer />
        </BrowserRouter>
      </setLanguageContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
