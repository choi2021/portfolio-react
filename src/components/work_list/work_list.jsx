import React from "react";
import WorkItem from "../work_item/work_item";
import styles from "./work_list.module.css";

const WorkList = ({ workList }) => {
  return (
    <ul className={styles.list}>
      {workList.map((item) => (
        <WorkItem
          title={item.title}
          key={item.id}
          url={item.url}
          imgURL={item.imgURL}
          description={item.description}
        ></WorkItem>
      ))}
    </ul>
  );
};

export default WorkList;
