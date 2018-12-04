import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const TimeAgo = require('react-timeago').default;

export const Comments = ({comment}) => {
    const {by, id, kids, parent, text, time,type} = comment;
    return (
        <React.Fragment>
            <h6>
                <b>{by}</b> <TimeAgo date={time * 1000} /> | <span><Link to={`/comment/detail?id=${id}`}>link</Link></span> | <span><Link to={`item?id=${parent}`}>parent</Link></span>
            </h6>
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </React.Fragment>
    );
}

Comments.propTypes = {
    comment: PropTypes.shape({
        by: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        kids: PropTypes.arrayOf(PropTypes.number.isRequired),
        parent: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,  
    }).isRequired,
}

export default Comments;