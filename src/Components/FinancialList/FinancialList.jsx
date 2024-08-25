import React, { useContext } from 'react'
import { LanguageContext } from '../../App';
import ArabicFinancialList from "./ArabicFinancialList";
import EnglishFinancialList from "./EnglishFinancialList";

function FinancialList() {
 const language = useContext(LanguageContext);
 return (
   <div>
     {language === "arabic" ? (
       <ArabicFinancialList />
     ) : (
       <EnglishFinancialList />
     )}
   </div>
 );
}

export default FinancialList
