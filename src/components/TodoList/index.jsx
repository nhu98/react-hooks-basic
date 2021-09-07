import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProp = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(event) {
    if (onTodoClick) {
      onTodoClick(event);
    }
  }

  return (
    <ul className="todo-list">
      {todos.map((todoItem) => (
        <li key={todoItem.id} onClick={() => handleClick(todoItem)}>
          {todoItem.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
