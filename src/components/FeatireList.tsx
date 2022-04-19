import React from "react";
import styled from "styled-components";
import CalenderIcon from "../images/icon-calendar.svg";
import ReminderIcon from "../images/icon-reminders.svg";
import TodoIcon from "../images/icon-todo.svg";
import Planning from "../images/icon-planning.svg";
import SubMenuItem from "./SubMenuItem";
import media from "../styles/media";

const ListEl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
  padding: 1.6rem;

  ${media.tablet} {
    align-items: stretch;
    padding: 1rem 0;
    gap: 0;
    border-radius: 8px;
  }
`;

const FeatireList = () => {
  return (
    <ListEl>
      <SubMenuItem label="Todo List">
        <TodoIcon />
      </SubMenuItem>
      <SubMenuItem label="Calender">
        <CalenderIcon />
      </SubMenuItem>{" "}
      <SubMenuItem label="Reminders">
        <ReminderIcon />
      </SubMenuItem>{" "}
      <SubMenuItem label="Planning">
        <Planning />
      </SubMenuItem>
    </ListEl>
  );
};

export default FeatireList;
