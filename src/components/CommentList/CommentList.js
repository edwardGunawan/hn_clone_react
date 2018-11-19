import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NewStoryApi from '../../api/mockNewStoriesApi';
import Comment from '../Comment/Comment';
import ItemList from '../ItemList/ItemList';

import { connect } from 'react-redux';
import * as commentListActions from '../../actions/commentListActions';

export class CommentList extends Component {

    constructor(props) {
        super(props);
        this.fetchSpecificItem = this.fetchSpecificItem.bind(this);
        this.handleToggleExpand = this.handleToggleExpand.bind(this);
        console.log(props);
        this.state = {
            obj: Object.assign({},props.obj),
            numIndent: props.numIndent,
            isExpand: props.isExpand,
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

    fetchSpecificItem(id) {
        NewStoryApi.getContentId(id)
            .then((obj) => {
                if(obj) this.setState({ obj });
                return NewStoryApi.getParentCount(obj);
            })
            .then((numIndent) => {
                this.setState({numIndent})
            })
            .catch(e => console.log('error in fetchSpecificStory ', e));
    }

    handleToggleExpand(e) {
        this.setState(prevState => ({
            isExpand: !prevState.isExpand
        }));
    }

    render() {
        const {obj,isExpand,numIndent} = this.state;
        console.log(obj, isExpand, numIndent);
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

const mapStateToProps = (state) => {
    const {obj, numIndent, isExpand} = state.commentList;
    return {
        obj,
        numIndent,
        isExpand,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSpecificItem: id => dispatch(commentListActions.fetchSpecificStory(id)),
        handleToggleExpand: () => dispatch(commentListActions.toggleExpand()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentList);