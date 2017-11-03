import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UserList = ({ users, msg, onClick }) => (
    <section>
        <div>{msg}</div>
        <button onClick={onClick}>Click to fetch User</button>
        <ul>
            {users.map(
                user => {
                    <User id={user.id} name={user.name} />
                }

            )}
        </ul>
    </section>
);

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    msg: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default UserList