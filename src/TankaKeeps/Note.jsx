import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';





const Note = (props) => {

    const deleteItems=()=>{
        props.deleteitem(props.id)
    }
    return (
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p style={{display:"block"}}>{props.content}</p>
                <br/>
                <Button onClick={deleteItems}> 
                    <DeleteOutlineIcon className="deleteicon" />
                </Button>

            </div>
    )
}
export default Note;
