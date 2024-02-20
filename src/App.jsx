import { useState } from "react";
import UserRegistrationWizard from "./components/UserRegistrationWizard";
import './App.css'
function App() { 

  return (
    <div className="border-2 flex flex-col ml-6 mt-6 pl-6 pt-6 pb-6 pr-6 shadow-xl w-6/12" >
   <UserRegistrationWizard/>
   </div>
  )};
  export default App;