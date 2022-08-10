import React, { useState, Fragment, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import TaskCard from "../../components/TaskCard";
import initialData from "../../initialData";
import AddColumnModel from "../../components/AddColumnModel";
import Styles from "./todos.module.css";
import AddModal from "../../components/AddModal";

const Todos = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || initialData
  );

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    // note : local img will not work with local storage
  }, [data]);
  return (
    <Fragment>
      <div className={Styles.todoBg}>
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-5">
            <h2>Pomac Front End Technical Task</h2>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#addTaskModal"
              className={`btn ${Styles.addTaskBtn}`}
            >
              <AiOutlinePlus /> <span>New Task</span>
            </button>
          </div>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addColumnModal"
            className={`btn ${Styles.addColumnBtn1}`}
          >
            <AiOutlinePlus /> <span>New Column</span>
          </button>
          <AddModal data={data} setData={setData} />
          {/* drag and drop */}

          <DragDropContext onDragEnd={onDragEnd}>
            <div className={Styles.mainPageSt}>
              <div>
                <div className={Styles.secWidth}>
                  <div className="d_flex_between">
                    {data?.map((column) => {
                      return (
                        <Droppable key={column.id} droppableId={column.id}>
                          {(provided) => (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              className={`${Styles.columnStyle} py-3 px-2 rounded border`}
                            >
                              <div className="d_flex_between mainColor mb-3">
                                <h5>{column.title}</h5>
                                <BsThreeDots />
                              </div>

                              {column?.tasks?.map((task, index) => (
                                <Draggable
                                  key={task.id}
                                  draggableId={task.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        ...provided.draggableProps.style,
                                        opacity: snapshot.isDragging
                                          ? "0.5"
                                          : "1",
                                      }}
                                    >
                                      <TaskCard task={task} />
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#addColumnModal"
                  className={`btn ${Styles.addColumnBtn}`}
                >
                  <AiOutlinePlus /> <span>New Column</span>
                </button>
                <AddColumnModel data={data} setData={setData} />
              </div>
            </div>
          </DragDropContext>
        </div>
      </div>
    </Fragment>
  );
};

export default Todos;
