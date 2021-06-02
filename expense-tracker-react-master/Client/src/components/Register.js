import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const Register = () => {
    if (localStorage.getItem('token')) {
        window.location.href = './';
    }

    const { register, error } = useContext(GlobalContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        register({username, password, password_confirmation});
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Zarejestruj</h3>

            <div>
                <label>Username</label>
                <input name="username" required type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />            </div>

            <div>
                <label>Hasło</label>
                <input name="password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" />
            </div>

            <div>
                <label>Powtórz hasło</label>
                <input name="password_confirmation" required type="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Powtórz Hasło" />
            </div>
            {error ? <p>Błąd podczas rejestracji</p> : <></>}
            <div className="space"><Link to={"/login"}>Zaloguj</Link></div>
            <button type="submit" className="btn">Zarejestruj</button>
        </form>
    );
}