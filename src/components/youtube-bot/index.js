import React from 'react';
import annyang from 'annyang';

export default function ({ onCommand }) {
  const commands = ['repeat', 'again', 'next', 'reset', 'stop', 'play', 'pause'];

  React.useEffect(() => {
    if (annyang) {
      // define commands
      const cmdObject = {};
      commands.forEach(cmd => cmdObject[cmd] = () => onCommand(cmd));
      annyang.addCommands(cmdObject);

      //start listening
      annyang.start();

      return () => {
        annyang.abort();
      };
    }
  });

  return '';
}