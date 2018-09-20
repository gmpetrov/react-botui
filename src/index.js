import React from 'react'

import './vue-global'
import BotUI from 'botui' // eslint-disable-line

import '../node_modules/botui/build/botui.min.css'
import '../node_modules/botui/build/botui-theme-default.css'

const BotUIComponent = ({ id }) => (
  <div id={id || 'botui'}>
    <bot-ui />
  </div>
)

export default BotUIComponent
