import React from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Footer from './components/Footer/Footer';
import Left from './components/Left/Left';

const App = () => {
    return(
    <div className='app-wrapper'>
        <Left />
        <Editor />
        <Footer />
    </div>
    )
}
       
export default App;
