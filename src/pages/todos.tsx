import Todos from 'modules/Todos';
import { useGetTodos } from 'modules/Todos/hooks';
import React from 'react';

const TodosPage: React.FC = () => {
  const params = { limit: 10 };
  const { data: todos = [], isLoading } = useGetTodos(params);

  if (isLoading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <h1>Todos Page</h1>

      <Todos todos={todos} />
    </React.Fragment>
  );
};

export default TodosPage;
