import React, { useContext, useEffect, useState } from "react";
import LayoutComponent from "../components/Layout";
import { Button } from "@mui/material";
import { TodoContext } from "..";

const HomeView = () => {
  const [todo, setTodo] = useState<Array<string>>([]);
  const todoContext = useContext(TodoContext);

  const menu: Array<any> = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Contact",
      path: "/contact",
    },
    {
      id: 3,
      title: "About",
      path: "/abount",
    },
  ];

  const addTodo = () => {
    // const obj1 = {name: 'test1'};
    // const obj2 = {title: 'test2'};

    // const obj3 = {...obj1, ...obj2};
    // console.log(obj3);

    setTodo(todo.concat("Hello"));
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  useEffect(() => {
    console.log(todoContext);
  }, []);

  // useEffect(() => {
  //   // did mount
  //   const interval = setInterval(() => {
  //     console.log("Hello World");
  //   }, 1000);

  //   return () => {
  //     // will unmount
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <LayoutComponent menu={menu}>
      <div>Hello Home</div>
      <Button variant="text" onClick={addTodo}>
        Add Todo
      </Button>
      <div>{JSON.stringify(todo)}</div>
    </LayoutComponent>
  );
};

export default HomeView;
