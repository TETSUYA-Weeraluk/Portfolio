import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDataManagement } from "../../../../../store/Dashboard/DataManagement";
import DivButton from "../DivButton";
import FormAddData from "../FormAddData";
import OverlayAddData from "../OverlayAddData";

const OverlayPortfolio = (props) => {
  const showOverlay = props.showOverlay;
  const [valueInput, setValueInput] = useState({
    title_project: "",
    descriptions: "",
    tool: "",
    link_demo: "",
    link_sourceCode: "",
    imgUrl: "",
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const addData = (e) => {
    e.preventDefault();
    setFormError(validate(valueInput));
    setIsSubmit(true);
  };

  const onChangeValueHandler = (e) => {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value });
  };

  const validate = (value) => {
    const errorMessage = {};

    if (value.title_project.trim() === "") {
      errorMessage.title_project = "Please input Title Project";
    }
    if (value.descriptions.trim() === "") {
      errorMessage.descriptions = "Please Descriptions Project";
    }
    if (value.tool.trim() === "") {
      errorMessage.tool = "Please input Tool";
    }
    if (value.imgUrl.trim() === "") {
      errorMessage.imgUrl = "Please input Url Image";
    }
    return errorMessage;
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
        table: "project",
        column: [
          "id_users",
          "project_img",
          "title",
          "descriptions",
          "tool",
          "link_demo",
          "link_sourceCode",
        ],
        value: [
          `"1"`,
          `"${valueInput.imgUrl}"`,
          `"${valueInput.title_project}"`,
          `"${valueInput.descriptions}"`,
          `"${valueInput.tool}"`,
          `"${valueInput.link_demo}"`,
          `"${valueInput.link_sourceCode}"`,
        ],
      };
    //   console.log(data)
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
  }, [dispatch , formError , isSubmit , showOverlay , valueInput]);

  const listItem = [
    {
      colSpan: "col-span-2",
      title: "Title Project",
      onChangeValueHandler: onChangeValueHandler,
      name: "title_project",
      placeholder: "AppFood",
      formError: formError.title_project,
    },
    {
      colSpan: "col-span-2",
      title: "Descriptions",
      onChangeValueHandler: onChangeValueHandler,
      name: "descriptions",
      placeholder: "Web application for order food.",
      formError: formError.descriptions,
    },
    {
      colSpan: "col-span-2",
      title: "Tool",
      onChangeValueHandler: onChangeValueHandler,
      name: "tool",
      placeholder: "ReactJs , Tailwind , Redux",
      formError: formError.tool,
    },
    {
      colSpan: "col-span-2",
      title: "Link DEMO",
      onChangeValueHandler: onChangeValueHandler,
      name: "link_demo",
      placeholder: "http://localhost:3000/project/appfood",
      formError: formError.link_demo,
    },
    {
      colSpan: "col-span-2",
      title: "Link SourceCode",
      onChangeValueHandler: onChangeValueHandler,
      name: "link_soruceCode",
      placeholder: "https://github.com/TETSUYA-Weeraluk/App-Food",
      formError: formError.link_soruceCode,
    },
  ];
  return (
    <OverlayAddData>
      <form
        onSubmit={addData}
        className="bg-white w-[400px] p-4 rounded-md text-black"
      >
        <p className="text-center font-bold underline mb-4">Add Project</p>
        {/* กล่องเพิ่ม Project */}
        <div className="grid grid-cols-2 gap-4">
          <div className=" mx-auto col-span-2">
            <img
              className="h-[150px] w-[150px]"
              src={valueInput.imgUrl}
              alt=""
            />
          </div>
          {listItem &&
            listItem.map((data, index) => (
              <FormAddData key={index} data={data} />
            ))}

          {/* กล่องเพิ่ม Url Image */}
          <div className="col-span-2">
            <p>Url Image</p>
            <input
              required
              onChange={(e) => onChangeValueHandler(e)}
              className="border w-full"
              type="text"
              name="imgUrl"
              placeholder="https://sv1.img.in.th/U1Qj9r.png"
            />
            {formError.imgUrl && (
              <p className="text-red-600">{formError.imgUrl}</p>
            )}
          </div>
        </div>

        {/* กล่องใส่ ปุ่ม Add , Cancel */}
        <DivButton showOverlay={showOverlay} />
      </form>
    </OverlayAddData>
  );
};

export default OverlayPortfolio;
