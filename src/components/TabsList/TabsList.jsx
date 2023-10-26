import React, { Suspense, useEffect, useState } from "react";
import tabs from "../../data/tabs.json";
import TabItem from "./TabItem/TabItem.jsx";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import ReactLoading from "react-loading";

import "./TabsList.scss";

const TabsList = () => {
  const [data, setData] = useState();
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (tabs) {
      const sortedTabs = getOrderedData(tabs);
      setData(sortedTabs);
      setInitialActiveTab();   
    }
  }, []);

  const setInitialActiveTab = () => {
    const defaultActiveTab = location.pathname.substring(1);
    if(defaultActiveTab){
      setActiveTab(defaultActiveTab);
      return
    }    
    setActiveTab(tabs?.[0].id);   
  };

  const handleClick = ({ currentTarget }) => {
    setActiveTab(currentTarget.id);
    navigate(`/${currentTarget.id}`);
  };

  const getOrderedData = (parsedData) => {
    return parsedData.sort((a, b) => a.order - b.order);
  };
  

  return (
    <div className="wrapper">
      <ul className="tabs-list">
        {data?.map((tab) => (
          <TabItem
            key={tab.id}
            title={tab.title}
            handleClick={handleClick}
            id={tab.id}
            isActive={tab.id === activeTab}
          />
        ))}
      </ul>
      {activeTab && <div className="tab-content">
        <Suspense
          fallback={
            <div className="loading">
              <ReactLoading
                type="spinningBubbles"
                color="#ddd"
                height={"100%"}
                width={"100%"}
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>}
    </div>
  );
};

export default TabsList;
