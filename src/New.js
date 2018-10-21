import React, { Component } from 'react';

import Lists from './Lists';

import NewStoryApi from './api/mockNewStoriesApi';

export class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        }
    }

    componentDidMount(){
        NewStoryApi.getAllStories()
        .then((news) => {
            this.setState({ news })
        })
        .catch(e => console.log("error", e));
    }
    render() {
        const {news} = this.state;
        return (
            <div>
                <Lists news={news}/>
            </div>
        )
    }
}

export default New;