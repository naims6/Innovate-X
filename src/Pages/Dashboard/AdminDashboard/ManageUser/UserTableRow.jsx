import React, { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UserTableRow = ({ user, theme, ROLE_OPTIONS }) => {
  const { role } = user;
  const [selectedRole, setSelectedRole] = useState(role);
  const axiosSecure = useAxiosSecure();

  console.log(selectedRole);

  // Logic to update user role
  const handleUserRoleUpdate = async (userId) => {
    const res = await axiosSecure.patch(`users/${userId}`, {
      role: selectedRole.toLowerCase(),
    });
    if (res.data.modifiedCount) {
      toast.success("User role updated successfully");
    }
  };

  return (
    <tr key={user._id} className={"border-b border-border transition-colors "}>
      {/* USER */}
      <td className="p-3">
        <div className="flex items-center gap-3">
          <img
            src={user.profilePicture}
            alt={user.name}
            className={
              "w-10 h-10 rounded-full shadow-sm border " +
              (theme === "dark" ? "border-slate-700" : "border-slate-300")
            }
          />
          <div>
            <p className={"text-sm font-medium "}>{user.fullName}</p>
            <p
              className={
                "text-xs " +
                (theme === "dark" ? "text-slate-400" : "text-slate-500")
              }
            >
              {user._id}
            </p>
          </div>
        </div>
      </td>

      {/* EMAIL */}
      <td className="p-3">
        <p>{user.email}</p>
      </td>

      {/* ROLE SELECT */}
      <td className="p-3">
        <select
          defaultValue={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className={
            "px-3 py-1.5 rounded-md text-sm focus:outline-none border border-border bg-bg-secondary"
          }
        >
          {ROLE_OPTIONS.map((r) => (
            <option key={r} value={r}>
              {r.toLowerCase()}
            </option>
          ))}
        </select>
      </td>

      {/* ACTION BTNS */}
      <td className="p-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleUserRoleUpdate(user._id)}
            className={
              "px-4 py-1.5 rounded-md text-sm font-medium shadow-sm transition " +
              (theme === "dark"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700")
            }
          >
            Update
          </button>

          <button
            className={
              "px-3 py-1.5 rounded-md text-sm border transition " +
              (theme === "dark"
                ? "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
                : "bg-slate-200 text-slate-800 border-slate-300 hover:bg-slate-300")
            }
          >
            −
          </button>

          <button
            className={
              "px-3 py-1.5 rounded-md text-sm border transition " +
              (theme === "dark"
                ? "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
                : "bg-slate-200 text-slate-800 border-slate-300 hover:bg-slate-300")
            }
          >
            +
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserTableRow;
