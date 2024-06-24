"use client";
import React, { useState, useEffect, useRef } from "react";

const Circle = () => {
  const [radius, setRadius] = useState(0);
  const [increasing, setIncreasing] = useState(true);
  const [circleClicked, setCircleClicked] = useState(0);
  const [totalClicked, setTotalClicked] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const position = useRef({
    top: Math.floor(Math.random() * (screenSize.height - radius * 2)),
    left: Math.floor(Math.random() * (screenSize.width - radius * 2)),
    transform: "translate(-50%, -50%)",
  });

  const clicked = () => {
    setCircleClicked((prevCount) => {
      console.log("outside: ", circleClicked);
      return prevCount + 1;
    });
  };

  const mouseClicked = () => {
    setTotalClicked((prev) => prev + 1);
    console.log("Total click:", totalClicked);
  };

  const accuracy = totalClicked > 0 ? (circleClicked / totalClicked) * 100 : 0;

  const circleClickedFunc = () => {
    setRadius(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        if (increasing) {
          if (radius < 100) {
            setRadius((prevRadius) => prevRadius + 1);
          } else {
            setIncreasing(false);
          }
        } else {
          if (radius > 0) {
            setRadius((prevRadius) => prevRadius - 1);
          } else {
            setIncreasing(true);
          }
        }
      } else {
        setTimeLeft(0);
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [radius, increasing, timeLeft]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (radius === 0) {
      const newTop = Math.floor(Math.random() * (screenSize.height - radius * 2));
      const newLeft = Math.floor(Math.random() * (screenSize.width - radius * 2));
      position.current = {
        ...position.current,
        top: newTop,
        left: newLeft,
      };
    }
  }, [increasing, radius, screenSize.height, screenSize.width]);

  return (
    <>
      {timeLeft > 0 ? (
        <div className="h-screen w-full bg-gray-600" onClick={mouseClicked}>
          <div
            onClick={clicked}
            className="absolute bg-red-600 flex justify-center items-center rounded-full overflow-hidden"
            style={position.current}
          >
            <div
              onClick={circleClickedFunc}
              className="rounded-full bg-blue-500"
              style={{ width: radius, height: radius }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <h1>Time&apos;s up</h1>
          <h1>Your accuracy: {accuracy.toFixed(2)}%</h1>
        </div>
      )}
    </>
  );
};

export default Circle;
