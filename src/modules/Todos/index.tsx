import { type Todo } from 'modules/Todos/types';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes';

type Props = { todos: Todo[] };

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Link key={todo.id} to={`${ROUTES.TODOS}/${todo.id}`}>
          <li className="grid grid-cols-[5vw_40vw_auto] items-center">
            <span>{todo.id}</span>
            <span>{todo.title}</span>
            <span>{todo.completed ? 'Done' : 'Pending'}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Todos;
