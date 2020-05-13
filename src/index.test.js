import React from 'React'
import renderer from 'react-test-renderer'
import { ColombiaAd } from './index.js'

describe('ColombiaAd', () => {
  it('is truthy', () => {
    expect(ColombiaAd).toBeTruthy()
  })

  it('does render colombia script', () => {
    const tree = renderer
      .create(
        <ColombiaAd
          mobileSlotId='<mobile id>'
          desktopSlotId='<desktop id>'
          section='ArticleShow'
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
