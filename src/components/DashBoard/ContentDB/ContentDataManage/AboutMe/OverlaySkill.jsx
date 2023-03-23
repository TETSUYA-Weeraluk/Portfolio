import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDataManagement } from "../../../../../store/Dashboard/DataManagement";
import DivButton from "../DivButton";
import OverlayAddData from "../OverlayAddData";

const OverlaySkill = (props) => {
  const listSkill = props.data;
  const showOverlay = props.showOverlay;
  const [valueInput, setValueInput] = useState({
    title: "",
    urlImg: "",
  });
  const [imgSelected, setImgSelected] = useState(listSkill[0].icons_skill);
  const [checkAnotherSkill, setCheckAnotherSkill] = useState(false);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch()

  const validate = (value) => {
    const errorMessage = {};

    if (value.title.trim() === "") {
      errorMessage.title = "Please input School Name";
    }
    if (value.urlImg.trim() === "") {
      errorMessage.urlImg = "Please input Degree";
    }
    return errorMessage;
  };

  const addData = (e) => {
    e.preventDefault();
    setFormError(validate(valueInput));
    setIsSubmit(true);
  };

  const onChangeValueHandler = (e) => {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value });
  };

  const selectSkillHandler = (e) => {
    const imgSelectFilter = listSkill.filter(
      (data) => data.id_skill_item === parseInt(e)
    );
    setImgSelected(imgSelectFilter[0].icons_skill);
  };

  useEffect(() => {
    const sendRequest = async (data) => {
      const res = await fetch(
        "http://localhost:7777/api/dashboard/insertItemSkill",
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
        column: ["title", "icons_skill"],
        value: [`"1"`, `"${valueInput.title}"`, `"${valueInput.urlImg}"`],
      };
      sendRequest(data);
      setValueInput({
        title: "",
        urlImg: "",
      });
      showOverlay(false);
      dispatch(getAllDataManagement());
    }
  }, [formError, isSubmit, showOverlay, valueInput , dispatch]);

  return (
    <>
      <OverlayAddData>
        <form
          onSubmit={addData}
          className="bg-white w-[300px] p-4 rounded-md text-black"
        >
          <p className="text-center font-bold underline mb-4">Add skill</p>
          {/* กล่องเพิ่ม Skill */}
          <div className="grid grid-cols-2 gap-4">
            <p className="font-bold">Skill</p>
            {!checkAnotherSkill && (
              <>
                <div className="flex col-span-2 gap-4 justify-between">
                  <select
                    className="border w-full"
                    name="cars"
                    id="cars"
                    onChange={(e) => selectSkillHandler(e.target.value)}
                  >
                    {listSkill &&
                      listSkill.map((data) => (
                        <option
                          key={data.id_skill_item}
                          value={data.id_skill_item}
                        >
                          {data.title}
                        </option>
                      ))}
                  </select>
                  <img className="h-[50px]" src={imgSelected} alt="" />
                </div>
              </>
            )}

            {checkAnotherSkill && (
              <>
                <div className="flex col-span-2 gap-4">
                  <div className="flex flex-col gap-2 w-full">
                    <p>Title</p>
                    <input
                      onChange={(e) => onChangeValueHandler(e)}
                      className="border"
                      type="text"
                      placeholder="HTML"
                      name="title"
                      value={valueInput.title}
                    />
                    {formError.title && (
                      <p className="text-red-600">{formError.title}</p>
                    )}
                    <p>Url image skill</p>
                    <input
                      onChange={(e) => onChangeValueHandler(e)}
                      className="border"
                      type="text"
                      placeholder="https://sv1.picz.in.th/images/2023/03/16/e67LC9.png"
                      name="urlImg"
                      value={valueInput.urlImg}
                    />
                    {formError.urlImg && (
                      <p className="text-red-600">{formError.urlImg}</p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* กล่อง Checkbox กรณีไม่มีสกิลที่อยู่ใน list database */}
            <div className="col-span-2 text-center text-stone-400">
              <input
                type="checkbox"
                id="anotherSkill"
                name="anotherSkill"
                checked={checkAnotherSkill}
                onChange={(e) => setCheckAnotherSkill(!checkAnotherSkill)}
              />
              <label htmlFor="anotherSkill"> another skill ?</label>
            </div>
          </div>

          {/* กล่องใส่ ปุ่ม Add , Cancel */}
          <DivButton showOverlay={showOverlay} />
        </form>
      </OverlayAddData>
    </>
  );
};

export default OverlaySkill;
