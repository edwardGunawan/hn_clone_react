import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Lists from '../Lists/Lists';

import * as topActions from '../../actions/topActions';
import NewStoryApi from '../../api/mockNewStoriesApi';

export class TopContainer extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     stories: [],
        // }
        // this.fetchTopStories = this.fetchTopStories.bind(this);
    }
    componentDidMount() {
        this.props.fetchTopStories();
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
        const {stories} = this.props.topStories;
        return (
            <div>
                <Lists news={stories}/>
            </div>
        )
    }
}

// need to reference in this.props.topStories, because this.props include most of the things, and topStories
// is just one of the object
const mapStateToProps = (state) => ({
    topStories:state.topStories, // NOTE: this will render as props instead of using this.state
})

const mapDispatchToProps = dispatch => {
    return {
        fetchTopStories: () => dispatch(topActions.loadStories()),
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TopContainer));