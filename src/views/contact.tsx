import React, { useContext, useEffect, useState } from "react";
import LayoutComponent from "../components/Layout";
import { TodoContext } from "..";

const ContactView = () => {
  const [todo, setTodo] = useState([]);
  const todoContext = useContext(TodoContext);

  useEffect(() => {
    // const todo = localStorage.getItem("todo");
    // console.log(todo);
    console.log(todoContext);
  }, []);

  return (
    <LayoutComponent>
      <div>Hello Contact</div>
    </LayoutComponent>
  );
};

export default ContactView;
