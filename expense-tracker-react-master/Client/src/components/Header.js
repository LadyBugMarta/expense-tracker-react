import React from 'react'

export const Header = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = './login';
  };
  return (
    <>
      <h2>
        Expense Tracker
      </h2>
      <button class="btn" onClick={logout}>
        Wyloguj
      </button>
    </>
  )
}
