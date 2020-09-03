import React, { useState } from 'react';

export const DrumMachineContext = React.createContext();

const Store = ({children}) => {
  const [powerSwitch, togglePowerSwitch] = useState(true);
  const [bankSwitch, toggleBankSwitch] = useState(false);
  const [soundName, updateSoundName] = useState("");
  const [soundLevel, updateSoundLevel] = useState(66);

  return (
    <DrumMachineContext.Provider 
      value = {{
        powerSwitch,
        togglePowerSwitch,
        bankSwitch,
        toggleBankSwitch,
        soundName,
        updateSoundName,
        soundLevel,
        updateSoundLevel
      }}
    >
      {children}
    </DrumMachineContext.Provider>
  )
}

export default Store;