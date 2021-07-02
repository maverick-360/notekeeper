import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';

const App = () => {
    const [addItem, setaddItem] = useState([]);
    const addNote = (note) => {
        setaddItem((prevData) => {
            return [...prevData, note];
        });
    }

    const onDelete = (id) => {
        setaddItem((oldItems) => {
            return oldItems.filter((currVal, indx) => {
                return indx !== id;
            })
        })
    }

    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />
            <div className="container">
                <div className="row g-3">
                    {addItem.map((val, index) => {
                        return <Note
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            deleteItem={onDelete}
                        />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App;
