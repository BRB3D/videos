import React from 'react'; 


class SearchBar extends React.Component {
  constructor (props) {
    super(props); 
    this.state = {term: ''};
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  };

  onFormSubmit = event => {
    event.preventDefault();
    // ToDO: Make suer we call callback from parent
    this.props.onFormSubmit(this.state.term)
  };

  render(){
    return (
    <div className='search-bar ui segment' >
      <form onSubmit={this.onFormSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input
          placeholder='Search Videos' 
          type='text' 
          value={this.state.term} onChange={this.onInputChange} />
        </div>
      </form>
    </div>
    );
  }
}

export default SearchBar;