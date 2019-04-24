import React, {Component} from 'react';
// import './App.css';
import Product from './Product';

class App extends Component {
    render() {
        return (
            <div className="row">
                <div className="col m4">
                    <h3 className="grey-text">Tambah Data Mahasiswa</h3>
                    <div className="card">
                        <form action="#" ref="form">
                            <div className="card-content">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="Nama Mahasiswa" id="nama" type="text"/>
                                        <label htmlFor="nama">Nama</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="keterangan" placeholder="Keterangan" type="text"/>
                                        <label htmlFor="keterangan">Keterangan</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Input
                                    <i className="material-icons left">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col m8">
                    <div className="row">
                        <Product nama="Shintya" keterangan="NIM: 12784"/>
                        <Product nama="Devi" keterangan="NIM: 410857"/>
                        <Product nama="Bachan" keterangan="NIM:2000"/>
                        <Product nama="Komsi" keterangan="NIM:1234"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
