import { Dispatch, SetStateAction } from "react";

import Clap from "../Icons/Clap";
import { default as ReactClapButton } from "react-clap-button";
import { incrementClaps } from "@/actions";
import { toastMessage } from "../../utils";
import { useDebouncedCallback } from "use-debounce";

type Props = {
  serverClapCount: number;
  clientClapCount: number;
  setClientClapCount: Dispatch<SetStateAction<number>>;
  incrementClaps: typeof incrementClaps;
};

const MAX_COUNT = 15;

export default function ClapButton({
  serverClapCount,
  clientClapCount,
  setClientClapCount,
  incrementClaps,
}: Props) {
  const debouncedIncrementClaps = useDebouncedCallback(() => {
    const newClapsTotal = serverClapCount + clientClapCount;
    incrementClaps(newClapsTotal);
  }, 1000);

  const handleIncrement = async () => {
    if (clientClapCount === MAX_COUNT) return;
    if (clientClapCount === MAX_COUNT - 1) {
      toastMessage("Thanks for the claps!", "claps");
    }

    debouncedIncrementClaps();
    setClientClapCount((l) => l + 1);
  };

  return (
    <div className="clap-button">
      <ReactClapButton
        count={0}
        countTotal={serverClapCount}
        theme={{ secondaryColor: "rgba(0,0,0,0)" }}
        iconComponent={Clap}
        maxCount={MAX_COUNT}
        onCountChange={handleIncrement}
      />
    </div>
  );
}
