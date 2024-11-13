/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function ThemeToggle({ onToggle, theme }){
  return (
    <button className="button button--primary" onClick={onToggle}>
      Zmień na {theme === 'light' ? 'ciemny' : 'jasny'} motyw
    </button>
  );
};
