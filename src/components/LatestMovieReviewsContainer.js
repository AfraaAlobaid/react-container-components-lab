import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'BXhnWZGW17Ck2rGJ80WMzE3FuJVLPkwg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                reviews: data.results
            })
        })
    }

    render(){
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
