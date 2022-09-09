import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Upload } from './components/Upload/Upload'

export default function RouteComponent() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={< Home />}></Route>
                <Route path='/upload' element={< Upload />}></Route>
            </Routes>
        </Router>
    );
}