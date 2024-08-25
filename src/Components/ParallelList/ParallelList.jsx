import React, { useContext } from 'react'
import { LanguageContext } from '../../App';
import ArabicParallelList from "./ArabicParallelList";
import EnglishParallelList from "./EnglishParallelList";


function ParallelList() {
 const language = useContext(LanguageContext);
 return (
   <div>
     {language === "arabic" ? <ArabicParallelList /> : <EnglishParallelList />}
   </div>
 );
}

export default ParallelList
