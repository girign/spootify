import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PageLayout from "../components/PageLayout";
import pages from "./pages";
import { FALLBACK_PAGE } from "./constants";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {pages.withoutLayout.map((page, index) => (
          <Route {...page} key={index} />
        ))}
        <Route element={<PageLayout pages={pages} />}>
          {pages.withLayout.map((page, index) => (
            <Route {...page} key={index} />
          ))}
        </Route>

        <Route path="*" element={<Navigate to={FALLBACK_PAGE} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
