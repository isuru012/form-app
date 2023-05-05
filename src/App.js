
import './App.css';
import Form from "./pages/form/Form";
import React from "react";
import { Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Form/>}/>

      </Routes>
    </div>
  );
}

export default App;
