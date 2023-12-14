import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5001";
    const notesinitial = [];
    const [notes, setNotes] = useState(notesinitial);
    // 
    // get all notes

    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetch`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
                
            }
        });
        const note =  await response.json();
        setNotes(note);
        console.log(note);
    };
    // Add note
    
    const addnote = async (checkInDate, checkOutDate, noOfAdults, noOfChildren, noOfRooms, totalPrice, name, bookingReference) => {
        // API Call
        const response = await fetch("http://localhost:5000/api/notes/add", {
            // eslint-disable-next-line
            method: "POST",

            headers: {
                "Content-Type": "application/json",
               
            },

            body: JSON.stringify({ checkInDate, checkOutDate, noOfAdults, noOfChildren, noOfRooms, totalPrice, name, bookingReference}),
        });
        const note = response.json();
        setNotes(notes.concat(note));
        console.log(note);
    };

    // delete note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/delete/${id}`, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    localStorage.getItem("token"),
            },
        });
        const json = response.json();
        console.log(json);
        //
        console.log("deleted id" + id);
        const newNote = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNote);
    };
    // edit note
    const editnote = async (id, heading, content, author, date) => {
        // Api call
        // console.log(title);
        const response = await fetch(`${host}/api/notes/update/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    localStorage.getItem("token"),
            },

            body: JSON.stringify({ heading, content, author, date }),
        });
        const json = response.json();
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes));
        // logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].heading = heading;
                newNotes[index].content = content;
                newNotes[index].author = author;
                break;
            }
        }
        setNotes(newNotes);
    };
    return (
        <noteContext.Provider
            value={{ notes, addnote, editnote, deleteNote, getNotes }}
        >
            {props.children}
        </noteContext.Provider>
    );
};

export default NoteState;
