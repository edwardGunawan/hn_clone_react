import React, { Component } from 'react';

import Lists from '../Lists/Lists';

import {withRouter} from 'react-router-dom';

import NewStoryApi from '../../api/mockNewStoriesApi';

export class NewContainer extends Component {
    constructor(props) {
        super(props);

        this.fetchAllStories = this.fetchAllStories.bind(this);
        this.state = {
            stories: [],
        }
    }

    componentDidMount(){
        this.fetchAllStories();
    }

    fetchAllStories() {
        NewStoryApi.get('newstories')
            .then((ids) => {
                return NewStoryApi.getItems(ids);
            })
            .then((newsItem) => {
                //console.log('in New.js ', newsItem);
                this.setState({ stories: newsItem });
            })
            .catch(e => console.log("error in fetchAllStories", e));
    }
    
    render() {
        const {stories} = this.state;
        return (
            <div>
                <Lists news={stories}/>
            </div>
        )
    }
}

export default withRouter(NewContainer);