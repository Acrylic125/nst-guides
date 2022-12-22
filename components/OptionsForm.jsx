"use client";
import { useState } from "react";

// const OptionsForm = ({ defaultOptions }) => {
//   const [option1, setOption1] = useState(defaultOptions?.option_1 ?? null);
//   const [option2, setOption2] = useState(defaultOptions?.option_2 ?? null);
//   const [option3, setOption3] = useState(defaultOptions?.option_3 ?? null);

//   function handleCheckbox1Change(event) {
//     setOption1(event.target.checked);
//   }
//   function handleCheckbox2Change(event) {
//     setOption2(event.target.checked);
//   }
//   function handleCheckbox3Change(event) {
//     setOption3(event.target.checked);
//   }

//   return (
//     <form>
//       <div className="flex flex-col gap-4">
//         <label className="flex items-center gap-4">
//           <input type="checkbox" name="Checked" checked={option1} onChange={handleCheckbox1Change} />
//           Option 1
//         </label>
//         <label className="flex items-center gap-4">
//           <input type="checkbox" name="Checked" checked={option2} onChange={handleCheckbox2Change} />
//           Option 2
//         </label>
//         <label className="flex items-center gap-4">
//           <input type="checkbox" name="Checked" checked={option3} onChange={handleCheckbox3Change} />
//           Option 3
//         </label>
//       </div>
//     </form>
//   );
// };

const OptionsForm = ({ defaultOptions, onSubmit }) => {
  const [option1, setOption1] = useState(defaultOptions?.option_1 ?? null);
  const [option2, setOption2] = useState(defaultOptions?.option_2 ?? null);
  const [option3, setOption3] = useState(defaultOptions?.option_3 ?? null);

  function handleCheckbox1Change(event) {
    setOption1(event.target.checked);
  }
  function handleCheckbox2Change(event) {
    setOption2(event.target.checked);
  }
  function handleCheckbox3Change(event) {
    setOption3(event.target.checked);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    onSubmit && onSubmit({ option1, option2, option3 });
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-4">
          <input type="checkbox" name="Checked" checked={option1} onChange={handleCheckbox1Change} />
          Option 1
        </label>
        <label className="flex items-center gap-4">
          <input type="checkbox" name="Checked" checked={option2} onChange={handleCheckbox2Change} />
          Option 2
        </label>
        <label className="flex items-center gap-4">
          <input type="checkbox" name="Checked" checked={option3} onChange={handleCheckbox3Change} />
          Option 3
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default OptionsForm;
