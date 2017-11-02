import { connect } from 'react-redux'
import TodoList from '../presentational/TodoList'
import { toggleTodo, VisibilityFilters } from '../actions'

/*
    VisibleTodoList needs to calculate todos to pass to the TodoList,
    so we define a function that filters the state.todos according to the state.visibilityFilter,
    and use it in its mapStateToProps
 */


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        case VisibilityFilters.SHOW_ALL:
        default:
            return todos
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
        // Khi truyen param vao bang Map cung duoc nhung no khong co dispatch cho ta su dung
        //onTodoClick: function(){ console.log("da bam roi ne"); }
    }
}


/*
    In addition to reading the state, container components can dispatch actions.
    In a similar fashion, you can define a function called mapDispatchToProps()
    that receives the dispatch() method and returns callback props
    that you want to inject into the presentational component.
    For example, we want the VisibleTodoList to inject a prop called onTodoClick
    into the TodoList component, and we want onTodoClick to dispatch a TOGGLE_TODO action:
 */

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

/*
    Finally, we create the VisibleTodoList by calling connect() and passing these two functions:
 */
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList