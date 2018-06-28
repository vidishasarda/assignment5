import React from 'react'

class SearchBar extends React.Component {
 
    constructor(){
        super()
        this.state={
            searchString:""
        }
    }

    handleSearchInput(event){
        console.log(event)
        this.setState({
            searchString: event.target.value
        })
        this.thisPropFunction_updateSearchString(event.target.value)
    }

 
 
    render(){
    return(
      <div>
          <input value={this.state.searchString} onChange={event=>this.handleSearchInput(event)}/>
      </div>
    )
  }
}

export default SearchBar