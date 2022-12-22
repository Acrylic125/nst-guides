import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import OptionsForm from "../../../components/OptionsForm";
import React from "react";

async function getData() {
  const supabaseClient = createServerComponentSupabaseClient({
    headers,
    cookies,
  });
  return await supabaseClient
    .from("checkbox_casestudy_1_1")
    .select("*")
    .order("created_at", {
      ascending: false,
    })
    .limit(1);
}

/** @type {import("next").NextPage<import("next").InferGetServerSidePropsType<typeof getServerSideProps>>} */
// const Page = ({ pageErrorMessage, options }) => {
//   // ...
// };
const Page = async () => {
  const { error, data } = await getData();

  const pageErrorMessage = error?.message;
  if (pageErrorMessage) {
    return <div>Error: {pageErrorMessage}</div>;
  }

  const options = data instanceof Array ? data[0] : null;
  return <OptionsForm defaultOptions={options} />;
};

export default Page;
