import React from 'react';
import NewList from './NewList';


import PropTypes from 'prop-types';

const Lists = ({news}) => {
    return (
        <div>
            <ol>
                {news.map((obj, i) => <li key={i}><NewList obj={obj} /></li>)}
            </ol>
        </div>
    )
}


Lists.propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Lists;