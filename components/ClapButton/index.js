/* eslint-disable import/no-named-default */

import React from "react";
import { default as ReactClapButton } from "react-clap-button";
import { useDebouncedCallback } from "use-debounce";
import { toastMessage } from "../../utils";
import Clap from "../Icons/Clap";

const MAX_COUNT = 15;

const ClapButton = ({ initialCount, clientClapCount, setClientClapCount }) => {
  const [serverClapCount, setServerClapCount] = React.useState(0);

  const incrementClaps = async () => {
    await fetch(`/api/incrementClaps?by=${clientClapCount - serverClapCount}`);
    setServerClapCount(clientClapCount);
  };

  const debouncedIncrementClaps = useDebouncedCallback(incrementClaps, 1000);

  const handleIncrement = async () => {
    if (clientClapCount === MAX_COUNT - 1) toastMessage("Thanks for the claps!", "claps");
    if (clientClapCount === MAX_COUNT) return null;

    debouncedIncrementClaps();
    setClientClapCount((l) => l + 1);
    return null;
  };

  return (
    <div className="clap-button">
      <ReactClapButton
        count={0}
        countTotal={initialCount}
        theme={{ secondaryColor: "rgba(0,0,0,0)" }}
        iconComponent={Clap}
        maxCount={MAX_COUNT}
        onCountChange={handleIncrement}
      />
    </div>
  );
};

export default ClapButton;
