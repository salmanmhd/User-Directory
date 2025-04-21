import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Directory</h1>
      <input type="text" placeholder="Search users by name..." />
    </div>
  );
}

export default App;
