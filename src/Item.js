import React, { Component } from 'react';

import ItemList from './ItemList';
import NewList from './NewList';

import { withRouter } from 'react-router-dom';

import NewStoryApi from './api/mockNewStoriesApi';



export class Item extends Component {
    constructor(props) {
        super(props);
        this.fetchSpecificStory = this.fetchSpecificStory.bind(this);
        this.state = {
            by: '',
            descendants: 0,
            kids: [],
            time: 0,
            title: '',
            type: '',
            score: 0,
            url: '',
            id: 0,
        }
    }

    componentDidMount() {
        const { search } = this.props.history.location;
        // console.log(this.props.history)
        const id = search.split('&')[0].split('=')[1];
        this.fetchSpecificStory(id);
    }


    fetchSpecificStory(id) {
        NewStoryApi.getStoryId(id)
            .then((detail) => {
                this.setState({
                    ...detail,
                });
                console.log(detail)
            })
            .catch(e => console.log('error in fetchSpecificStory ', e));
    }

    render() {
        const { by, descendants, kids, time, title, type, score,
        url, id } = this.state;
        return (
            <div>
                {(type !== 'comment') ? <NewList by={by}
                    descendants={descendants}
                    kids={kids}
                    time={time}
                    title={title}
                    type={type}
                    score={score}
                    url={url}
                    id={id} /> : <ItemList kids={kids} />}
            </div>
        )
    }
}

export default withRouter(Item);