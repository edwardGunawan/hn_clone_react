import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NewStoryApi from './api/mockNewStoriesApi';
import Comment from './Comment';
import ItemList from './ItemList';

export class CommentList extends Component {

    constructor(props) {
        super(props);
        this.fetchSpecificItem = this.fetchSpecificItem.bind(this);
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
        }
    }

    componentDidMount() {
        const {kid} = this.props;
        this.fetchSpecificItem(kid);
    }

    fetchSpecificItem(id) {
        NewStoryApi.getContentId(id, 'comment')
            .then((detail) => {
                this.setState({
                    ...detail,
                });
                console.log(detail)
            })
            .catch(e => console.log('error in fetchSpecificStory ', e));
    }

    render() {
        const {obj} = this.state;
        const {kids} = obj;
        return (
            <div>
                <Comment obj={obj}/>
                {kids.length > 0 && <ItemList kids={kids} />}
            </div>
        )
    }
    
}


CommentList.propTypes = {
    kid: PropTypes.number.isRequired,
}

export default CommentList;