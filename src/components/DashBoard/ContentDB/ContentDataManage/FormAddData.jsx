import React from "react";

const FormAddData = (props) => {
    const data = props.data
  return (
    <div className={data.colSpan}>
      <p>{data.title}</p>
      <input
        required
        onChange={(e) => data.onChangeValueHandler(e)}
        className="border w-full"
        type="text"
        name={data.name}
        placeholder={data.placeholder}
      />
      {data.formError && (
        <p className="text-red-600">{data.formError}</p>
      )}
    </div>
  );
};

export default FormAddData;
