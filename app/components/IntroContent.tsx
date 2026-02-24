import "./IntroContent.css";
import WhatsAppButton from "../common/WhatsAppButton";

export default function IntroContent({
  introContent,
}: {
  introContent: {
    jobTitle: string;
    sellingPoint: string;
    missionStatement: string;
  };
}) {
  return (
    <div className="introContainer">
      <div id="profileImageContainer">
        <picture>
          <source
            type="image/webp"
            srcSet={[
              "/port_image_480.webp 480w",
              "/port_image_990.webp 990w",
              "/port_image_1024.webp 1024w",
            ].join(", ")}
            sizes={[
              "(max-width: 480px) 100vw",
              "(max-width: 990px) 90vw",
              "58vw",
            ].join(", ")}
          />
          <img
            src="/port_image_1024.webp"
            alt="Profile"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width={1024}
            height={814}
          />
        </picture>
      </div>
      <div id="intro-Content">
        <h2 className="smallText">{introContent.jobTitle}</h2>
        <h1>{introContent.sellingPoint}</h1>
        <p>{introContent.missionStatement}</p>
        <WhatsAppButton />
      </div>
    </div>
  );
}
