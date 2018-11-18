import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NewStoryApi from '../../api/mockNewStoriesApi';
import Comment from '../Comment/Comment';
import ItemList from '../ItemList/ItemList';

export class CommentList extends Component {

    constructor(props) {
        super(props);
        this.fetchSpecificItem = this.fetchSpecificItem.bind(this);
        this.handleToggleExpand = this.handleToggleExpand.bind(this);
        this.state = {
            obj: {
                by: '',
                id: 0,
                kids: [],
                parent: 0,
                text: '',
                time: 0,
                type: '',
            },
            numIndent:1,
            isExpand:true,
        }
    }

    componentDidMount() {
        const {kid} = this.props;
        this.fetchSpecificItem(kid);
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

export default CommentList;