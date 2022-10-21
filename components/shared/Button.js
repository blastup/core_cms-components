import React from "react"

export default class Button extends React.Component {
  render () {
  	const { type, value, disabled, className, linkTo, onClick } = this.props

    return (
    	<React.Fragment>
        {linkTo ? <a href={linkTo} className={className} onClick={ onClick }>{value}</a> :
                  <input type={type || 'button'} value={value} disabled={disabled} className={ className} onClick={ onClick } />
        }
      </React.Fragment>
    )
  }
}
