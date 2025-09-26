import React, { useState } from "react";

export default function BankApp() {

/* Reacct always maintains the state of the input fields using useSate hook
    method name is setForm
    variable name is form
    useState is actually setting default vaues for all the fields in the form */
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    accountType: "savings",
  });

  /* Creating setUsers method of type useState to update the users state
    Everytime setUsers function is invoked, data will be saved in users, but not stored anywhere
    as useSate([]) is doing nothing. Data will be cleared
   */
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), ...form };
    setUsers([...users, newUser]);
    console.log("CREATE:", JSON.stringify(newUser, null, 2));
    setForm({ firstName: "", lastName: "", email: "", dob: "", gender: "", accountType: "savings" });
  };

  const handleUpdate = (id) => {
    const updatedUsers = users.map((u) =>
      u.id === id ? { ...u, ...form } : u
    );
    setUsers(updatedUsers);
    console.log("UPDATE:", JSON.stringify(updatedUsers.find(u => u.id === id), null, 2));
  };

  const handleDelete = (id) => {
    const filtered = users.filter((u) => u.id !== id);
    setUsers(filtered);
    console.log("DELETE: user with id", id);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Form */}
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">Bank Account Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium">Gender</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={form.gender === "male"}
                  onChange={handleChange}
                /> Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={form.gender === "female"}
                  onChange={handleChange}
                /> Female
              </label>
            </div>
          </div>
          <div>
            <label className="block font-medium">Account Type</label>
            <select
              name="accountType"
              value={form.accountType}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="savings">Savings</option>
              <option value="current">Current</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white rounded p-2">
            Create Account
          </button>
        </form>
      </div>

      {/* Accounts List */}
      <div className="mt-6 w-full max-w-2xl">
        <h3 className="text-lg font-bold mb-2">Accounts</h3>
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-xl p-4 mb-3 flex justify-between items-center"
          >
            <div>
              <p><b>{user.firstName} {user.lastName}</b> ({user.email})</p>
              <p>DOB: {user.dob}, Gender: {user.gender}, Type: {user.accountType}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleUpdate(user.id)}
                className="px-3 py-1 border rounded text-blue-600 border-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="px-3 py-1 border rounded text-red-600 border-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
