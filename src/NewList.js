import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const TimeAgo = require('react-timeago').default;
const parse = require('url-parse');


export const NewList = (props) => {
    const {by, descendants, time, title, url, score, id} = props.obj;
    const url_parse = parse(url);
    return (
        <div>
            <h6><a href={url}>{title}<span>({url_parse.hostname})</span></a></h6>
            <p> {score} points by {by} <TimeAgo date={time*1000}/> | <span><Link to={`item?id=${id}`}>
                {descendants} {(descendants === 0) ? 'discuss' : 'comments'}</Link></span></p>
        </div>
    )
}

NewList.propTypes = {
    obj: PropTypes.shape({
        by: PropTypes.string.isRequired,
        descendants: PropTypes.number.isRequired,
        time: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
    }).isRequired,
    
}
export default NewList;