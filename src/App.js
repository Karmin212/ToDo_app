import React from 'react';
import './App.css';
import Footer from "./components/Footer.js";
import ToDo from "./components/ToDo";

const App = () => {
    return(
    <div>
        <ToDo />
        <Footer />
    </div>
    )
}
       
export default App;
