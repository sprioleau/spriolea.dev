import { Dispatch, SetStateAction, useState } from "react";

import Clap from "../Icons/Clap";
import { default as ReactClapButton } from "react-clap-button";
import { toastMessage } from "../../utils";
import { useDebouncedCallback } from "use-debounce";

type Props = {
  initialCount: number;
  clientClapCount: number;
  setClientClapCount: Dispatch<SetStateAction<number>>;
};

const MAX_COUNT = 15;

export default function ClapButton({
  initialCount,
  clientClapCount,
  setClientClapCount,
}: Props) {
  const [serverClapCount, setServerClapCount] = useState(0);

  const incrementClaps = async () => {
    await fetch(`/api/incrementClaps?by=${clientClapCount - serverClapCount}`);
    setServerClapCount(clientClapCount);
  };

  const debouncedIncrementClaps = useDebouncedCallback(incrementClaps, 1000);

  const handleIncrement = async () => {
    if (clientClapCount === MAX_COUNT - 1)
      toastMessage("Thanks for the claps!", "claps");
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
}
