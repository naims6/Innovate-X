import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router";

const MyContestsTableRow = ({ theme, contest, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      decodeURIComponentesign: "from-pink-500 to-rose-500",
      programming: "from-blue-500 to-cyan-500",
      development: "from-purple-500 to-indigo-500",
      mobile: "from-green-500 to-emerald-500",
      security: "from-green-500 to-emerald-500",
    };
    return colors[category] || "from-indigo-500 to-purple-500";
  };

  const handleDeleteContest = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contest?"))
      return;

    try {
      await axiosSecure.delete(`/contests/${id}`);
      toast.success("Contest Deleted!");
      refetch();
    } catch (error) {
      toast.error("Failed to delete contest.");
      console.error(error);
    }
  };

  return (
    <tr
      className={`transition-colors duration-300 hover:${
        theme === "dark" ? "bg-slate-700/50" : "bg-gray-50"
      }`}
    >
      <td
        className={`px-6 py-4 font-semibold ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {contest?.name}
      </td>
      <td
        className={`px-6 py-4 ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-linear-to-r ${getCategoryColor(
            contest?.category
          )}`}
        >
          {contest?.category}
        </span>
      </td>
      <td className={`px-6 py-4`}>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
            contest?.status
          )}`}
        >
          {contest?.status}
        </span>
      </td>
      <td
        className={`px-6 py-4 font-semibold ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {contest?.participants}
      </td>
      <td
        className={`px-6 py-4 font-semibold text-indigo-600 dark:text-indigo-400`}
      >
        {contest?.submissions || "now 0"}
      </td>
      <td
        className={`px-6 py-4 font-bold bg-linear-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent`}
      >
        ${contest?.price}
      </td>
      <td className={`px-6 py-4`}>
        <div className="flex gap-2">
          {contest?.status === "pending" && (
            <>
              <Link
                to={`/dashboard/contest/edit/${contest._id}`}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors duration-300"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeleteContest(contest._id)}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-300"
              >
                Delete
              </button>
            </>
          )}
          <button className="px-3 py-1 rounded-lg text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors duration-300">
            See Submissions
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyContestsTableRow;
