import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes"
function App(){
    return (
            <div> 
                <Header />
                <div id="list">
                {notes.map(note => {
                    return(
                        <Note 
                            key={note.key}
                            title={note.title}
                            content={note.content}
                        />
                    )
                })}
                </div>
             <Footer />
            </div>);
}
export default App;