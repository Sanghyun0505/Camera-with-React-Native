import Router from "./Router";
import PageTemplate from "./components/Common/PageTemplate";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <PageTemplate>
        <Router />
      </PageTemplate>
    </RecoilRoot>
  );
}
