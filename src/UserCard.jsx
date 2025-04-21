import "./UserCard.css";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h1 className="user-name">{user.name}</h1>
      <p className="user-company">{user.company?.name}</p>
      <div className="user-contact">
        <p>Email:</p>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
      <div className="user-contact">
        <p>Phone:</p>
        <a href={`tel:${user.phone}`}>{user.phone}</a>
      </div>
      <div className="user-contact">
        <p>Website:</p>
        <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
          {user.website}
        </a>
      </div>
    </div>
  );
}

export default UserCard;
