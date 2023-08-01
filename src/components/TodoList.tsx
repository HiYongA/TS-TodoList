import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { removeTodo, switchTodo } from "../redux/modules/todosSlice";
import { isDoneProps } from "../interfaces/isDoneProps";

const TodoList = ({ isDone }: isDoneProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state: RootState) => state.todos);

  const handleRemoveBtnClick = (id: string): void => {
    dispatch(removeTodo(id));
  };

  const handleSwitchBtnClick = (id: string): void => {
    dispatch(switchTodo(id));
  };

  return (
    <>
      <h2>{isDone ? "Done" : "Todo"}</h2>
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <Container key={todo.id}>
              <button
                onClick={() =>
                  navigate(`/${todo.id}`, {
                    state: { isDone: todo.isDone },
                  })
                }
              >
                상세보기
              </button>
              <p>{todo.id}</p>
              <h3>{todo.title}</h3>
              <p>{todo.body}</p>
              <p>{todo.isDone.toString()}</p>
              <button onClick={() => handleRemoveBtnClick(todo.id)}>
                삭제
              </button>
              <button onClick={() => handleSwitchBtnClick(todo.id)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
            </Container>
          );
        })}
    </>
  );
};

export default TodoList;

const Container = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  margin: 10px;
`;
