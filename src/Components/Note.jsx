import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import React from 'react';

const Note = ({title,content,deleteItem,id}) =>{
    const deleteBtn = () =>{
        deleteItem(id);
        
    }

    return (<div className="note">
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="btn" type="button" onClick = {deleteBtn}>
            <DeleteForeverRoundedIcon />
        </button>
    </div>
)};

export default Note;
