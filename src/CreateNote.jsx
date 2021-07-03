import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [expand, setexpand] = useState(false);
    const [note, setnote] = useState({
        title: "",
        content: ""
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setnote((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        })
    };

    const addEvent = () => {
        if (note.content || note.title) {
            props.passNote(note);
        }
        setnote({
            title: "",
            content: ""
        });
    }

    const expandIt = () => {
        setexpand(true);
    }

    const b2normal = () => {
        setexpand(false);
    }

    return (
        <div className="row m-5 justify-content-center">
            <div className="col-lg-10 col-md-10 col-10 main_note">
                <form onDoubleClick={b2normal} className="px-3 py-4 position-relative frm">

                    <input
                        className="border-top-0 border-end-0 border-start-0 border-warning fw-bold text-body inpt"
                        type="text"
                        name="title"
                        value={note.title}
                        onChange={inputEvent}
                        placeholder="Title"
                        autoComplete="off"
                        onClick={expandIt} />
                    {expand ?
                        <>
                            <textarea
                                className="mt-3 border-top-0 border-end-0 border-start-0 border-warning"
                                rows="" column=""
                                name="content"
                                value={note.content}
                                onChange={inputEvent}
                                placeholder="Write a Note...">
                            </textarea>
                            <Button onClick={addEvent}>
                                <AddIcon />
                            </Button>
                        </>
                        : null}
                </form>
            </div>
        </div>
    )
}

export default CreateNote;