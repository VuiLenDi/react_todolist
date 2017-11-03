import React from 'react'
import Footer from './presentational/Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './container/VisibleTodoList'
import FetchAllUser from './container/FetchAllUser'

const App = () => (
    <div>
        <FetchAllUser/>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App