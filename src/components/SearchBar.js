import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

  const onInputChange = e => {
    setTerm(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    onFormSubmit(term);
  };
    return (
      <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label htmlFor="videos">Video Search </label>
            <input
              id="videos"
              type="text"
              value={term}
              onChange={(e) => onInputChange(e)}/>
          </div>
        </form>
      </div>
    );
}

export default SearchBar;