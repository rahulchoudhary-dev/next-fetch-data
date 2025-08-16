const UserList = ({ users }: any) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Users</h2>
      <ul className="space-y-2">
        {users.map((user: any) => (
          <li key={user.id} className="rounded border p-2 shadow">
            {user.name}{" "}
            <span className="text-sm text-gray-500">({user.email})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
