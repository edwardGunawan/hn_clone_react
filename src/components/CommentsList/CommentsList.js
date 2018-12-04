import React from 'react';
import Comments from '../Comments/Comments';
import PropTypes from 'prop-types';

const CommentsList = ({comments}) => {
    return (
        <ul>
            {comments.map((comment,i) => {
                return (
                <li key={comment.id}>
                    <Comments comment={comment}/>
                </li>
                )
            })}
        </ul>
    )
}

CommentsList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        by: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        kids: PropTypes.arrayOf( PropTypes.number.isRequired),
        parent: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,    
    }))
}

export default CommentsList;