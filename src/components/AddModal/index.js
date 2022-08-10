import React, { useRef } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 } from "uuid";
import { MyTextArea } from "../../components/MyTextArea";
import dayjs from "dayjs";
import Select from "react-select";
import { defaultUser, mainUsers } from "../../initialData";

const AddModal = ({ data, setData }) => {
  // const [fileImg, setFile] = useState(null);
  const addTaskModelRef = useRef(null);
  const options = [
    { value: "ahmed", label: "Ahmed" },
    { value: "ibrahim", label: defaultUser.firstName },
    { value: "mohammed", label: "Mohammed" },
    { value: "sara", label: "Sara" },
    { value: "nagham", label: "Nagham" },
  ];

  return (
    <>
      <div
        className="modal fade"
        id="addTaskModal"
        tabIndex="-1"
        aria-labelledby="addTaskModalLabel"
        aria-hidden="true"
        ref={addTaskModelRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addTaskModalLabel">
                New Task
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
                  desc: "",
                  date: dayjs().format("YYYY-MM-DD"),
                  users: [
                    {
                      firstName: "Ibrahim",
                      avatar:
                        "https://iconape.com/wp-content/png_logo_vector/avatar-4.png",
                    },
                  ],
                }}
                validationSchema={yup.object().shape({
                  title: yup.string().required("This a required field"),
                  desc: yup.string().required("This a required field"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(async () => {
                    const res = mainUsers.filter((x) =>
                      values.users.some((y) => y.label === x.firstName)
                    );
                    console.log(values.users);
                    console.log(res);

                    let newTask = {
                      id: v4(),
                      title: values.title,
                      img: values.imgs,
                      desc: values.desc,
                      assigned: res.length !== 0 ? res : values.users,
                      date: values.date,
                    };
                    let newData = [...data[0].tasks, newTask];
                    data[0].tasks = newData;
                    setData([...data]);
                    setSubmitting(false);

                    resetForm();
                  }, 400);
                }}
              >
                {({ isSubmitting, setFieldValue, values }) => (
                  <Form>
                    <div className="mb-3">
                      <label>Title</label>
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

                    <div className="mb-3">
                      <MyTextArea
                        label="Description"
                        name="desc"
                        rows="4"
                        placeholder="Enter Description"
                      />
                    </div>

                    <div className="mb-3">
                      <label>Select user</label>
                      <Select
                        defaultValue={[options[1]]}
                        isMulti
                        name="users"
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(selectedOption) => {
                          setFieldValue("users", selectedOption);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Date</label>
                      <Field type="date" name="date" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <label>Upload Image</label>
                      <Field
                        type="file"
                        className="form-control"
                        name="img"
                        onChange={(e) => {
                          setFieldValue(
                            "imgs",
                            URL.createObjectURL(e.target.files[0])
                          );
                        }}
                      />
                      {values.imgs && (
                        <img
                          src={values.imgs}
                          className="w-100 mt-2 imgHeight"
                        />
                      )}
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
                        data-bs-dismiss={
                          values.title !== "" && values.desc !== "" && "modal"
                        }
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

export default AddModal;
