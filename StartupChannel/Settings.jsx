import {findByDisplayName} from "@cumcord/modules/webpack";
import {persist} from "@cumcord/pluginData";

const TextInput = findByDisplayName("TextInput");

export default () => {
  return (
    <TextInput
					className="sc-startupChannel"
					placeholder="Startup channel"
          value={persist.store.channel}
					onChange={(h) => persist.store.channel = h}
				/>
  );
}
