import React from "react";
import { Link } from "react-router-dom";
import "./../assets/styles/layout.css";

type LayoutProps = {
  children?: any;
  menu?: Array<any>;
};

const LayoutComponent = ({ children, menu }: LayoutProps) => {
  const renderMenuItem = (item: any, key: any) => {
    return (
      <li key={`menu_${key}`}>
        <Link to={item.path} className="text-bold">
          {item.title}
        </Link>
      </li>
    );
  };

  const renderMenu = () => {
    if (!menu?.length) {
      return null;
    }

    return menu?.map(renderMenuItem);
  };

  return (
    <div className="container">
      {renderMenu()}
      {children}
    </div>
  );
};

export default LayoutComponent;
