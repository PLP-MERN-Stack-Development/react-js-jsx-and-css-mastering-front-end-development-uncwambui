import React, { useEffect, useState } from "react";

export default function ApiList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch public API data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching API data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="p-6 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          API Data (User List)
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading API data...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((user) => (
              <div
                key={user.id}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-xl text-blue-600 dark:text-blue-400">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  📧 {user.email}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  🏙️ {user.address.city}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  🌐 {user.website}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
