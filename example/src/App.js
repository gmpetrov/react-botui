import React, { Component } from 'react';

import BotUI from 'react-botui';
import '../node_modules/react-botui/dist/style.css';

export default class App extends Component {
  componentDidMount() {
    if (!window || !window.BotUI) {
      return;
    }

    const botui = new window.BotUI('botui-app');

    botui.message
      .bot({
        // show first message
        delay: 200,
        content: 'hello'
      })
      .then(function() {
        return botui.message.bot({
          // second one
          delay: 1000, // wait 1 sec.
          content: 'how are you?'
        });
      })
      .then(function() {
        return botui.action.button({
          // let user do something
          delay: 1000,
          action: [
            {
              text: 'Good',
              value: 'good'
            },
            {
              text: 'Really Good',
              value: 'really_good'
            }
          ]
        });
      })
      .then(function(res) {
        return botui.action
          .select({
            action: {
              placeholder: 'Select Language',
              value: 'TR,EN', // Selected value or Selected Array object. Example: [{value: "TR", text : "Türkçe" },{value: "EN", text : "English" }]
              multipleselect: true, // Default: false
              options: [
                { value: 'EN', text: 'English' },
                { value: 'ES', text: 'Español' },
                { value: 'TR', text: 'Türkçe' },
                { value: 'DE', text: 'Deutsch' },
                { value: 'FR', text: 'Français' },
                { value: 'IT', text: 'Italiano' }
              ],
              button: {
                icon: 'check',
                label: 'OK'
              }
            }
          })
          .then(function(res) {
            // will be called when a button is clicked.
            console.log(res.value); // will print "one" from 'value'
          });
      });
  }

  render() {
    return (
      <div>
        <BotUI id={'botui-app'} />
      </div>
    );
  }
}
