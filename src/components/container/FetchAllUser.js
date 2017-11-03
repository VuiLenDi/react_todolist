import { connect } from 'react-redux'
import { fetchUser, fetchUserSuccess, fetchUserFailed } from '../actions'
import UserList from '../presentational/UserList'

const mapStateToProps = (state) => {

    console.log("Trong container")
    console.log(state.users)

    return {
        users: state.users,
        msg: state.msg
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(fetchUser())
        }
    }
}

const FetchAllUser = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)

export default FetchAllUser