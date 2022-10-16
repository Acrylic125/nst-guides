import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useEffect, useId, useState } from "react";

/** @type {import("next").NextPage} */
const Page = () => {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);

  const [fetchStatus, setFetchStatus] = useState(null);
  const [insertStatus, setInsertStatus] = useState(null);
  const [pageError, setPageError] = useState(null);
  const supabaseClient = useSupabaseClient();

  async function fetchCheckboxData() {
    if (fetchStatus === "loading") {
      return;
    }

    setFetchStatus("loading");
    const { error, data } = await supabaseClient
      .from("checkbox_casestudy_1_2")
      .select("*")
      .order("created_at", {
        ascending: false,
      })
      .limit(1);
    setFetchStatus("loaded");
    if (error) {
      setPageError(error);
      throw error;
    }

    return data;
  }

  async function insertCheckboxData({ option_1, option_2, option_3 }) {
    if (insertStatus === "loading") {
      return;
    }

    setInsertStatus("loading");
    const { error, data } = await supabaseClient
      .from("checkbox_casestudy_1_2")
      .insert([
        {
          option_1,
          option_2,
          option_3,
        },
      ])
      // select the inserted record. No point refetching if it can already
      // be found in this response.
      .select();
    setInsertStatus("loaded");
    if (error) {
      setPageError(error);
      throw error;
    }

    return data;
  }

  function setCheckboxOptions({ option_1, option_2, option_3 }) {
    setOption1(option_1);
    setOption2(option_2);
    setOption3(option_3);
  }

  useEffect(() => {
    (async () => {
      const data = await fetchCheckboxData();
      const record = data instanceof Array && data.length > 0 ? data[0] : null;

      if (record) {
        setCheckboxOptions(record);
      }
    })();
  }, []);

  function handleCheckbox1Change(event) {
    setOption1(event.target.checked);
  }
  function handleCheckbox2Change(event) {
    setOption2(event.target.checked);
  }
  function handleCheckbox3Change(event) {
    setOption3(event.target.checked);
  }

  function handleViewForm() {
    console.log("option1", option1);
    console.log("option2", option2);
    console.log("option3", option3);
  }
  async function handleSubmitForm(event) {
    event.preventDefault();
    await insertCheckboxData({ option_1: option1, option_2: option2, option_3: option3 });
  }

  if (fetchStatus === null || fetchStatus === "loading") {
    return <div>Loading...</div>;
  }
  if (pageError !== null) {
    return <div>Error: {pageError.message}</div>;
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
      <div className="flex gap-4">
        <button type="button" onClick={handleViewForm}>
          View Form
        </button>
        <button type="submit" disabled={insertStatus === "loading"}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Page;
