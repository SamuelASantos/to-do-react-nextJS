"use client"

import { Tasks } from "@/types/Tasks";
import { useState } from "react";

const Page = () => {
  const [itemInput, setItemInput] = useState<string>('');

  const [task, setTask] = useState<Tasks[]>([
    { label: "Comprar pão", checked: false },
    { label: "Postar projeto no git", checked: true }
  ]);

  const deleteTask = (index: number) => {
    setTask(
      task.filter((_, key) => key !== index)
    );
  }

  const addTask = () => {
    if (itemInput.trim() === '') return;
    setTask([
      ...task,
      { label: itemInput, checked: false }
    ]);
    setItemInput("");
  }

  const toggleInput = (index: number) => {
    let newList = [...task];
    newList[index].checked = !newList[index].checked;

    setTask(newList);
  }

  return (
    <div className="w-screen flex justify-center p-3 text-center">
      <div className="flex-col gap-5">
        <h1 className="mb-3 text-3xl">SamSantos To-Do</h1>
        <input
          className="block w-96 px-3 py-2 mb-3 rounded-md text-black text-lg"
          onChange={e => setItemInput(e.target.value)}
          type="text"
          placeholder="Adicione a tarefa..."
          value={itemInput}
        />
        <button className="bg-orange-400 px-3 py-2 mb-3 rounded-md border border-orange-700 text-xl" onClick={addTask}>Adicionar</button>
        <ul className="mt-5">
          {task.map((item, index) => (
            <li key={index} className="text-xl text-left"><input className="h-4 w-4 mr-4" onChange={() => toggleInput(index)} type="checkbox" checked={item.checked} />{item.label} - <button className=" hover:underline" onClick={() => deleteTask(index)}>[Deletar]</button> </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page;