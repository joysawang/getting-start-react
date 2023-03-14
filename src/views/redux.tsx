import React, { useEffect } from "react";
import LayoutComponent from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import actions from "../redux/actions";

const ReduxView = () => {
  const todo = useSelector((state: any) => state.todo);
  const dispatch = useDispatch();

  const actionAddTodo = () => {
    return {
      type: actions.ACTION_TODO_ADD,
      payload: {
        value: "Hello",
      },
    };
  };

  const handleClick = () => {
    dispatch(actionAddTodo());
  };

  useEffect(() => {
    console.log(todo.data);
  }, [todo.data]);

  return (
    <LayoutComponent>
      <div>Hello World</div>
      <Button onClick={handleClick}>Add Todo</Button>
      <p>{JSON.stringify(todo.data)}</p>
    </LayoutComponent>
  );
};

export default ReduxView;
