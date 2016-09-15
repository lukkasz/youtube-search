import React from 'react';

import SearchBar from 'SearchBar';

const Header = (props) => {
  
  return (
    <div className="navbar navbar-default">
      <div className="container">
          <h1 className="navbar-brand">Youtube Search</h1>
          <SearchBar onVideoSearchChange={props.onVideoSearchChange} />   
      </div>
      
    </div>
  );
  
}

export default Header;
