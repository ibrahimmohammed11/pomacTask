import React, { useRef } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 } from "uuid";

const AddColumnModel = ({ data, setData }) => {
  const modelRef = useRef(null);

  // const handleCloseModal = () => {
  //   modelRef.current.classList.remove("show", "d-block");
  //   // modelRef.current.classList.toggle("d-none");

  //   document
  //     .querySelectorAll(".modal-backdrop")
  //     .forEach((el) => el.classList.remove("modal-backdrop"));
  // };

  return (
    <>
      <div
        className="modal fade"
        id="addColumnModal"
        tabIndex="-1"
        aria-labelledby="addColumnModalLabel"
        aria-hidden="true"
        ref={modelRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addColumnModalLabel">
                New Column
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{
                  title: "",
                }}
                validationSchema={yup.object().shape({
                  title: yup.string().required("This a required field"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(async () => {
                    let newColumn = {
                      id: v4(),
                      title: values.title,
                      tasks: [],
                    };
                    let newColumns = [...data, newColumn];
                    setData(newColumns);

                    setSubmitting(false);
                    // handleCloseModal();
                    resetForm();
                  }, 400);
                }}
              >
                {({ isSubmitting, values }) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="title">Title</label>
                      <Field
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-danger p-2 mt-1"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn mainBgColor"
                        data-bs-dismiss={values.title !== "" && "modal"}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddColumnModel;
