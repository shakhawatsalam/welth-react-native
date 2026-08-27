import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href='/(root)/(tabs)' />;
  // return <Redirect href='/sign-in' />;
}
