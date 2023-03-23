import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDataManagement } from "../../../../../store/Dashboard/DataManagement";
import DivButton from "../DivButton";
import FormAddData from "../FormAddData";
import OverlayAddData from "../OverlayAddData";

const OverlayAddRowHero = (props) => {
  const showOverlay = props.showOverlay;
  const [valueInput, setValueInput] = useState({
    title: "",
    descriptions: "",
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const onChangeValueHandler = (e) => {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value });
  };

  const validate = (value) => {
    const errorMessage = {};
    if (value.title.trim() === "") {
      errorMessage.title = "Please input title";
    }
    if (value.descriptions.trim() === "") {
      errorMessage.descriptions = "Please input descriptions";
    }
    return errorMessage;
  };

  const addData = (e) => {
    e.preventDefault();
    setFormError(validate(valueInput));
    setIsSubmit(true);
  };

  useEffect(() => {
    const sendRequest = async (data) => {
      const res = await fetch(
        "http://localhost:7777/api/dashboard/insertdatamanagement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        throw new Error("Request all data management fail");
      }
      const resData = await res.json();
      console.log(resData);
    };
    if (Object.keys(formError).length === 0 && isSubmit) {
      const data = {
        table: "hero",
        column: ["id_users", "title", "descriptions"],
        value: [`"1"`, `"${valueInput.title}"`, `"${valueInput.descriptions}"`],
      };
      sendRequest(data);
      setValueInput({
        title: "",
        descriptions: "",
      });
      showOverlay(false);
      dispatch(getAllDataManagement());
    }
  }, [isSubmit, formError, dispatch, showOverlay, valueInput]);

  const listItem = [
    {
      colSpan: "",
      title: "Title",
      onChangeValueHandler: onChangeValueHandler,
      name: "title",
      placeholder: "Age",
      formError: formError.title,
    },
    {
      colSpan: "",
      title: "Descriptions",
      onChangeValueHandler: onChangeValueHandler,
      name: "descriptions",
      placeholder: "18",
      formError: formError.descriptions,
    },
  ];

  return (
    <>
      <OverlayAddData>
        <form className="bg-white p-4 rounded-md text-black" onSubmit={addData}>
          <p className="text-center font-bold underline mb-4">
            Add information hero
          </p>
          {/* กล่องเพิ่ม Title  descriptions*/}
          <div className="grid grid-cols-2 gap-4">
            {listItem.map((data, index) => (
              <FormAddData key={index} data={data} />
            ))}
          </div>
          {/* กล่องใส่ ปุ่ม Add , Cancel */}
          <DivButton showOverlay={showOverlay} />
        </form>
      </OverlayAddData>
    </>
  );
};

export default OverlayAddRowHero;
