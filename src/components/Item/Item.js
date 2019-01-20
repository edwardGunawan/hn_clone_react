import React, { Component } from 'react';

import ItemList from '../ItemList/ItemList';
import Title from '../Title/Title';
import Comment from '../Comment/Comment';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as itemActions from '../../actions/itemActions';



export class Item extends Component {

    componentWillReceiveProps(nextProps) {
        if(this.props.details !== nextProps.details) {
            this.setState({details: Object.assign({},nextProps.details)});
        }
    }

    componentDidMount() {
        const { search } = this.props.history.location;
        const id = search.split('&')[0].split('=')[1];
        this.props.fetchSpecificStory(id); // this should show all the content already
    }

    render() {
        const {parent, history} = this.props;
        const { search } = history.location;
        const id = search.split('&')[0].split('=')[1];
        const {kids,type} = parent[id] || {};
        return (
            <div>
                {type === 'comment' ? <Comment obj={parent}/> : 
                <Title obj={parent} /> }
                {typeof(kids) !== 'undefined' && kids.length > 0 && <ItemList kids={kids} /> }
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    const {parent} = state.item;
    return {
        parent,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSpecificStory: id => dispatch(itemActions.fetchSpecificStory(id)),
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Item));