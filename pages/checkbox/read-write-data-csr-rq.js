import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useEffect, useId, useState } from "react";
import { useMutation, useQuery } from "react-query";
import OptionsForm from "../../components/OptionsForm";

/** @type {import("next").NextPage} */
// const Page = () => {
//   const supabaseClient = useSupabaseClient();
//   const {
//     data: options,
//     error: optionsError,
//     isError: optionsIsError,
//     isLoading: optionsIsLoading,
//   } = useQuery(["options"], async () => {
//     const { error, data } = await supabaseClient
//       .from("checkbox_casestudy_1_2")
//       .select("*")
//       .order("created_at", {
//         ascending: false,
//       })
//       .limit(1);
//     if (error) {
//       throw error;
//     }

//     return data && data[0];
//   });
// const {} = useMutation(async ({ option1, option2, option3 }) => {
//   const { error } = await supabaseClient.from("checkbox_casestudy_1_1").insert([
//     {
//       option_1: option1,
//       option_2: option2,
//       option_3: option3,
//     },
//   ]);
//   if (error) {
//     throw error;
//   }
// });

//   if (optionsIsLoading) {
//     return <div>Loading...</div>;
//   }
//   if (optionsIsError || optionsError) {
//     return <div>Error: {optionsError?.message}</div>;
//   }

//   return (
//     <form>
//       <div className="flex flex-col gap-4">
//         <label className="flex items-center gap-4">
//           <input type="checkbox" name="Checked" checked={options?.option_1 ?? false} />
//           Option 1
//         </label>
//         <label className="flex items-center gap-4">
//           <input type="checkbox" name="Checked" checked={options?.option_2 ?? false} />
//           Option 2
//         </label>
//         <label className="flex items-center gap-4">
//           <input type="checkbox" name="Checked" checked={options?.option_3 ?? false} />
//           Option 3
//         </label>
//       </div>
//     </form>
//   );
// };

const Page = () => {
  const supabaseClient = useSupabaseClient();
  const {
    data: options,
    error: optionsError,
    isError: optionsIsError,
    isLoading: optionsIsLoading,
  } = useQuery(["options"], async () => {
    const { error, data } = await supabaseClient
      .from("checkbox_casestudy_1_2")
      .select("*")
      .order("created_at", {
        ascending: false,
      })
      .limit(1);
    if (error) {
      throw error;
    }

    return data && data[0];
  });
  const {
    mutate: insertOptions,
    error: insertOptionsError,
    isError: insertOptionsIsError,
    isSuccess: insertOptionsIsSuccess,
    isLoading: insertOptionsIsLoading,
  } = useMutation(async ({ option1, option2, option3 }) => {
    const { error } = await supabaseClient.from("checkbox_casestudy_1_2").insert([
      {
        option_1: option1,
        option_2: option2,
        option_3: option3,
      },
    ]);
    if (error) {
      throw error;
    }
  });

  if (optionsIsLoading) {
    return <div>Loading...</div>;
  }
  if (optionsIsError || optionsError) {
    return <div>Error: {optionsError?.message}</div>;
  }

  return (
    <>
      <OptionsForm defaultOptions={options} onSubmit={insertOptions} />
      {insertOptionsIsLoading && <div>Loading Insertion...</div>}
      {insertOptionsIsError && <div>Insertion Error: {insertOptionsError?.message}</div>}
      {insertOptionsIsSuccess && <div>Insertion Success!</div>}
    </>
  );
};

export default Page;
