import React from 'react';
import NewList from './NewList';


import PropTypes from 'prop-types';

const Lists = ({news}) => {
    return (
        <div>
            <ol>
                {news.map(({ by, descendants, kids, time, title, type, url, score, id }, i) => <li key={i}><NewList by={by}
                    descendants={descendants}
                    kids={kids}
                    time={time}
                    title={title}
                    type={type}
                    score={score}
                    url={url}
                    id={id} /></li>)}
            </ol>
        </div>
    )
}


Lists.propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Lists;