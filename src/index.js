import React, { Suspense } from "react";
import { render } from "react-dom";
import App from "./App";
import { RecoilRoot } from "recoil";

render(
  <Suspense fallback={<div>loading..</div>}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Suspense>,
  document.getElementById("root")
);
