import { connect } from 'react-redux';
import ProfileLayout from '../components/hoc/ProfileLayout';
import { GET_PROFILE_DATA, GET_TWEETS_PROFILE  } from '../app/actions/actionTypes';
import { changeProfileData } from '../app/actions/log';

function mapDispatchToProps(dispatch){
    return {
        getProfileData: (id) => dispatch({type: GET_PROFILE_DATA, payload: id}),
        getTweetsProfile: (id) => dispatch({type: GET_TWEETS_PROFILE, payload: id}),
        changeProfileData: (id, data) => dispatch(changeProfileData(id, data))
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.log.userProfileData
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLayout);