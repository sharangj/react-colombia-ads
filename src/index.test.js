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

  it('renders only mobile when desktop slot id is not passed', () => {
    const tree = renderer
      .create(<ColombiaAd mobileSlotId='<mobile id>' section='ArticleShow' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree.props.className).toBe('displayMobile')
  })

  it('renders only desktop script for when mobile slot id is not passed', () => {
    const tree = renderer
      .create(<ColombiaAd desktopSlotId='<desktop id>' section='ArticleShow' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree.props.className).toBe('displayDesktop')
  })
})
