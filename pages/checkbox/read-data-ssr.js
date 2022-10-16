import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import React, { useState } from "react";

/** @type {import("next").NextPage<import("next").InferGetServerSidePropsType<typeof getServerSideProps>>} */
// const Page = ({ pageErrorMessage, options }) => {
//   // ...
// };
const Page = ({ pageErrorMessage, options }) => {
  const [option1, setOption1] = useState(options?.option_1 ?? null);
  const [option2, setOption2] = useState(options?.option_2 ?? null);
  const [option3, setOption3] = useState(options?.option_3 ?? null);

  function handleCheckbox1Change(event) {
    setOption1(event.target.checked);
  }
  function handleCheckbox2Change(event) {
    setOption2(event.target.checked);
  }
  function handleCheckbox3Change(event) {
    setOption3(event.target.checked);
  }

  if (pageErrorMessage) {
    return <div>Error: {pageErrorMessage}</div>;
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

export default Page;

/** @type {import("next").GetServerSideProps} */
// export const getServerSideProps = withPageAuth({
//   authRequired: false,
//   getServerSideProps: async (context, supabaseClient) => {
//     // ...
//   },
// });
export const getServerSideProps = withPageAuth({
  authRequired: false,
  getServerSideProps: async (context, supabaseClient) => {
    const { error, data } = await supabaseClient
      .from("checkbox_casestudy_1_1")
      .select("*")
      .order("created_at", {
        ascending: false,
      })
      .limit(1);

    if (error) {
      return {
        props: {
          pageErrorMessage: error.message,
        },
      };
    }

    const record = data instanceof Array && data.length > 0 ? data[0] : null;
    return {
      props: {
        options: record,
      },
    };
  },
});
