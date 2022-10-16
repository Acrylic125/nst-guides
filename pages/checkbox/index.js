import React, { useId, useState } from "react";

/** @type {import("next").NextPage} */
const Page = () => {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);

  function handleCheckbox1Change(event) {
    setOption1(event.target.checked);
  }
  function handleCheckbox2Change(event) {
    setOption2(event.target.checked);
  }
  function handleCheckbox3Change(event) {
    setOption3(event.target.checked);
  }

  return (
    <form>
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
    </form>
  );
};

// const Page = () => {
//   const [option1, setOption1] = useState(false);
//   const [option2, setOption2] = useState(false);
//   const [option3, setOption3] = useState(false);

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
//       <div className="flex flex-col">
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

// const Page = () => {
//   const [checked, setChecked] = useState(false);

//   function handleCheckboxChange(event) {
//     setChecked(event.target.checked);
//   }

//   return (
//     <form>
//       <label className="flex items-center gap-4">
//         <input type="checkbox" name="Checked" checked={checked} onChange={handleCheckboxChange} />
//         Checked
//       </label>
//     </form>
//   );
// // };

// const Page = () => {
//   const [checked, setChecked] = useState(false);

//   function handleCheckboxChange(event) {
//     setChecked(event.target.checked);
//   }

//   return (
//     <form>
//       <label>
//         <input type="checkbox" name="Checked" checked={checked} onChange={handleCheckboxChange} />
//         Checked
//       </label>
//     </form>
//   );
// };

// const Page = () => {
//   return (
//     <form>
//       <label>
//         <input type="checkbox" name="Checked" />
//         Checked
//       </label>
//     </form>
//   );
// };

export default Page;
