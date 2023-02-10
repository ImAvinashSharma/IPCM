import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import VaultItems from "../vault/VaultItems";

export default function Dashboard() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const signOut = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/");
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/test/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      }
    })
      .then(res => {
        if (res.status === 403 || res.status === 401) {
          history.push("/");
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        setError("You are not authorized to view this page");
        console.log(err);
        history.push("/");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [open, setOpen] = useState(false);
  return loading ? (
    <>Loading... {JSON.stringify(error)}</>
  ) : (
    <div className="flex">
      <div className={` ${open ? "w-40" : "w-60 "} flex flex-col h-screen p-3 bg-gray-800 shadow duration-300`}>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Dashboard</h2>
            <button onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button type="submit" className="p-2 focus:outline-none focus:ring">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </span>
            <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none" />
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link className="flex items-center p-2 space-x-3 rounded-md" to="/dashboard">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-gray-100">Home</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/cards" className="flex items-center p-2 space-x-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span className="text-gray-100">Card</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link className="flex items-center p-2 space-x-3 rounded-md" to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="text-gray-100">Identity</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link className="flex items-center p-2 space-x-3 rounded-md" to="/settings">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-100">Settings</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <button className="flex items-center p-2 space-x-3 rounded-md" onClick={signOut}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span className="text-gray-100">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <VaultItems />
      </div>
    </div>
  );
}
