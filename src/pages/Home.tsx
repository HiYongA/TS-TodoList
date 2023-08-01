import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <>
      <Header />
      <TodoForm />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
};

export default Home;
