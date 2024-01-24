"use client";
import React, { useState } from "react";
import MarkdownEditor from "../components/MarkdownTab";
import TodoList from "../components/TodoLIst";
import EditorTool from "../components/EditorTool";
import QuillEditor from "../components/QuillEditor";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("timeline");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-transparent border border-slate-400 p-5  w-[75vw] items-center mx-auto mt-8 shadow-lg rounded-lg">
      <div className="flex mx-auto items-stretch justify-center  ">
        <div>
          <button
            className={`px-4 py-2 rounded-l-lg ${
              activeTab === "timeline" ? "bg-green-500" : "bg-orange-500"
            }`}
            onClick={() => handleTabChange("timeline")}
          >
            Timeline
          </button>
        </div>
        <div>
          <button
            className={`px-4 py-2 ${
              activeTab === "todo" ? "bg-green-500" : "bg-orange-500"
            }`}
            onClick={() => handleTabChange("todo")}
          >
            To-Do List
          </button>
        </div>
        <div>
          <button
            className={`px-4 py-2 ${
              activeTab === "reminders" ? "bg-green-500" : "bg-orange-500"
            }`}
            onClick={() => handleTabChange("reminders")}
          >
            Mental Reminders
          </button>
        </div>
        <div>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              activeTab === "journal" ? "bg-green-500" : "bg-orange-500"
            }`}
            onClick={() => handleTabChange("journal")}
          >
            My Journal
          </button>
        </div>
      </div>
      <div className="border border-slate-400 shadow-lg py-5 rounded-lg mx-auto px-5 mt-8 w-[40vw] ">
        {activeTab === "timeline" && <TimelineComponent />}
        {activeTab === "todo" && <TodoListComponent />}
        {activeTab === "reminders" && <MentalRemindersComponent />}
        {activeTab === "journal" && <MyJournalComponent />}
      </div>
    </div>
  );
};

const TimelineComponent: React.FC = () => {
  return (
    <div className="w-[50vw]" >
      Timeline Component
     <QuillEditor />
    </div>
  );
};

const TodoListComponent: React.FC = () => {
  return <div>To-Do List Component
  <MarkdownEditor />
  </div>;
};

const MentalRemindersComponent: React.FC = () => {
  return <div>Mental Reminders Component
     <EditorTool />
  </div>;
};

const MyJournalComponent: React.FC = () => {
  return <div>My Journal Component
    <TodoList />
  </div>;
};




export default Dashboard;
