import React, {Component} from "react";



const API_KEY= "35e0b76d"

export class SearchForm extends Component{
   
    state={
        inputMovie: ""
    }
    
    handleChange = (e) =>{
        this.setState({ inputMovie: e.target.value })
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const { inputMovie } = this.state.inputMovie
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then(res=>res.json())
        .then(results =>{
            const { Search, totalResults } = results 
        })
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