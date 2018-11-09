import React, { Component } from 'react';

import ItemList from './ItemList';
import Title from './Title';
import Comment from './Comment';

import { withRouter } from 'react-router-dom';

import NewStoryApi from './api/mockNewStoriesApi';



export class Item extends Component {
    constructor(props) {
        super(props);
        this.fetchSpecificStory = this.fetchSpecificStory.bind(this);
        this.state = {
            details: {
                by: '',
                descendants: 0,
                kids: [],
                parent:0,
                time: 0,
                title: '',
                text:'',
                type: '',
                score: 0,
                url: '',
                id: 0,
            }
        }
    }

    componentDidMount() {
        const { search } = this.props.history.location;
        // console.log(this.props.history)
        const id = search.split('&')[0].split('=')[1];
        this.fetchSpecificStory(id);
    }


    fetchSpecificStory(id) {
        NewStoryApi.getContentId(id, 'story')
            .then((detail) => {
                this.setState({ detail });
                console.log(detail)
            })
            .catch(e => console.log('error in fetchSpecificStory ', e));
    }

    render() {
        const {details} = this.state;
        const {kids, type} = details;
        return (
            <div>
                {type === 'comment' ? <Comment obj={details}/> : 
                <Title obj={details} /> }
                <ItemList kids={kids} /> 
            </div>
        )
    }
}

export default withRouter(Item);