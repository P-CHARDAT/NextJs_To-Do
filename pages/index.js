import Head from "next/head";
import Layout from "../components/layout";
import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (userInput.trim().length !== 0) {
      setTodoList([userInput, ...todoList]);
    } else {
      alert("Put a valid entry please");
    }
    setUserInput("");
  };

  const handleDelete = (todo) => {
    let tempArr = [...todoList];
    tempArr.splice(todoList.indexOf(todo), 1);
    setTodoList(tempArr);
  };

  return (
    <Layout>
      <Head>
        <title>ToDoList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>My simple to do list</h1>
      <h2><a href="https://github.com/P-CHARDAT">To contact me !</a></h2>
      <form>
        <input
          type="text"
          value={userInput}
          placeholder="Enter what you need to do"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        {todoList.length != 0
          ? todoList.map((todo, index) => {
              return (
                <li key={index}>
                  {todo}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(todo);
                    }}
                  >
                    Task Done
                  </button>
                </li>
              );
            })
          : "Enter what you need to do !"}
      </ul>
    </Layout>
  );
}
