import React from 'react';
import PropTypes from 'prop-types';


const TimeAgo = require('react-timeago').default;

const Comment = ({ by, id, parent, text, time }) => {
    return (
        <div>
            <h6>{by} <TimeAgo date={time * 1000} /> | link</h6>
            <div>{text}</div>
            <p>{id}</p>
        </div>
    )
}


Comment.propTypes= {
    by: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    parent: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
}



export default Comment;