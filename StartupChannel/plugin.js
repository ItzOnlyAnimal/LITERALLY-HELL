import {findByProps} from "@cumcord/modules/webpack";

import Settings from "./Settings";

const toChannel = findByProps("transitionToChannel").transitionToChannel;

export default (data) => {
  return {
    onLoad() {
      console.log(data.persist.store.channel);
      console.log(data.persist.ghost.channel);
      toChannel(data.persist.ghost.channel); // data.persist.ghost.channel
    },
    settings: Settings,
  };
};
