import { Button } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import React, { useState } from 'react';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const handleInput = (e) => {
        const { value, name } = e.target;
        setNote({ ...note, [name]: value });
        
    };
    const addEvent = () =>{
        if(note.title && note.content){
            props.addNote(note)
         }else{
            alert("fill this box first");
        }
        
        setNote({
            title: '',
            content: '',
        })

    }
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-3" />
                <div className="col-md-6">
                    <form className="create-note">
                        <input
                            className="form-control me-2"
                            type="text"
                            name="title"
                            id=""
                            value={note.title}
                            onChange={handleInput}
                            placeholder="Title"
                            autoComplete="off"
                        />{' '}
                        <br />
                        <textarea
                            className="form-control me-2"
                            name="content"
                            id=""
                            cols=""
                            rows=""
                            value={note.content}
                            onChange={handleInput}
                            placeholder="Write a note"
                        />
                        <br />
                        <Button className="add-btn" onClick={addEvent}>
                            <AddCircleOutlineRoundedIcon className="add-icon" />
                        </Button>
                    </form>
                </div>
                <div className="col-md-6" />
            </div>
        </div>
    );
};

export default CreateNote;
