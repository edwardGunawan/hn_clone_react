import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';
import ItemList from '../ItemList/ItemList';

import { connect } from 'react-redux';

export class CommentList extends Component {

    constructor(props) {
        super(props);
        this.handleToggleExpand = this.handleToggleExpand.bind(this);
        this.state = {
            obj: Object.assign({},props.obj), 
            numIndent: props.numIndent,
            isExpand: true,
        }
    }

    /*
        Updating the state based componentWillReceiveProps in redux
        because we are passing state down to the course render, so 
        when we refresh on this particular component it will go through
         and populate the updated props from the async fetch
    */
    componentWillReceiveProps(nextProps) {
        if(this.props.obj !== nextProps.obj) {
            this.setState({obj : Object.assign({},nextProps.obj)});
        }
        if(this.props.numIndent !== nextProps.numIndent) {
            this.setState({numIndent : nextProps.numIndent});
        }

        if(this.props.isExpand !== nextProps.isExpand) {
            this.setState({isExpand: nextProps.isExpand});
        }
    }

    handleToggleExpand(e) {
        this.setState(prevState => ({
            isExpand: !prevState.isExpand
        }));
    }

    render() {
        const {obj,isExpand,numIndent} = this.state;
        // console.log(obj, isExpand, numIndent);
        const {kids} = obj;
        const indentStyle = {
            textIndent: `${3 * numIndent}%`,
        }
        return (
            <div>
                <div>
                    {typeof (kids) !== 'undefined' && kids.length && <span onClick={this.handleToggleExpand}>[{isExpand ? '-' : '+'}]</span>} <Comment obj={obj} />
                </div>
                
                <div style={indentStyle}>
                    {isExpand && typeof (kids) !== 'undefined' && kids.length > 0 && <ItemList kids={kids} />}
                </div>
            </div>
        )
    }
    
}


CommentList.propTypes = {
    kid: PropTypes.number.isRequired,
}

const mapStateToProps = (state, ownProps) => { // getting parameters from the url (which is its own props)
    const {kid} = ownProps;
    const {comments} = state.item;
    let obj= comments[kid];
    let numIndent = 1;
    if(typeof (state.commentList) !== 'undefined' && Object.keys(state.commentList).length > 0
        && typeof state.commentList[`${kid}`] !== 'undefined') {
        // console.log('inside if statement', state.commentList[`${kid}`]['obj']['kids']);
        numIndent = state.commentList[`${kid}`]['numIndent'];
    }
    
    return {
        obj,
        numIndent,
    }
}


export default connect(mapStateToProps)(CommentList);