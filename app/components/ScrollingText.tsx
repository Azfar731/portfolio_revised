import "./ScrollingText.css";
import Carousel from "@azfar_razzaq/react-infinite-carousel";

export default function ScrollingText({ text }: { text: string }) {
  return (
    <div className="scrollingTextContainer">
      <Carousel
        itemType="text"
        text={text}
        className="scrollingText"
        durationPerClone={8}
        hoverSpeedFactor={0.5}
        fade={100}
      />
    </div>
  );
}
