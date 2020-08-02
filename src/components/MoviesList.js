import React, {Component} from "react";
import PropType from "prop-types";
import { Movie } from "./Movie";

export class MoviesList extends Component{

    static PropType={
        movies: PropType.array
    }

    render(){   
        const { movies } = this.props
        return(

     <div className="MoviesList">
            { movies.map(movie => {
        
        return(
            <div key={movie.imdbID} className="MoviesList-item">
        
            <Movie 
            id={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster} 
        />

        </div>
             )
        })
    }
        </div>
    )    
  }
}