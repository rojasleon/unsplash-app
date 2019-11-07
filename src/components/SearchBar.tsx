import React, { useState } from 'react';
import './SearchBar.css';

export const SearchBar = ({ onSubmit }: any): JSX.Element => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(term);
  };

  const onInutChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTerm(e.currentTarget.value);
  };

  return (
    <form className="search-bar form" onSubmit={onFormSubmit}>
      <input
        className="search-bar input"
        type="text"
        placeholder="Search Unsplash"
        onChange={onInutChange}
      />
    </form>
  );
};
