import { ErrorMessage, useField } from "formik";

export const MyTextArea = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="form-control" {...field} {...props} />
      {/* {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null} */}
      <ErrorMessage
        name="desc"
        component="div"
        className="text-danger p-2 mt-1"
      />
    </>
  );
};
