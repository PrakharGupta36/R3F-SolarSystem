import { isMobile, isTablet } from "react-device-detect";

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    position: "absolute",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    borderRadius: "10px",
    color: "black",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    width: isMobile || isTablet ? "60vw" : "40vw",
    height: "50vh",
  },
};
