/* eslint-disable import/no-named-default */

import React from "react";
import { default as ReactClapButton } from "react-clap-button";
import { FiThumbsUp } from "react-icons/fi";
import { useDebouncedCallback } from "use-debounce";
import { toastMessage } from "../../utils";

const MAX_COUNT = 10;

const ClapButton = ({ count }) => {
  const [clientCount, setClientCount] = React.useState(0);
  const [serverCount, setServerCount] = React.useState(0);

  const incrementCount = async () => {
    await fetch(`/api/incrementCount?by=${clientCount - serverCount}`);
    setServerCount(clientCount);
  }

  const debouncedIncrementCount = useDebouncedCallback(incrementCount, 1000);

  const handleIncrement = async () => { 
    if (clientCount === MAX_COUNT - 1) toastMessage("You've reached the maximum number of likes", "likes");
    if (clientCount === MAX_COUNT) return null;

    debouncedIncrementCount();
    setClientCount(l => l + 1);
    return null;
  }

  return (
    <div className="clap-button">
      <ReactClapButton
        count={0}
        countTotal={count}
        theme={{ secondaryColor: "rgba(0,0,0,0)" }}
        iconComponent={React.forwardRef(() => <FiThumbsUp size={24} />)}
        maxCount={MAX_COUNT}
        onCountChange={handleIncrement}
      />
      <span className="clap-button__message">Like</span>
    </div>
  )
}

export default ClapButton;

