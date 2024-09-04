import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import store from './Redux/store';
import { Provider } from 'react-redux';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoteForm from "./components/NoteForm";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import SigninModal from "./components/SigninModal";
import AlertState from "./context/notes/AlertState";
import AlertWrapper from "./components/AlertWrapper";
import NoteState from "../src/context/notes/NoteState";
import AuthState from "../src/context/notes/AuthState";
import DarkModeToggle from "./components/DarkModeToggle";
import NoteTestimonial from "./components/NoteTestimonial";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

    return (
        <Provider store={store}>
            <Router>
                <AlertState>
                    <AuthState>
                        <NoteState>
                            <Navbar/>
                            <DarkModeToggle/>
                            <AlertWrapper/>
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route exact path="/about" element={<About />} />
                                <Route exact path="/notetestimonial" element={<NoteTestimonial />} />
                                <Route exact path="/signup" element={<SignupForm />} />
                                <Route exact path="/signin" element={<SigninForm />} />
                                <Route exact path="/noteform" element={<NoteForm />} />
                                <Route exact path="/signinmodal" element={<SigninModal />} />
                            </Routes>
                            <Footer />
                        </NoteState>
                    </AuthState>
                </AlertState>
            </Router>
        </Provider>
    );
}

export default App;
