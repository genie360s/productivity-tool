"use client";
import React, { useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Checklist from "@editorjs/checklist";
import List from "@editorjs/list";
import Quote from '@editorjs/quote';
import LinkTool from '@editorjs/link';
import SimpleImage from "@editorjs/simple-image";
import Embed from '@editorjs/embed';

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
    <div className="w-[50vw]" id="editorjs">
      Timeline Component
    </div>
  );
};

const TodoListComponent: React.FC = () => {
  return <div>To-Do List Component</div>;
};

const MentalRemindersComponent: React.FC = () => {
  return <div>Mental Reminders Component</div>;
};

const MyJournalComponent: React.FC = () => {
  return <div>My Journal Component</div>;
};

// some editor configuration
// Function to wait for an element with a given ID to be available
const waitForElement = async (editorjs: string) => {
    while (!document.getElementById(editorjs)) {
      await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for 100 milliseconds
    }
  };
  
  // Async function to initialize EditorJS
  const initializeEditor = async () => {
    await waitForElement('editorjs');
    
    // Element with ID "editorjs" is now available
    const editor = new EditorJS({
      holder: 'editorjs',
      // Other Editor.js configuration options
      tools: {
        header: Header,
        image: SimpleImage,
        embed: Embed,
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered',
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
        },
      },
    });
  };
  
  // Call the async function to initialize EditorJS
  initializeEditor();
  
//ends here

export default Dashboard;
