import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDataManagement } from "../../../../../store/Dashboard/DataManagement";
import DivButton from "../DivButton";
import FormAddData from "../FormAddData";
import OverlayAddData from "../OverlayAddData";

const OverlayAddEducation = (props) => {
  const showOverlay = props.showOverlay;
  const [valueInput, setValueInput] = useState({
    school_name: "",
    degree: "",
    city: "",
    start_date: "",
    end_date: "",
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const onChangeValueHandler = (e) => {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value });
  };

  const validate = (value) => {
    const errorMessage = {};

    if (value.school_name.trim() === "") {
      errorMessage.school_name = "Please input School Name";
    }
    if (value.degree.trim() === "") {
      errorMessage.degree = "Please input Degree";
    }
    if (value.city.trim() === "") {
      errorMessage.city = "Please input City";
    }
    if (value.start_date.trim() === "") {
      errorMessage.start_date = "Please input Start Date";
    }
    if (value.end_date.trim() === "") {
      errorMessage.end_date = "Please input End Date";
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
        table: "education",
        column: [
          "id_users",
          "school_name",
          "degree",
          "city ",
          "start_date",
          "end_date",
        ],
        value: [
          `"1"`,
          `"${valueInput.school_name}"`,
          `"${valueInput.degree}"`,
          `"${valueInput.city}"`,
          `"${valueInput.start_date}"`,
          `"${valueInput.end_date}"`,
        ],
      };
      sendRequest(data);
      setValueInput({
        school_name: "",
        degree: "",
        city: "",
        start_date: "",
        end_date: "",
      });
      showOverlay(false);
      dispatch(getAllDataManagement());
    }
  }, [formError, isSubmit, showOverlay, valueInput, dispatch]);

  const listItem = [
    {
      colSpan: "col-span-2",
      title: "School Name",
      onChangeValueHandler: onChangeValueHandler,
      name: "school_name",
      placeholder: "Bankok University",
      formError: formError.school_name,
    },
    {
      colSpan: "col-span-2",
      title: "Degree",
      onChangeValueHandler: onChangeValueHandler,
      name: "degree",
      placeholder:
        "COMPUTER SCIENCE, BACHELOR OF INFORMATION TECHNOLOGY AND INNOVATION. Innovation",
      formError: formError.degree,
    },
    {
      colSpan: "col-span-2",
      title: "City",
      onChangeValueHandler: onChangeValueHandler,
      name: "city",
      placeholder: "Phathum thani, Thailand",
      formError: formError.city,
    },
    {
      colSpan: "",
      title: "Start Date",
      onChangeValueHandler: onChangeValueHandler,
      name: "start_date",
      placeholder: "2017",
      formError: formError.start_date,
    },
    {
      colSpan: "",
      title: "End Date",
      onChangeValueHandler: onChangeValueHandler,
      name: "end_date",
      placeholder: "2021",
      formError: formError.end_date,
    },
  ];

  return (
    <>
      <OverlayAddData>
        <form onSubmit={addData} className="bg-white p-4 rounded-md text-black">
          <p className="text-center font-bold underline mb-4">
            Add information education
          </p>
          {/* กล่องเพิ่ม School Name , degree , city , start_date , end_date*/}
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

export default OverlayAddEducation;
