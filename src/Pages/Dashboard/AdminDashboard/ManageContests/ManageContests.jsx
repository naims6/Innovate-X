import React from "react";
import useTheme from "../../../../hooks/useTheme";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import ContestTableRow from "./ContestTableRow";

export default function ManageContests() {
  const axiosSecure = useAxiosSecure();

  // Use a more specific query key and endpoint for contests
  const {
    data: contests = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure("/contests");
      return res.data;
    },
  });

  const { theme } = useTheme();

  if (isLoading) {
    return <div className="p-6 text-center text-lg">Loading contests...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        Error loading contests: {error.message}
      </div>
    );
  }

  return (
    <div className="">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row  lg:items-center lg:justify-between mb-6">
        <h2
          className={
            "text-xl font-semibold " +
            (theme === "dark" ? "text-white" : "text-slate-900")
          }
        >
          Manage Contests
        </h2>
        <p
          className={
            "text-sm " +
            (theme === "dark" ? "text-slate-400" : "text-slate-500")
          }
        >
          View, approve, reject, and delete contest entries
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
        <table className="w-full min-w-[1000px] table-auto">
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
                Contest Name
              </th>
              <th
                className={
                  "text-left font-medium p-3 " +
                  (theme === "dark" ? "text-slate-300" : "text-slate-700")
                }
              >
                Creator Email
              </th>
              <th
                className={
                  "text-left font-medium p-3 " +
                  (theme === "dark" ? "text-slate-300" : "text-slate-700")
                }
              >
                Status
              </th>
              <th
                className={
                  "text-left font-medium p-3 " +
                  (theme === "dark" ? "text-slate-300" : "text-slate-700")
                }
              >
                Details
              </th>
              <th
                className={
                  "text-center font-medium p-3 " +
                  (theme === "dark" ? "text-slate-300" : "text-slate-700")
                }
              >
                Actions
              </th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {contests.map((contest) => (
              <ContestTableRow
                key={contest._id}
                contest={contest}
                theme={theme}
                refetch={refetch} // Pass refetch so actions can update the table
                axiosSecure={axiosSecure} // Pass axiosSecure for API calls
              />
            ))}

            {contests.length === 0 && (
              <tr>
                <td
                  colSpan={5} // Increased colspan for 5 columns
                  className={
                    "p-5 text-center " +
                    (theme === "dark" ? "text-slate-400" : "text-slate-500")
                  }
                >
                  No contests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
