import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import "../styles/globals.css";
import RootLayoutWrapper from "./RootLayoutWrapper";

const RootLayout = async ({ children }) => {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html>
      <head />
      <body>
        <RootLayoutWrapper initialSession={session}>{children}</RootLayoutWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
