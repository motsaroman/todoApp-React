import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";
function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOnChange = (e) => {
    setText(e.target.value);
    setIsDisabled(!e.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
    setIsDisabled(true);
  };

  return (
    <div className={styles.todoFormConteiner}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Введите задачу"
          value={text}
          onChange={handleOnChange}
        />
        <Button type="submit" title="Add" disabled={isDisabled}>
          Добавить задачу
        </Button>
      </form>
    </div>
  );
}
export default TodoForm;
