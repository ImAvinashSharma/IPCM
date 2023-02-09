import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddItemsToVault() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

  const AddItem = () => {
    const { username } = JSON.parse(localStorage.getItem("user"));
    console.log(username);
    fetch("http://localhost:3001/api/vault/addItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: username,
        app: "test",
        created_at: "today",
        last_used_at: "today",
        // username: userName,
        email: email,
        password: password,
        url: url
      })
    })
      .then(res => {
        return res.json();
      })
      .then(() => {
        history.push("/dashboard");
      })
      .finally(() => {});
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">Add Item to vault</h1>
        {/* <div class="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
          <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div class="flex flex-col ml-3">
                  <div class="font-medium leading-none">
                    Delete Your Acccount ?
                  </div>
                  <p class="text-sm text-gray-600 leading-none mt-1">
                    By deleting your account you will lose your all data
                  </p>
                </div>
              </div>
              <button class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                Delete
              </button>
            </div>
          </div>
        </div> */}
        <div className="mt-6">
          <div className="mb-2">
            <label htmlFor="text" className="block text-sm font-semibold text-gray-800"></label>
            User Name
            <input required value={userName} onChange={e => setUserName(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800"></label>
            Email
            <input required value={email} onChange={e => setEmail(e.target.value)} type="email" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input required value={password} onChange={e => setPassword(e.target.value)} type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mb-2">
            <label htmlFor="text" className="block text-sm font-semibold text-gray-800">
              URL
            </label>
            <input required value={url} onChange={e => setUrl(e.target.value)} type="text" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mt-6">
            <button onClick={AddItem} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItemsToVault;
