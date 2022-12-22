import React from "react";
import { useForm } from "react-hook-form";

/** @type {import("next").NextPage} */
const Page = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      options: [],
    },
  });
  const options = watch("options", []);

  function getNumberOfCheckedOptions() {
    return options.length;
  }
  const handleSubmitForm = handleSubmit((data) => {
    if (getNumberOfCheckedOptions() > 2) {
      return;
    }
    const options = new Set(data.options);
    console.log("option1", options.has("option1"));
    console.log("option2", options.has("option2"));
    console.log("option3", options.has("option3"));
  });

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-4">
          <input type="checkbox" name="Checked" value="option1" {...register("options")} />
          Option 1
        </label>
        <label className="flex items-center gap-4">
          <input type="checkbox" name="Checked" value="option2" {...register("options")} />
          Option 2
        </label>
        <label className="flex items-center gap-4">
          <input type="checkbox" name="Checked" value="option3" {...register("options")} />
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
