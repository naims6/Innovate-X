import React from "react";
import { FaCheck, FaTimes, FaTrashAlt, FaEye } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function ContestTableRow({
  contest,
  theme,
  refetch,
  axiosSecure,
}) {
  const handleConfirm = async (id) => {
    try {
      await axiosSecure.patch(`/contests/${id}`, { status: "approved" });
      toast.success("Contest Approved!");
      refetch();
    } catch (error) {
      toast.error("Failed to approve contest.");
      console.error(error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axiosSecure.patch(`/contests/${id}`, { status: "rejected" });
      toast.success("Contest Rejected!");
      refetch();
    } catch {
      toast.error("Failed to reject contest.");
    }
  };

  const handleDelete = async (id) => {
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

  const isApproved = contest.status === "approved";
  const isRejected = contest.status === "rejected";

  const rowClasses =
    theme === "dark"
      ? "border-slate-700 hover:bg-slate-800/50"
      : "border-slate-200 hover:bg-slate-50";

  const textClasses = theme === "dark" ? "text-slate-300" : "text-slate-700";

  const creatorEmailClasses =
    theme === "dark" ? "text-slate-400" : "text-slate-500";

  const statusClasses = isApproved
    ? theme === "dark"
      ? "bg-green-900/40 text-green-400"
      : "bg-green-100 text-green-800"
    : isRejected
    ? theme === "dark"
      ? "bg-red-900/40 text-red-400"
      : "bg-red-100 text-red-800"
    : theme === "dark"
    ? "bg-yellow-900/40 text-yellow-400"
    : "bg-yellow-100 text-yellow-800";

  const viewBtnClasses =
    theme === "dark"
      ? "text-blue-400 hover:text-blue-300"
      : "text-blue-500 hover:text-blue-700";

  return (
    <tr className={`border-b ${rowClasses}`}>
      {/* Contest Name */}
      <td className={`p-3 font-medium ${textClasses}`}>{contest.name}</td>

      {/* Creator Email */}
      <td className={`p-3 text-sm ${creatorEmailClasses}`}>
        {contest.creatorEmail || "naimdrive6@gmail.com"}
      </td>

      {/* Status */}
      <td className="p-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClasses}`}
        >
          {contest.status ? contest.status.toUpperCase() : "PENDING"}
        </span>
      </td>

      {/* View Button */}
      <td className="p-3">
        <button
          className={`transition duration-150 ${viewBtnClasses}`}
          onClick={() => console.log("View details for", contest._id)}
          title="View Details"
        >
          <FaEye />
        </button>
      </td>

      {/* Actions */}
      <td className="p-3 text-center space-x-2">
        {!isApproved && (
          <button
            onClick={() => handleConfirm(contest._id)}
            className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-150 disabled:opacity-50"
            disabled={isRejected}
            title="Approve Contest"
          >
            <FaCheck />
          </button>
        )}

        {!isRejected && (
          <button
            onClick={() => handleReject(contest._id)}
            className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition duration-150 disabled:opacity-50"
            disabled={isApproved}
            title="Reject Contest"
          >
            <FaTimes />
          </button>
        )}

        <button
          onClick={() => handleDelete(contest._id)}
          className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-150"
          title="Delete Contest"
        >
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
}
