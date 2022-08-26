import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';  
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                followingInProgres={this.props.followingInProgres} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgres: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}


export default compose(connect(mapStateToProps, {
    follow,       //follow: followAC
    unfollow,       //unfollow: unfollowAC и т.д...
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
}),
    









































// let AuthRedirectComponent = withAuthRedirect(UsersContainer);            //Было до compose
    
    // let mapDispatchToProps = (dispatch) => {        //Уже не работает так как перевели весь код корасщенно в соннект
    //     return {
    //         follow: (userId) => {
    //             dispatch(follow(userId));
    //         },
    //         unfollow: (userId) => {
    //             dispatch(unfollowAC(userId));
    //         },
    //         setUsers: (users) => {
    //             dispatch(setUsersAC(users));
    //         },
    //         setCurrentPage: (pageNumber) => {                           //Пофиг что писать в функциях общекта pageNumber или просто Page         
    //             dispatch(setCurrentPageAC(pageNumber));
    //         },
    //         setTotalUsersCount: (totalCount) => {
    //             dispatch(setTotalUsersCountAC(totalCount));
    //         },
    //         toggleIsFetching: (isFetching) => {
    //             dispatch(toggleIsFetchingAC(isFetching))
    //         },
    //     }
    // };
    
    // export default connect(mapStateToProps, {
    //     follow,       //follow: followAC
    //     unfollow,       //unfollow: unfollowAC и т.д...
    //     setCurrentPage,
    //     toggleFollowingProgress,
    //     getUsers
    // })(AuthRedirectComponent);                                          //Было до compose
withAuthRedirect)(UsersContainer)