import React, { Component } from 'react';

import Lists from './Lists';

import { withRouter } from 'react-router-dom';

import NewStoryApi from './api/mockNewStoriesApi';



export class Item extends Component {
    constructor(props) {
        super(props);
        this.fetchSpecificStory = this.fetchSpecificStory.bind(this);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        const { search } = this.props.history.location;
        const id = search.split('&')[0].split('=')[1];
        this.fetchSpecificStory(id);
    }


    fetchSpecificStory(id) {
        NewStoryApi.getStoryId(id)
            .then((detail) => {
                console.log(detail);
                let { kids } = detail;
                return NewStoryApi.getItems(kids)
            }).then((kidsDetail) => {
                console.log('Updating state on fetchSpecificStory ...')
                this.setState({ news: kidsDetail });
            })
            .catch(e => console.log('error in fetchSpecificStory ', e));
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <Lists news={items} />
            </div>
        )
    }
}

export default withRouter(Item);