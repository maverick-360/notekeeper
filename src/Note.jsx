import React from 'react';
import DeleteOutLineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return (

        <div className="col-lg-3 col-md-4 col-6">
            <div className="note shadow p-2 rounded-3">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button className="btn shadow-sm" onClick={deleteNote}>
                    <DeleteOutLineIcon className="deleteIcon" />
                </button>
            </div>
        </div>
    )
}

export default Note;
