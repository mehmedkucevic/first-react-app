import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner({ message }) {
  return (
    <div>
      <ClipLoader
        color={"#000"}
        loading={true}
        cssOverride={{
          display: "block",
          margin: "0 auto",
          borderColor: "red",
        }}
        size={150}
        aria-label={message}
        data-testid="loader"
      ></ClipLoader>
    </div>
  );
}