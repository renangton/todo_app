const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};


export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
  return (
    <div style={style}>
      <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
      <button disabled={disabled} onClick={onClickAdd}>追加</button>
    </div>
  );
};
