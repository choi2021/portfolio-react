import React from "react";
import WorkItem from "../work_item/work_item";
import styles from "./work_list.module.css";

const WorkList = ({ workList, clicked }) => {
  return (
    <ul className={`${styles.list} ${listStyle(clicked)}`}>
      {workList.map((item) => (
        <WorkItem
          title={item.title}
          key={item.id}
          url={item.url}
          imgURL={item.imgURL}
          description={item.description}
          invisible={item.invisible}
        ></WorkItem>
      ))}
    </ul>
  );
};

export default WorkList;

function listStyle(clicked) {
  if (!clicked) {
    return undefined;
  } else {
    return styles.anim;
  }
}
