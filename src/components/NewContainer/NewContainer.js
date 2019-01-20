import Lists from '../Lists/Lists';

import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        news: state.newStories
    }
}

export default withRouter(connect(mapStateToProps)(Lists));