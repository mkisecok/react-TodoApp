const TodoList = ({ todos, deleteItem, title }) => {
  const listItems = todos.map((todo, index) => {
    return (
      <li key={`todo_list_${index}`}>
        {todo}
        <span className="remove" onClick={() => deleteItem(index)}>
          {title}
        </span>
      </li>
    );
  });
  return <ul>{listItems}</ul>;
};
export default TodoList;
