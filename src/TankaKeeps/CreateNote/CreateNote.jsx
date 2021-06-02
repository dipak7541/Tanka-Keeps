import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",

    });
    const [expand, setExpand] = useState(false)

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setNote((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    };

    const createNote = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    };
    const expandIt =()=>{
        setExpand(true)
    }
    const backToNormal =()=>{
        setExpand(false)
    }

    return (
        <div className="main_note"  onDoubleClick={backToNormal}>
            <form>
                {expand ?
                    <input
                        type="text"
                        placeholder="Title"
                        autoComplete="off"
                        value={note.title}
                        onChange={inputEvent}
                        name="title"
                        required
                    /> : null}

                <textarea
                    rows="" column=""
                    placeholder="Write a note.."
                    value={note.content}
                    onChange={inputEvent}
                    name="content"
                    required
                    onClick={expandIt}
                   >

                </textarea>
                {expand?
                <Button onClick={createNote}>
                    <AddIcon className="plus_sign" />
                </Button>:null}
            </form>
        </div>
    )
}
export default CreateNote;