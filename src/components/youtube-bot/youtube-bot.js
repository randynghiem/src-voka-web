import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import annyang from 'annyang';
import { dispatchCommand } from '../../event-handlers/dictation-handlers'

const CommandBot = ({ dispatch }) => {
  const commands = ['repeat', 'again', 'next', 'reset', 'stop'];

  useEffect(() => {
    if (annyang) {
      // define commands
      const cmdObject = {};
      commands.forEach(cmd => cmdObject[cmd] = () => dispatch(dispatchCommand(cmd)));
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

export default connect()(CommandBot);