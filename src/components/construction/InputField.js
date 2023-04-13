import { memo } from "react";

function InputField({ type, name, placeholder = "text", area, value, onChange, infoText = "" }) {
   const inputFieldValue = {
      name,
      placeholder,
      type,
   };

   if (value !== undefined) inputFieldValue.value = value;
   if (onChange !== undefined) inputFieldValue.onChange = onChange;

   return (
      <div className="inputField">
         {
            infoText !== "" &&
            <p className="normalText weUnder free">{infoText}</p>
         }
         {
            area &&
            <textarea {...inputFieldValue}></textarea>
         }
         {
            !area &&
            <input {...inputFieldValue} />
         }
      </div>
   );
}

export default memo(InputField);