import { findByProps } from "@cumcord/modules/webpack";
import { instead } from "@cumcord/patcher";
                                    
const typing = instead("startTyping", findByProps("startTyping"), () => {});

export default (data) => {
  return {

    onUnload() {
      typing()
    }
  };
};
