import React from 'react'
import PropTypes from 'prop-types'


/**
 * A View component defines the position for its child components.
 * For example, if you want to set margins and padding of a component
 * you should wrap it with a View component and put the paddings and
 * margins there.
 */
export class _View extends React.Component {

  render() {
    const styles = {
			default: {
				margin: 0,
				padding: 0,
			},
    }
		let setProps = this.props
		setProps.style = {
			...styles.default,
			...this.props.style,
		}

		const TagName = this.props.tagName

    return (
      <TagName {...setProps}>
        {this.props.children}
      </TagName>
    )
  }
}

_View.defaultProps = {
  children: [],
  tagName: 'div',
  style: {},
}
_View.propTypes = {
  /**
   * Content of the view.
   */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Override or extend the default styles.
   */
  style: PropTypes.object,
  /**
   * Type of HTML-tag output.
   */
  tagName: PropTypes.string,
  /**
   * Handle click.
   */
  onClick: PropTypes.func,
}

export default _View