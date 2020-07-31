import React, {Component} from "react";

export class SearchForm extends Component{
   
    state={
        inputMovie: ""
    }

    handleChange = (e) =>{
        this.setState({ inputMovie: e.target.value })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        alert(this.state.inputMovie)

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
    <div className="field has-addons">
            <div className="control">
                <input 
                onChange={this.handleChange}
                className="input" 
                type="text" 
                placeholder="Movie to search..." />
                </div>
            <div className="control">
                <button className="button is-info">
                Search
                </button>
            </div>
    </div>
 </form>
        )
    }
}