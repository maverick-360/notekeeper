import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';

const App = () => {
    const [addItem, setaddItem] = useState([]);
    const [state, setstate] = useState("");
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

    const searchFilter = (SearchTerm) => {
        setstate(SearchTerm);
    }

    return (
        <>
            <Header searchIt={searchFilter} />
            <CreateNote passNote={addNote} />
            <div className="container">
                <div className="row mb-5 g-3 justify-content-start">
                    {addItem.filter((val) => {
                        if (state.trim() === "") {
                            return val;
                        }
                        else if (val.title.toLowerCase().includes(state.toLowerCase())) {
                            return val;
                        }
                    }).map((val, index) => {
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