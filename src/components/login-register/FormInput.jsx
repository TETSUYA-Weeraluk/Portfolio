import React from "react";

const FormInput = (props) => {
  const { colspan, onChangeInput, icon, formerror, title, ...inputProps } = props;
  
  let classError = ''
  if(formerror !== undefined){
    classError = 'border border-red-600'
  }
  return (
    <>
      <div className={`col-span-${colspan}`}>
        <div className={`py-2 px-4 bg-white/60 rounded-xl mb-2 ` + classError }>
          <label className=" text-xs">{title}</label>
          <div className="flex">
            <input
              className="w-full bg-transparent outline-none text-black peer"
              onChange={onChangeInput}
              {...inputProps}
            ></input>
            {icon}
          </div>
        </div>
          <span className="text-red-600 ">{formerror}</span>
      </div>
    </>
  );
};

export default FormInput;
