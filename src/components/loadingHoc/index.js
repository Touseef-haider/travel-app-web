import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactLoading from "react-loading";
import theme from "../../globalStyles/theme";

const HOCLoading = (Component) => {
  const AlteredComponent = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <>
        {isLoading ? (
          <ReactLoading
            type="spin"
            color={theme.colors.primary}
            height={"20%"}
            width={"20%"}
          />
        ) : (
          <Component isLoading={isLoading} setIsLoading={setIsLoading} />
        )}
      </>
    );
  };

  return AlteredComponent;
};

export default HOCLoading;
