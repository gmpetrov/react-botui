# react-botui

> Simple wrapper around botui

[![NPM](https://img.shields.io/npm/v/react-botui.svg)](https://www.npmjs.com/package/@gpetrov/react-botui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @gpetrov/react-botui
```

## Usage

```jsx
import React, { Component } from 'react'

import BotUI from 'react-botui'

class Example extends Component {
  componentDidMount() {
    const botui = new window.BotUI('botui-app')

    botui.message.bot({ delay: 200, content: 'hello' })
  }

  render() {
    return <BotUI id="botui-app" />
  }
}
```

## License

MIT © [gmpetrov](https://github.com/gmpetrov)
