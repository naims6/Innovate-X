import React, { useState } from "react";
import useTheme from "../../../../hooks/useTheme";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const {
    data: userData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/users/${user?.email}`);
      return result.data;
    },
  });

  const [editMode, setEditMode] = useState(false);

  // Mock win percentage data
  const winPercentage =
    Math.round((userData?.totalWon / userData?.totalParticipated) * 100) || 0;

  const onSubmit = async (data) => {
    const { profilePicture, bio, fullName, address } = data;
    const updatedUser = {
      profilePicture,
      bio,
      fullName,
      address,
    };
    const res = await axiosSecure.patch(`/users/${userData?._id}`, updatedUser);
    console.log(userData?._id);
    console.log(res);
    if (res.data.modifiedCount) {
      toast.success("Profile Updated Successfully");
      refetch();
    }
    setEditMode(false);
  };

  if (isLoading) {
    return <h1 className="text-xl">Loading...</h1>;
  }

  return (
    <div
      className={`min-h-screen p-8 ${
        theme === "dark"
          ? "bg-linnear-to-br from-gray-900 to-gray-800 text-white"
          : "bg-linnear-to-br from-blue-50 to-indigo-100 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-linnear-to-r from-purple-600 to-pink-600">
          My Profile
        </h1>

        <form
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Profile Info */}
          <div
            className={`p-6 rounded-xl shadow-lg ${
              theme === "dark"
                ? "bg-slate-800 border-r border-slate-700"
                : "bg-white border-r border-gray-200"
            }`}
          >
            {/* photo url */}
            <div className="flex flex-col items-center mb-6">
              <img
                src={userData.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4"
              />
              {editMode ? (
                <input
                  type="text"
                  {...register("profilePicture")}
                  defaultValue={userData.profilePicture}
                  className={`w-full p-2 rounded ${
                    theme === "dark"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                  placeholder="Photo URL"
                />
              ) : (
                <h2 className="text-2xl font-bold">{userData?.fullName}</h2>
              )}
            </div>
            {/* full name and bio, address */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                {editMode ? (
                  <input
                    type="text"
                    {...register("fullName")}
                    defaultValue={userData.fullName}
                    className={`w-full p-2 rounded ${
                      theme === "dark"
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  />
                ) : (
                  <p>{userData.fullName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Bio</label>
                {editMode ? (
                  <textarea
                    {...register("bio")}
                    defaultValue={userData?.bio}
                    className={`w-full p-2 rounded ${
                      theme === "dark"
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                    rows="3"
                  />
                ) : (
                  <p>{userData?.bio}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                {editMode ? (
                  <input
                    type="text"
                    {...register("address")}
                    defaultValue={userData?.address}
                    className={`w-full p-2 rounded ${
                      theme === "dark"
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  />
                ) : (
                  <p>{userData?.address}</p>
                )}
              </div>
            </div>
            <div className="mt-6 text-center">
              {editMode ? (
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  Save Changes
                </button>
              ) : (
                <span
                  onClick={() => setEditMode(true)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  Edit Profile
                </span>
              )}
            </div>
          </div>
          {/* Win Percentage Chart */}
          <div
            className={`p-6 rounded-xl shadow-lg ${
              theme === "dark"
                ? "bg-slate-800 border-r border-slate-700"
                : "bg-white border-r border-gray-200"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Win Percentage
            </h2>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke={theme === "dark" ? "#374151" : "#e5e7eb"}
                    strokeWidth="3"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray={`${winPercentage}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{winPercentage}%</span>
                </div>
              </div>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {userData?.totalWon || 0} Wins out of{" "}
                {userData?.totalParticipated || 0} Participations
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
