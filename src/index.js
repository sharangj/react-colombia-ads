import PT from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

class ColombiaAd extends React.Component {
  componentDidMount() {
    /* eslint-disable no-use-before-define */
    if (typeof colombia === 'undefined') {
      var colombia = colombia || {}
      colombia.fns = colombia.fns || []
      ;(function () {
        var cads = document.createElement('script')
        cads.async = true
        cads.type = 'text/javascript'
        cads.src = '//static.clmbtech.com/ctn/commons/js/colombia_v2.js'
        var node = document.getElementsByTagName('script')[0]
        node && node.parentNode.insertBefore(cads, node)
      })()
    }
  }

  render() {
    const colombiaAdStyle = {
      minHeight: '2px',
      width: '100%'
    }
    return (
      <React.Fragment>
        {this.props.mobileSlotId && (
          <div className={styles.displayMobile}>
            <div
              id={`div-clmb-ctn-${this.props.mobileSlotId}-1`}
              style={this.props.style || colombiaAdStyle}
              data-slot={this.props.mobileSlotId}
              data-position={`${this.props.position || 1}`}
              data-section={this.props.section}
              data-ua='M'
              className='colombia'
            />
          </div>
        )}
        {this.props.desktopSlotId && (
          <div className={styles.displayDesktop}>
            <div
              id={`div-clmb-ctn-${this.props.desktopSlotId}-1`}
              style={this.props.style || colombiaAdStyle}
              data-slot={this.props.desktopSlotId}
              data-position={`${this.props.position + 1 || 2}`}
              data-section={this.props.section}
              data-ua='D'
              className='colombia'
            />
          </div>
        )}
      </React.Fragment>
    )
  }
}

ColombiaAd.propTypes = {
  mobileSlotId: PT.string,
  desktopSlotId: PT.string,
  style: PT.object,
  position: PT.number,
  section: PT.string
}

export { ColombiaAd }
