import React from "react";
import { BiPencil, BiTimeFive } from "react-icons/bi";
import Styles from "./taskCard.module.css";

const TaskCard = ({ task }) => {
  return (
    <>
      <div className="card mb-3">
        {task?.img && (
          <img
            src={task?.img}
            className={`card-img-top ${Styles.imgHeight}`}
            alt="TaskImg"
          />
        )}
        <div className="card-body">
          <div className="d_flex_between mb-2">
            <h5 className="card-title">{task?.title}</h5>
            <BiPencil className="text-muted" />
          </div>
          <p className={`card-text ${Styles.desc}`}>{task?.desc}</p>
          <div className="d_flex_between mb-2">
            <div className="text-muted">
              <BiTimeFive /> <span>{task?.date}</span>
            </div>
            <div className={Styles.assigned}>
              {task?.assigned &&
                task?.assigned?.map((userAvatar, key) => {
                  return (
                    <img key={key} src={userAvatar?.avatar} alt="assign" />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
