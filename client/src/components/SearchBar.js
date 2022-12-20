import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchSuggestions() {
      const data = await fetch(`https://api.example.com/suggestions?q=${query}`);
      const suggestions = await data.json();
      setSuggestions(suggestions);
    }
    if (query.length > 2) {
      fetchSuggestions();
    }
  }, [query]);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search?q=${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map(suggestion => (
            <li key={suggestion.id}>
              <NavLink to={`/search?q=${suggestion.title}`}>
                {suggestion.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <button type="submit">Search</button>
    </form>
  );
}