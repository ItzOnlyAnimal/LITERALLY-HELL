import { findByProps } from "@cumcord/modules/webpack";
import { instead } from "@cumcord/patcher";


const spam = findByProps("isSpam");                                      
const isSpam = instead("isSpam", spam, (a, o) => {return false});

export default (data) => {
  return {
    onLoad() {
    },
    
    onUnload() {
      isSpam()
    }
  };
};
