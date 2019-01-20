import React, { Component } from 'react';

import ItemList from '../ItemList/ItemList';
import Title from '../Title/Title';
import Comment from '../Comment/Comment';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as itemActions from '../../actions/itemActions';



export class Item extends Component {
    constructor(props,context) {
        super(props, context);
        // this.fetchSpecificStory = this.fetchSpecificStory.bind(this);
        this.state = {
            details: Object.assign({},props.details),
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.details !== nextProps.details) {
            this.setState({details: Object.assign({},nextProps.details)});
        }
    }

    componentDidMount() {
        const { search } = this.props.history.location;
        // console.log(this.props.history)
        const id = search.split('&')[0].split('=')[1];
        this.props.fetchSpecificStory(id); // this should show all the content already
    }


    // fetchSpecificStory(id) {
    //     let content = (this.props.history.location.pathname === '/item') ? 'story': 'comment';
    //     // console.log('in item.js beforeGetContentId', content);
    //     NewStoryApi.getContentId(id)
    //         .then((details) => {
    //             if(details) this.setState({ details });
    //             // console.log('in item.js in then getContentId function', details);
    //         })
    //         .catch(e => console.log('error in fetchSpecificStory ', e));
    // }

    render() {
        const {details} = this.state;
        const {kids, type} = details;
        // console.log('the type in itemjs is ', type);
        return (
            <div>
                {type === 'comment' ? <Comment obj={details}/> : 
                <Title obj={details} /> }
                {typeof(kids) !== 'undefined' && kids.length > 0 && <ItemList kids={kids} /> }
            </div>
        )
    }
}




const mapStateToProps = (state, ownProps) => {
    
    // console.log(ownProps, state);
    let { search } = ownProps.location;
    const id = search.split('&')[0].split('=')[1]; 
    // let details = fetchSpecificStory(id);
    return {
        details: state.item,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSpecificStory: id => dispatch(itemActions.fetchSpecificStory(id)),
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Item));