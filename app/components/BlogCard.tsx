import { useEffect, useRef, useState } from "react";
import "./BlogCard.css"; // Keep for non-style animations
import type { ArticleInfo } from "~/utils/types";
import { Link } from "react-router";

export default function BlogCard({ article }: { article: ArticleInfo }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isCoverImageLoaded, setIsCoverImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Mirror the cover image loading logic used in blog.tsx so the skeleton fades out the same way.
  useEffect(() => {
    setIsCoverImageLoaded(false);

    const img = imgRef.current;
    if (img?.complete) {
      setIsCoverImageLoaded(true);
    }
  }, [article.cover_image]);

  const colors = [
    { bg: "bg-red-200", text: "text-red-800" },
    { bg: "bg-green-200", text: "text-green-800" },
    { bg: "bg-blue-200", text: "text-blue-800" },
    { bg: "bg-yellow-200", text: "text-yellow-800" },
    { bg: "bg-purple-200", text: "text-purple-800" },
  ];
  return (
    <Link to={article.path}>
      <div
        className="blogCard"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative w-full overflow-hidden rounded-[1.5rem] aspect-video bg-[#2a2d31]">
          {!isCoverImageLoaded && (
            <div
              className="absolute inset-0 animate-pulse bg-[#34383d]"
              aria-hidden="true"
            />
          )}
          {article.cover_image ? (
            <img
              ref={imgRef}
              src={article.cover_image}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                isCoverImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              alt={`${article.title} cover`}
              onLoad={() => setIsCoverImageLoaded(true)}
              onError={() => setIsCoverImageLoaded(true)}
            />
          ) : null}
        </div>
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
    </Link>
  );
}
