import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Welcome } from "./pages/Welcome";

export const App = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prev => prev + 1);
    };
    const handleDecrement = () => {
        setCount(prev => prev - 1);
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1>value = {count}</h1>
                <button onClick={handleIncrement}>inc</button>
                <button onClick={handleDecrement}>dec</button>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
                <Link to={'about'}>About</Link>
                <Link to={'welcome'}>Welcome</Link>
            </div>

            <div>
                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/welcome' element={<Welcome />} />
                </Routes>
            </div>
        </>
    );
};
