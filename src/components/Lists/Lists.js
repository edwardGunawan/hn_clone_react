import React from 'react';
import Title from '../Title/Title';


import PropTypes from 'prop-types';

const Lists = ({news}) => {
    return (
        <div>
            <ol>
                {news.map((obj, i) => <li key={i}><Title obj={obj} /></li>)}
            </ol>
        </div>
    )
}


Lists.propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Lists;