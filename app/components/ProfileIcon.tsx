import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function IconDividerWithAvatar() {
  return (
    <div className="flex items-center justify-center py-4">
      <FaLinkedin className="mx-4 text-gray-400" size={24} />

      <img
        src="/public/profile_pic.jpg"
        alt="User Avatar"
        className="mx-4 w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
      />

      <FaGithub className="mx-4 text-gray-400" size={24} />
    </div>
  );
}
