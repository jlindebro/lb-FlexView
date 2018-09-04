import React from 'react'
import PropTypes from 'prop-types'
import View from './View'


/**
 * A FlexView component will output a div (via View component)
 * with preset Flex CSS settings.
 */
export default class _FlexView extends React.Component {

  render() {

    const styles = {
      default: {
        height: '100%',
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }

    let outputStyles = {
      ...styles.default,
      ...this.props.style,
    }

    if (outputStyles.width === '100%') {
      outputStyles = {
        ...outputStyles,
        ...{
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        },
      }
    }
    if (outputStyles.height === '100%') {
      outputStyles = {
        ...outputStyles,
        ...{
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
        },
      }
    }

    let setProps = this.props
    setProps.style = outputStyles

    return (
      <View
        {...setProps}
      >
        {this.props.children}
      </View>
    )
  }
}
_FlexView.defaultProps = {
  tagName: 'div',
  style: {},
}
_FlexView.propTypes = {
  /**
  * The content of the component
  */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Override or extend the default styles. If you want to use
   * paddingLeft/Right or marginLeft/Right set width to 'unset'.
   * The same to height if you want using paddingTop/Bottom or
   * marginTop/Bottom.
   */
  style: PropTypes.object,
  /**
   * Type of HTML-tag output.
   */
  tagName: PropTypes.string,
}
