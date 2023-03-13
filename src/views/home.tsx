import React from "react";
import LayoutComponent from "../components/Layout";
import { Button } from "@mui/material";

const HomeView = () => {
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

  return (
    <LayoutComponent menu={menu}>
      <div>Hello Home</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </LayoutComponent>
  );
};

export default HomeView;
