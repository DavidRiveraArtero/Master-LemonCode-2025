import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./styles.css";
import { FilterMemberProvider } from "./common/filter.context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<FilterMemberProvider><App /></FilterMemberProvider>);
