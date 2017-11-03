import React from 'react'
import PropTypes from 'prop-types'

const User = ({ id, name }) => (
    <li id={id}>
        {name}
    </li>
);

User.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default User