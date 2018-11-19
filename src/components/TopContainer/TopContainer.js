import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Lists from '../Lists/Lists';

export class TopContainer extends Component {
    constructor(props,context) {
        super(props,context);
        this.state = Object.assign({}, props.topStories);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.topStories !== nextProps.topStories) {
            this.setState({stories: [...nextProps.topStories.stories]});
        }
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

// need to reference in this.props.topStories, because this.props include most of the things, and topStories
// is just one of the object
const mapStateToProps = (state) => ({
    topStories:state.topStories, // NOTE: this will render as props instead of using this.state
});

export default withRouter(connect(mapStateToProps)(TopContainer));