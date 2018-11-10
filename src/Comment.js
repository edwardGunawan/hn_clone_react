import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


const TimeAgo = require('react-timeago').default;

const Comment = ({obj}) => {
    const { by, id, parent, text, time } = obj;
    return (
        <div>
            <h6>{by} <TimeAgo date={time * 1000} /> | <Link to={`/comment/detail?id=${id}`}>link</Link></h6>
            <div>{text}</div>
            <p><a href={`https://news.ycombinator.com/reply?id=${id}`}>reply</a></p>
        </div>
    )
}


Comment.propTypes= {
    obj: PropTypes.shape({
        by: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        parent: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
    }).isRequired
}



export default Comment;