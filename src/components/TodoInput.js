const TodoInput = (props) => {
    return (
        <form onSubmit={props.addTodo}>
            <label>
                NEW TODO:
                <input type="text" id="newTodo" />
            </label>
            <input type="submit" value="Add" />
        </form>
    );
}

export default TodoInput;