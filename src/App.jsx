import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App(){
    return <div> 
                <Header />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Footer />
            </div>;
}


export default App;