import React from 'react'
import PropTypes from 'prop-types'


/**
 * A View component will output a div (default) element. The idea of using
 * View is to defines the position for its children in the DOM tree.
 */
export class View extends React.Component {

  render() {
    const styles = {
			default: {
				margin: 0,
				padding: 0,
			},
    }

    let setProps = {...this.props}
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

View.defaultProps = {
  children: [],
  tagName: 'div',
  style: {},
}
View.propTypes = {
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

export default View