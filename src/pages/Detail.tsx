import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../redux/config/configStore";
import { styled } from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const todos = useSelector((state: RootState) => state.todos);
  const todo = todos.find((todo) => todo.id === id);
  return (
    <Container>
      <button onClick={() => navigate("/")}>이전으로</button>
      <h2>{state.isDone ? "Done" : "Todo"}</h2>
      <p>{todo?.id}</p>
      <h3>{todo?.title}</h3>
      <p>{todo?.body}</p>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  margin: 10px;
`;
