import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';

export const Login = () => {
    if (localStorage.getItem('token')) {
        window.location.href = './';
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useContext(GlobalContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        login({username, password});
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Zaloguj</h3>

            <div>
                <label>Username</label>
                <input name="username" required type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </div>

            <div>
                <label>Hasło</label>
                <input name="password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" />
            </div>
            {error ? <p>Błąd podczas logowania</p> : <></>}
            <div className="space"><Link to={"/register"}>Zarejestruj</Link></div>
            <button type="submit" className="btn">Zaloguj</button>
        </form>
    );
}