import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';
import ItemList from '../ItemList/ItemList';

import { connect } from 'react-redux';
import * as commentListActions from '../../actions/commentListActions';

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

    componentDidMount() {
        const {kid} = this.props;
        this.props.fetchSpecificItem(kid);
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

const mapStateToProps = (state, ownProps) => {
    const {kid} = ownProps;
    let obj= {
            by: '',
            id: 0,
            kids: [],
            parent: 0,
            text: '',
            time: 0,
            type: '',
        };
    let numIndent = 1;
    // console.log('in mapStateToProps', Object.keys(state.commentList).length);
    if(typeof (state.commentList) !== 'undefined' && Object.keys(state.commentList).length > 0
        && typeof state.commentList[`${kid}`] !== 'undefined') {
        // console.log('inside if statement', state.commentList[`${kid}`]['obj']['kids']);
        obj = state.commentList[`${kid}`]['obj'];
        numIndent = state.commentList[`${kid}`]['numIndent'];
    }
    
    return {
        obj,
        numIndent,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSpecificItem: id => dispatch(commentListActions.fetchSpecificStory(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentList);