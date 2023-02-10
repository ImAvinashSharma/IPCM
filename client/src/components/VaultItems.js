import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function VaultItems() {
  const [vaultItems, setVaultItems] = useState([]);
  useEffect(() => {
    const { username } = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:3001/api/valtItem/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setVaultItems(data);
      });
  }, []);
  const deleteVaultItem = index => {
    const { username } = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:3001/api/deleteVaultItem/${username}/${index}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className="p-2">
      <div className="text-3xl p-2 font-bold">Vault Items</div>
      <div className="m-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">{/* DO Something */}</div>
        <div className="flex items-center space-x-2">
          <Link to="/addItemToVault" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            Add New
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                application name
              </th>
              <th scope="col" className="px-6 py-3">
                username
              </th>
              <th scope="col" className="px-6 py-3">
                created at
              </th>
              <th scope="col" className="px-6 py-3">
                last used
              </th>
              <th scope="col" className="px-6 py-3">
                Available
              </th>
            </tr>
          </thead>
          <tbody>
            {vaultItems &&
              vaultItems.map((vaultItem, id) => {
                return (
                  <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <a target="_blank" href={vaultItem.url} rel="noreferrer">
                        {vaultItem.app}
                      </a>
                    </th>
                    <td className="px-6 py-4">{vaultItem.email}</td>
                    <td className="px-6 py-4">{vaultItem.created_at}</td>
                    <td className="px-6 py-4">{vaultItem.last_used_at}</td>
                    <td className="flex items-center px-6 py-4 space-x-3">
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                      <button onClick={e => deleteVaultItem(id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VaultItems;
