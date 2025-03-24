import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddNote = () => {
    const [judul, setJudul] = useState("");
    const [deadline, setDeadline] = useState("");
    const [matakuliah, setMatakuliah] = useState("");
    const [isi, setIsi] = useState("");
    const navigate = useNavigate();

    const saveNote = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://tcc5-backend-21569344527.us-central1.run.app/notes', {
                judul,
                deadline,
                matakuliah,
                isi
            });
            navigate("/");
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveNote}>
                    {/* Input Judul */}
                    <div className="field">
                        <label className="label">Judul</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input"
                                value={judul}
                                onChange={(e) => setJudul(e.target.value)}
                                placeholder="Masukkan Judul"
                                required
                            />
                        </div>
                    </div>

                    {/* Input Deadline */}
                    <div className="field">
                        <label className="label">Deadline</label>
                        <div className="control">
                            <input 
                                type="date" 
                                className="input"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                                
                            />
                        </div>
                    </div>

                    {/* Input Matakuliah */}
                    <div className="field">
                        <label className="label">Mata Kuliah</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input"
                                value={matakuliah}
                                onChange={(e) => setMatakuliah(e.target.value)}
                                placeholder="Masukkan Mata Kuliah"
                                required
                            />
                        </div>
                    </div>

                    {/* Input Isi Catatan */}
                    <div className="field">
                        <label className="label">Isi Catatan</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                value={isi}
                                onChange={(e) => setIsi(e.target.value)}
                                placeholder="Masukkan Isi Catatan"
                                required
                            />
                        </div>
                    </div>

                    {/* Tombol Save */}
                    <div className="field">
                        <button type="submit" className="button is-success">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNote;
