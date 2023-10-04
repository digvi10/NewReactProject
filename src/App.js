import { useState } from "react";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import UserCard from "./components/UserCard";
import users from "./constants/values";

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserCardClick = (userId) => {
    setSelectedUserId(userId);
  };
  const handleBackClick = () => {
    console.log(selectedUserId);
    setSelectedUserId(null);
  };

  return (
    <div>
      {selectedUserId ? (
        <ProfilePage
        user={users.find((user) => user.id === selectedUserId)}
        onBackClick={handleBackClick}
      />
      ) : (
        <div className="user-directory">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onClick={handleUserCardClick} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
