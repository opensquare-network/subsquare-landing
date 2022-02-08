import { useEffect } from "react";

import { PRELOAD_IMGS } from "utils/constants";

export default function Preload() {
  useEffect(() => {
    console.log("Preload");
    (PRELOAD_IMGS || []).forEach((image) => {
      new Image().src = `/imgs/icons/${image}`;
    });
  });
  return null;
}
