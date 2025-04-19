import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        try {
            const response = await axios.get('https://tcc5-backend-21569344527.us-central1.run.app/notes');
            setNotes(response.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    const deleteNote = async (id) => {
        try {
            await axios.delete(`https://tcc5-backend-21569344527.us-central1.run.app/notes/${id}`);
            getNotes();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="columns is-mobile is-vcentered mb-5">
                <div className="column">
                    <h1 className="title">Catatan Semester 6</h1>
                </div>
                <div className="column has-text-right">
                    <Link to={`add`} className="button is-primary">Add New</Link>
                </div>
            </div>
            
            <div className="columns is-multiline">
                {notes.map((note) => (
                    <div key={note.id} className="column is-one-third">
                        <div className="box has-background-white-bis has-shadow">
                            {/* Bagian Header (Judul dan Deadline) */}
                            <div className="is-flex is-justify-content-space-between is-align-items-center border-bottom pb-3 mb-3">
                                <h2 className="subtitle has-text-weight-semibold">{note.judul}</h2>
                                <span className="has-text-grey">
                                    Deadline: {note.deadline ? new Date(note.deadline).toLocaleDateString() : "-"}
                                </span>
                            </div>

                            {/* Isi Catatan */}
                            <p className="has-text-grey-dark mb-3">{note.isi}</p>

                            {/* Bagian Footer (Matakuliah & Tanggal Dibuat) */}
                            <div className="is-flex is-justify-content-space-between is-align-items-center border-top pt-3 has-text-grey">
                                <span>{note.matakuliah}</span>
                                <span>{note.createdAt ? new Date(note.createdAt).toLocaleDateString() : "Tidak diketahui"}</span>
                            </div>

                            {/* Tombol Edit & Delete */}
                            <div className="is-flex is-justify-content-flex-end border-top pt-3 mt-3">
                                <Link to={`edit/${note.id}`} className="button is-small is-info mr-2">Edit</Link>
                                <button onClick={() => deleteNote(note.id)} className="button is-small is-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoteList;
