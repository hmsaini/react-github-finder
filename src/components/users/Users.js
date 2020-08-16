import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Users = () => { // props is destructured
    // props.users and props.loading

    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if (loading) {
        return <Spinner></Spinner>
    } else {
        return (
            <div className="grid-3">
                {users.map(user => (
                    <UserItem user={user} key={user.id}></UserItem>
                ))}
            </div>
        );
    }
}

// Users.propTypes= {
//     users: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired,
// }

// const userStyle = {
//     display: 'grid',
//     gridtemplateColumns: 'repeat(3, 1fr)',
//     gridGap: '1rem'
// }

export default Users
