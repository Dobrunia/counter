import React from "react";
import { NavLink } from "react-router-dom";
import { v1 } from "uuid";

type HeaderPropsType = {
  navLinkObj: {
    [key: string]: string;
  };
};

export const Header: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {
  const { navLinkObj } = props;
  return (
    <header className="header">
      {Object.entries(navLinkObj).map(([el, link]) => {
        return (
          <NavLink
            key={v1()}
            to={link}
            className={"btn_link"}
            style={(params) => {
              return { color: params.isActive ? "#a52a2a" : "#FFF" };
            }}
          >
            {el}
          </NavLink>
        );
      })}
    </header>
  );
};
