"use client";

import { useState } from "react";


export default function SqsFormatter() {
  const templ = {
    "Type": "Notification",
    "TopicArn": "",
    "Message": {
    }
  }

  let [userInput, setUserInput] = useState();
  let [result, setResult] = useState("");

  function formatText(userInputText: string) {
    console.log("formatting text" + userInputText);

    const updated = Object.assign({}, templ, { Message: JSON.stringify(JSON.parse(userInputText)) });
    setResult(JSON.stringify(updated));
  }
  function onSubmit(e: any, userInput: any) {
    e.preventDefault();
    formatText(userInput);
  }

  return (
    <form className="flex flex-col w-1/2" onSubmit={e => onSubmit(e, userInput)}>
      <textarea type="text" onChange={e => setUserInput(e.target.value)} className="text-raisin-black rounded-lg"> </textarea>
      <button className="rounded hover:cinereous bg-chinese-violet text-raisin-black"> Format </button>
      <div>
        {result ? result : ""}
      </div>
    </form>
  )
}
