import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Lists from './Lists';

import NewStoryApi from './api/mockNewStoriesApi';

export class TopContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
        }
        this.fetchTopStories = this.fetchTopStories.bind(this);
    }
    componentDidMount() {
        this.fetchTopStories();
    }

    fetchTopStories() {
        NewStoryApi.get('topstories')
        .then((storiesId) => {
            return NewStoryApi.getItems(storiesId);
        })
        .then((stories) => {
            this.setState({stories});
        })
        .catch(e => console.log(e));
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

export default withRouter(TopContainer);