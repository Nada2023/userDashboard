import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Card from "./components/Card";
import Table from "./components/Table";

const App = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <div className="flex-1 bg-gray-900">
        <Header />
        <div className="p-5 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card title="Total Users" value="250" color="purple-500" />
            <Card title="New Users" value="15" color="purple-500" />
            <Card title="Top Users" value="200" color="purple-500" />
            <Card title="Other Users" value="35" color="purple-500" />
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default App;
