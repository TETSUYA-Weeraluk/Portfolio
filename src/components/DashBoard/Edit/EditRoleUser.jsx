import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchRole } from "../../../store/user/user";
import { userEditAction } from "../../../store/user/userEditSlice";

const EditRoleUser = (props) => {
    const { title, value , nameRole } = props;
    const [toggleEdit, settoggleEdit] = useState(false);
    const [valueInput, setValueInput] = useState(props.value);
    const allRole = useSelector(state => state.user.role)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchRole());
    },[dispatch])

    const confirmPopupToggleHandler = () => {
        dispatch(userEditAction.editPopupConfirm({title : title , value : nameRole}));
      };
    
      const selectChangeDataHandler = (e) => {
        setValueInput(+e.target.value);
        const index = +e.target.value - 1
        dispatch(userEditAction.inputChangeDataHandler(allRole[index].name_role));
      };
    
      const cancelEdit = () => {
        setValueInput(props.value);
        settoggleEdit(!toggleEdit);
      };
    
      let classCheck = "";
      let buttonDis = false;
      if (valueInput === props.value) {
        classCheck = "hover:text-[#525252] hover:cursor-not-allowed";
        buttonDis = true;
      }
  
  return (
    <>
      {valueInput !== null && (
        <div className="flex justify-between gap-5">
          <p className="font-bold text-lg">{title}</p>
          {toggleEdit && (
            <div className="flex items-center border h-full">
              <select value={valueInput} className="bg-[#131313] outline-none" name="role" id="role" onChange={selectChangeDataHandler} >
                {allRole.map((data) => (
                   <option key={data.id_role} value={data.id_role}>{data.name_role}</option>
                ))}
              </select>

              <button
                onClick={confirmPopupToggleHandler}
                disabled={buttonDis}
                className={`bg-[#131313] border-l p-1` + classCheck}
              >
                {" "}
                <BiCheck size={20} />
              </button>
              <button
                onClick={cancelEdit}
                className="bg-[#131313] border-l hover:text-[#ff0000] p-1"
              >
                {" "}
                <IoIosClose size={20} />
              </button>
            </div>
          )}
          {!toggleEdit && (
            <button
              className="py-1 px-2 bg-[#131313] rounded-md flex items-center gap-3"
              onClick={() => settoggleEdit(!toggleEdit)}
            >
              <span>{nameRole}</span>
              <AiOutlineEdit size={20} />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default EditRoleUser;
