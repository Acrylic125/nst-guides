import React, { useState } from "react";

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

  function getNumberOfCheckedOptions() {
    return [option1, option2, option3].filter((option) => option === true).length;
  }
  function handleSubmitForm(event) {
    event.preventDefault();
    if (getNumberOfCheckedOptions() > 2) {
      return;
    }
    console.log("option1", option1);
    console.log("option2", option2);
    console.log("option3", option3);
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
        <button className="disabled:opacity-50" type="submit" disabled={getNumberOfCheckedOptions() > 2}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Page;
