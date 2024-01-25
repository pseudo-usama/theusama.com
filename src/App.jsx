import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"

import Nav from './Nav'
import Home from './Pages/Home'
import Experience from "./Pages/Experience"
import Education from './Pages/Education'
import Skills from './Pages/Skills'
import PersonalProjects from './Pages/PersonalProjects'
import './app.scss'


export default function App() {
    return <>
        <BrowserRouter>
            <Nav />
            <div className="myapp">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/personal-projects" element={<PersonalProjects />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

                <hr />
            </div >
        </BrowserRouter>
    </>
}
