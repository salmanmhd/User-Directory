import { useEffect, useState, useMemo, useRef } from "react";
import UserCard from "./UserCard";
import "./App.css";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    }

    fetchUsers();

    inputRef.current.focus();
  }, []);

  const filteredUsers = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return users.filter((user) => user.name.toLowerCase().includes(term));
  }, [searchTerm, users]);

  return (
    <div className="app">
      <h1>User Directory</h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {isLoading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <ul className="user-list">
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
