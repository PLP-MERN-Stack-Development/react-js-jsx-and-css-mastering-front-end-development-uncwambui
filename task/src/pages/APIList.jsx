import React, { useState, useEffect } from "react";

export default function APIList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(res => res.json())
      .then(json => {
        setData(prev => [...prev, ...json]);
        setLoading(false);
      })
      .catch(() => setError("Failed to fetch data"));
  }, [page]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">API Data</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-2">
        {data.map(item => (
          <li key={item.id} className="p-3 bg-gray-100 dark:bg-gray-700 rounded">
            {item.title}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setPage(p => p + 1)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Load More
      </button>
      {loading && <p>Loading...</p>}
    </div>
  );
}
