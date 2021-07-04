import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'BXhnWZGW17Ck2rGJ80WMzE3FuJVLPkwg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';

export default class SearchableMovieReviewsContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(URL + `query=${this.state.searchTerm}` + `api-key=${NYT_API_KEY}`)
        .then((res) => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
        .catch((err) => console.error(err))
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render(){
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
