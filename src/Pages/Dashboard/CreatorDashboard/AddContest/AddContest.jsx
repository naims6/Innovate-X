import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useTheme from "../../../../hooks/useTheme";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { getImageUrl } from "../../../../utility/getImageUrl";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";

const AddContest = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const [previewImage, setPreviewImage] = useState("");
  const axiosSecure = useAxiosSecure();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    try {
      const imageURL = (await getImageUrl(data.bannerImage)) || "";

      const contestDetails = {
        ...data,
        bannerImage: imageURL,
        participants: 0,
        winner: "",
        winnerImage: "",
        creatorName: user?.displayName,
        creatorImage: user?.photoURL,
        deadline: new Date(data.deadline).toISOString().split("T")[0],
        createdAt: new Date().toISOString().split("T")[0],
        stauts: "pending",
      };
      console.log(contestDetails);
      const res = await axiosSecure.post("/contests", contestDetails);

      if (res.data.insertedId) {
        toast.success("Your Contest is Added. Wait until admin approve");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1
          className={`text-4xl font-bold mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Create New Contest
        </h1>
        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Set up your contest and start receiving submissions from talented
          developers
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`rounded-2xl p-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-slate-800 border border-slate-700"
            : "bg-white border border-gray-200"
        }`}
      >
        <div className="space-y-8">
          {/* Contest Name */}
          <div>
            <label
              className={`block text-sm font-semibold mb-3 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Contest Name *
            </label>
            <input
              type="text"
              placeholder="e.g., Web Design Showdown 2024"
              {...register("name", { required: "Contest name is required" })}
              className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          {/* Contest Title */}
          <div>
            <label
              className={`block text-sm font-semibold mb-3 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Contest Title *
            </label>
            <input
              type="text"
              placeholder="e.g., Analyze datasets and build predictive models to solve real-world problems"
              {...register("title", { required: "Contest Title is required" })}
              className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label
              className={`block text-sm font-semibold mb-3 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Contest Banner Image *
            </label>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${
                theme === "dark"
                  ? "border-slate-600 hover:border-indigo-500"
                  : "border-gray-300 hover:border-indigo-500"
              }`}
            >
              <Controller
                name="bannerImage"
                control={control}
                rules={{ required: "Contest banner image is required" }}
                render={({ field }) => (
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="image-input"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file); // 👈 store file in react-hook-form
                      handleImageUpload(e); // 👈 for preview only
                    }}
                  />
                )}
              />

              {previewImage ? (
                <div>
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <label
                    htmlFor="image-input"
                    className="text-indigo-600 dark:text-indigo-400 font-semibold cursor-pointer hover:underline"
                  >
                    Click to change image
                  </label>
                </div>
              ) : (
                <label htmlFor="image-input" className="cursor-pointer">
                  <div className="text-4xl mb-3">🖼️</div>
                  <p
                    className={`font-semibold mb-1 ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    Upload Contest Banner
                  </p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    JPG, PNG or GIF (Max 10MB)
                  </p>
                </label>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              className={`block text-sm font-semibold mb-3 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Description *
            </label>
            <textarea
              placeholder="Describe your contest in detail..."
              rows="5"
              {...register("description", {
                required: "Description is required",
              })}
              className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 resize-none ${
                theme === "dark"
                  ? "bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              }`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Task Details */}
          <div>
            <label
              className={`block text-sm font-semibold mb-3 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Task Details *
            </label>
            <textarea
              placeholder="Provide detailed instructions for participants..."
              rows="5"
              {...register("taskDetails", {
                required: "Task details are required",
              })}
              className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 resize-none ${
                theme === "dark"
                  ? "bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              }`}
            ></textarea>
            {errors.taskDetails && (
              <p className="text-red-500 text-sm mt-1">
                {errors.taskInstructions.message}
              </p>
            )}
          </div>

          {/* Grid Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Prize Money */}
            <div>
              <label
                className={`block text-sm font-semibold mb-3 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Prize Money ($) *
              </label>
              <input
                type="number"
                placeholder="5000"
                {...register("prize", { required: "Prize money is required" })}
                className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                }`}
              />
              {errors.prize && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.prize.message}
                </p>
              )}
            </div>

            {/* Contest Category */}
            <div>
              <label
                className={`block text-sm font-semibold mb-3 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Contest category *
              </label>
              <select
                {...register("category", {
                  required: "Contest category is required",
                })}
                className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-slate-700 border border-slate-600 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    : "bg-gray-50 border border-gray-300 text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                }`}
              >
                <option value="">Select a category</option>
                <option value="design">Design</option>
                <option value="programming">Programming</option>
                <option value="development">Development</option>
                <option value="mobile">Mobile</option>
                <option value="data-science">Data Science</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Difficulty Level */}
            <div>
              <label
                className={`block text-sm font-semibold mb-3 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Difficulty Level *
              </label>
              <select
                {...register("level", {
                  required: "Difficulty level is required",
                })}
                className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-slate-700 border border-slate-600 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    : "bg-gray-50 border border-gray-300 text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                }`}
              >
                <option value="">Select a level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              {errors.level && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.level.message}
                </p>
              )}
            </div>
          </div>

          {/* Deadline */}
          <div>
            <label
              className={`block text-sm font-semibold mb-3 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Contest Deadline *
            </label>
            <Controller
              name="deadline"
              control={control}
              rules={{ required: "Deadline is required" }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  minDate={new Date()}
                  className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                      : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  }`}
                  placeholderText="Select deadline"
                />
              )}
            />
            {errors.deadline && (
              <p className="text-red-500 text-sm mt-1">
                {errors.deadline.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 py-3 px-6 rounded-lg font-bold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-lg"
            >
              Create Contest
            </button>
            <button
              type="button"
              className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-700 text-gray-200 hover:bg-slate-600"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>

      <style jsx>{`
        :global(.react-datepicker__wrapper) {
          width: 100%;
        }
        :global(.react-datepicker) {
          background-color: ${theme === "dark" ? "#1e293b" : "#fff"};
          border: 1px solid ${theme === "dark" ? "#475569" : "#e5e7eb"};
        }
        :global(.react-datepicker__day--selected) {
          background-color: #4f46e5;
        }
      `}</style>
    </div>
  );
};

export default AddContest;
