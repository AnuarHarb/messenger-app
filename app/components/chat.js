import { useState } from "react";

export default function Chat({ activeUser }) {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const submitMessage = (author) => {
    const newMessage = {
      text: inputValue,
      author: author,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
  };

  const setMessageBackground = (message) => {
    if (message.author === "me") {
      return "justify-end";
    } else {
      return "justify-start";
    }
  };

  return (
    <section>
      <header className="flex px-8 py-4 bg-amber-800 items-center text-3xl">
        <h2>
          Chat -{" "}
          {activeUser ? activeUser.name.first : "Elige un usuario para chatear"}
        </h2>
      </header>
      <section className="border-amber-600 border-2 w-full h-full gap-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${setMessageBackground(message)} my-5`}
          >
            <div
              className={`${
                message.author === "me" ? "bg-blue-300" : "bg-blue-800"
              }  p-2 rounded-4xl w-[50%]`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </section>
      <div className="p-8 bg-amber-200 flex justify-between">
        <input
          className="bg-white w-full text-black"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
        <button
          className="bg-blue-300 p-8 rounded-md"
          onClick={() => submitMessage("me")}
        >
          Enviar (como yo)
        </button>
        <button
          className="bg-blue-300 p-8 rounded-md"
          onClick={() => submitMessage("you")}
        >
          Enviar (como tú)
        </button>
      </div>
    </section>
  );
}
