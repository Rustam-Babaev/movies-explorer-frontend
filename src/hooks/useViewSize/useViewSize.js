import { useState, useEffect } from "react";

//Кастомный хук для определения ширины экрана с задержкой в 1 сек
export default function useViewSize(initialSize) {
  const [viewSize, setViewSize] = useState(initialSize);

  useEffect(() => {
    const updateSize = () => {
      setTimeout(() => {
        setViewSize(window.innerWidth);
      }, 200);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return [viewSize];
}
