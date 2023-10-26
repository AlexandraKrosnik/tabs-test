import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import TabsList from "../TabsList/TabsList.jsx";
import data from "../../data/tabs.json";

const App = () => {
  const indexRoute = data.find((item) => item.order === 0);
  const IndexComponent = lazy(() => import(`../tabs${indexRoute.path}`));
 
  return (
    <Routes>
      <Route path="/" element={<TabsList />}>
        <Route index element={<IndexComponent />} />
        {data.map((item) => {
          const SpecificStory = lazy(() => import(`../tabs${item.path}`));

          return (
            <Route key={item.id} path={item.id} element={<SpecificStory />} />
          );
        })}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
