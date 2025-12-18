import React from "react";
import useTheme from "../../../../hooks/useTheme";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import UserTableRow from "./UserTableRow";

export default function ManageUser() {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });

  // determine theme without adding state
  const { theme } = useTheme();

  const ROLE_OPTIONS = ["user", "creator", "admin"];

  return (
    <div className="">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row lg:items-center lg:justify-between mb-6">
        <h2
          className={
            "text-xl font-semibold " +
            (theme === "dark" ? "text-white" : "text-slate-900")
          }
        >
          Manage Users
        </h2>
        <p
          className={
            "text-sm " +
            (theme === "dark" ? "text-slate-400" : "text-slate-500")
          }
        >
          View and update user roles
        </p>
      </div>

      {/* TABLE WRAPPER */}
      <div
        className={
          "overflow-x-auto rounded-xl border shadow-md backdrop-blur " +
          (theme === "dark"
            ? "border-slate-700 bg-slate-900/50"
            : "border-slate-200 bg-slate-100")
        }
      >
        <table className="w-full min-w-[720px] table-auto">
          {/* TABLE HEAD */}
          <thead
            className={
              "border-b " +
              (theme === "dark"
                ? "bg-slate-800/60 border-slate-700"
                : "bg-slate-50 border-slate-200")
            }
          >
            <tr>
              <th
                className={
                  "text-left font-medium p-3 " +
                  (theme === "dark" ? "text-slate-300" : "text-slate-700")
                }
              >
                User
              </th>
              <th
                className={
                  "text-left font-medium p-3 " +
                  (theme === "dark" ? "text-slate-300" : "text-slate-700")
                }
              >
                Email
              </th>
              <th
                className={
                  "text-left font-medium p-3 " +
                  (theme === "dark" ? "text-slate-300" : "text-slate-700")
                }
              >
                Role
              </th>
              <th
                className={
                  "text-left font-medium p-3 " +
                  (theme === "dark" ? "text-slate-300" : "text-slate-700")
                }
              >
                Actions
              </th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {users.map((user) => (
              <UserTableRow
                key={user._id}
                user={user}
                ROLE_OPTIONS={ROLE_OPTIONS}
              />
            ))}

            {users.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className={
                    "p-5 text-center " +
                    (theme === "dark" ? "text-slate-400" : "text-slate-500")
                  }
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
