import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";

function ProgressBar({ height, progress, bgcolor }) {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: "1.5rem",
    width: "300px",
    // margin: 50,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: "1.5rem",
    textAlign: "center",
  };

  const progresstext = {
    color: "white",
    fontWeight: 500,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
}

export function ProgressLoader() {
  const { progress } = useProgress();
  useEffect(() => {
    if (progress > 99) {
      document.body.animate(
        [
          // keyframes
          { opacity: 0 },
          { opacity: 1 },
        ],
        {
          // timing options
          duration: 700,
          iterations: 1,
        }
      );
    }
  }, [progress]);

  return (
    <Html position={[0, 0, 0]} center>
      <h1 style={{ textAlign: "center" }}> Loading... </h1>
      <ProgressBar
        progress={Math.ceil(progress)}
        bgcolor={"#1f1f1f"}
        height={"25px"}
      />
    </Html>
  );
}
