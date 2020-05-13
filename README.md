# react-colombia-ads

> A react component for embedding colombia ads

[![NPM](https://img.shields.io/npm/v/react-colombia-ads.svg)](https://www.npmjs.com/package/react-colombia-ads) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-colombia-ads
```

## Usage

```jsx
import React, { Component } from 'react'

import ColumbiaAd from 'react-colombia-ads'
import 'react-colombia-ads/dist/index.css'

class Example extends Component {
  render() {
    return (
      <ColombiaAd
        mobileSlotId='337070'
        desktopSlotId='337057'
        style={colombiaAdStyle}
        section='ArticleShow'
      />
    )
  }
}
```

## License

MIT © [sharangj](https://github.com/sharangj)
