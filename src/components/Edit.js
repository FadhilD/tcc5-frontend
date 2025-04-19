import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [judul, setJudul] = useState("");
    const [deadline, setDeadline] = useState("");
    const [matakuliah, setMatakuliah] = useState("");
    const [isi, setIsi] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getById();
    }, []);

    const Update = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`https://notes-be-fadhil-21569344527.us-central1.run.app/notes/${id}`, {
                judul,
                deadline,
                matakuliah,
                isi
            });
            navigate("/");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    const getById = async () => {
        try {
            const response = await axios.get(`https://notes-be-fadhil-21569344527.us-central1.run.app/notes/${id}`);
            setJudul(response.data.judul);
            setDeadline(response.data.deadline);
            setMatakuliah(response.data.matakuliah);
            setIsi(response.data.isi);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={Update}>
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

                    {/* Input Isi */}
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

                    {/* Tombol Update */}
                    <div className="field">
                        <button type="submit" className="button is-success">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;
