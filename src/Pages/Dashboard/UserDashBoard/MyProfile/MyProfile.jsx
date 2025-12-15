import React, { useState } from "react";
import useTheme from "../../../../hooks/useTheme";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyProfile = () => {
  const { theme } = useTheme();
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userData = {}, isLoading } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/contests/${user?.email}`);
      return result.data;
    },
  });
  console.log(userData);

  const [profile, setProfile] = useState({
    name: "John Doe",
    photo: "https://via.placeholder.com/150",
    bio: "Passionate innovator and tech enthusiast.",
    address: "123 Innovation St, Tech City",
  });

  const [editMode, setEditMode] = useState(false);

  // Mock win percentage data
  const totalParticipated = 10;
  const totalWon = 3;
  const winPercentage = Math.round((totalWon / totalParticipated) * 100);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    // Implement save functionality later
    setEditMode(false);
  };

  if (loading) {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Info */}
          <div
            className={`p-6 rounded-xl shadow-lg ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="flex flex-col items-center mb-6">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4"
              />
              {editMode ? (
                <input
                  type="text"
                  name="photo"
                  value={profile.photo}
                  onChange={handleInputChange}
                  className={`w-full p-2 rounded ${
                    theme === "dark"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                  placeholder="Photo URL"
                />
              ) : (
                <h2 className="text-2xl font-bold">{profile.name}</h2>
              )}
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                {editMode ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    className={`w-full p-2 rounded ${
                      theme === "dark"
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  />
                ) : (
                  <p>{user.displayName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Bio</label>
                {editMode ? (
                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleInputChange}
                    className={`w-full p-2 rounded ${
                      theme === "dark"
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                    rows="3"
                  />
                ) : (
                  <p>{profile.bio}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                {editMode ? (
                  <input
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleInputChange}
                    className={`w-full p-2 rounded ${
                      theme === "dark"
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  />
                ) : (
                  <p>{profile.address}</p>
                )}
              </div>
            </div>
            <div className="mt-6 text-center">
              {editMode ? (
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setEditMode(true)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Win Percentage Chart */}
          <div
            className={`p-6 rounded-xl shadow-lg ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
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
                {totalWon} Wins out of {totalParticipated} Participations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
