import { RiDeleteBack2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosAction.module.css";
function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionConteiner}>
      <Button title="Reset Todos" onClick={resetTodos} className={styles.reset}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
        className={styles.clear}
      >
        <RiDeleteBack2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
