import { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const onMouseMove = (e: { clientX: any; clientY: any }) => {
    setCursorPosition({
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
    });
  };
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  const cursor = useSelector((state: RootState) => state.cursor);
  const [color, setColor] = useState(
    cursor.isHeaderOpened ? "#132821" : "#f7eee2",
  );
  useEffect(() => {
    setColor(cursor.isHeaderOpened ? "#132821" : "#f7eee2");
  }, [cursor]);
  return (
    <div
      className={`cursor h-5 w-5 rounded-full`}
      style={{
        backgroundColor: color,
        transform: `translate(${cursorPosition.x - 10}px, ${
          cursorPosition.y - 10
        }px)`,
        transition: "width 0.3s, height 0.3s",
      }}
    />
  );
};

export default CustomCursor;
