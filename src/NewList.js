import React from 'react';
import PropTypes from 'prop-types';
const TimeAgo = require('react-timeago').default;
const parse = require('url-parse');


const NewList = ({by, descendants, time, title, type, url,score}) => {
    const url_parse = parse(url);
    return (
        <div>
            <h6>{title}<span>({url_parse.hostname})</span></h6>
            <p> {score} points by {by} <TimeAgo date={time*1000}/> | <span>
            {descendants} {(descendants === 0) ? 'discuss' : 'comments' }</span></p>
        </div>
    )
}

NewList.propTypes = {
    by: PropTypes.string.isRequired,
    descendants: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
}
export default NewList;