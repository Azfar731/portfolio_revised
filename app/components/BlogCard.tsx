import { useState } from "react";
import "./BlogCard.css"; // Keep for non-style animations
import arrow from "../assets/icons8-arrow-32.png";
import type { ArticleInfo } from "~/utils/types";

export default function BlogCard({ article }: { article: ArticleInfo }) {
  const [isHovering, setIsHovering] = useState(false);
  const colors = [
    { bg: "bg-red-200", text: "text-red-800" },
    { bg: "bg-green-200", text: "text-green-800" },
    { bg: "bg-blue-200", text: "text-blue-800" },
    { bg: "bg-yellow-200", text: "text-yellow-800" },
    { bg: "bg-purple-200", text: "text-purple-800" },
  ];
  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer">
      <div
        className="blogCard"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img src={`${article.cover_image}`} className="blogCardImage" alt="" />
        <div
          className={`flex flex-col w-full rounded-[1rem] p-[3%] transition-colors duration-300 ${
            isHovering ? "bg-[#0d0d0d]" : "bg-[#242629]"
          }`}
        >
          <div className="blogCardHeading">
            <div className="titleContainer">
              <div
                className={`blogCardTitle textLine ${
                  isHovering ? "line1-exit" : "line1-enter"
                }`}
              >
                {article.title}
              </div>
              <div
                className={`blogCardTitleHover textLine ${
                  isHovering ? "line2-enter" : "line2-exit"
                }`}
              >
                {article.title}
              </div>
            </div>
            <img
              src={arrow}
              alt="little arrow image"
              className={`transform w-8 transition-transform duration-300 ${
                isHovering ? "rotate-45" : "rotate-90"
              }`}
            />
          </div>
          <div className="blogCardStack">
            {article.tag_list.map((tag, index) => {
              const color = colors[index % colors.length];
              return (
                <div
                  className={`${color.bg} ${color.text} rounded-full px-2 py-1 text-xs`}
                  key={tag}
                >
                  {tag}
                </div>
              );
            })}
          </div>
          <div className="project_description_container">
            <p className="project_description_text">
              {article.description.length > 130
                ? article.description.slice(0, 130) + "..."
                : article.description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
