import React, { useState } from 'react';
import Headers from './TankaKeeps/Headers';
import Footer from './TankaKeeps/Footer/Footer';
import CreateNote from './TankaKeeps/CreateNote/CreateNote';
import Note from './TankaKeeps/Note';

const App = () => {
    const [noteList, setNotList] = useState([])
    const AddNote = (note) => {
        setNotList((preData) => {
            return [...preData, note]

        })
    };

    const onDelete = (id) => {
        setNotList((oldItems) => 
            oldItems.filter((currentData, indx) => {
                return indx != id;
            })


        )

    }
    return (
        <>
            {/* // <TodoListUpdated /> */}
            <Headers />
            <CreateNote passNote={AddNote} />
            {noteList.map((item, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={item.title}
                    content={item.content}
                    deleteitem={onDelete}
                />
            })

            }
            <Footer />
        </>
    )
};



export default App;