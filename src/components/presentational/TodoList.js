import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ onTodoClick, todos }) => (
    <ul>
        {todos.map(
            todo => (
                <Todo key={todo.id} {...todo}
                      onClick={ () => onTodoClick(todo.id) } />
            )
        )}
    </ul>
);

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default TodoList