import React, {Component} from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  onInputChange(e) {
    var term = e.target.value;
    this.setState({ term });
    this.props.onVideoSearchChange(term);
  }
  
  render() {
    return (
      <div className="search-bar navbar-right">
        <input 
          type="search" 
          className="form-control"
          value={this.state.term}
          placeholder="Search youtube.com"
          onChange={this.onInputChange} />  
      </div>
    );
  }
}


export default SearchBar;
