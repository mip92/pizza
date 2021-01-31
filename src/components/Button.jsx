import React from 'react'
import classNames from 'classnames'

function Button({buttonOnClick, className, outline, children}) {
    return (
        <button href="/cart.html"
                onClick={buttonOnClick}
                className={classNames(
                    'button', className,
                    {"button--outline": outline},

                )}>{children}</button>  /*className={`button ${this.props.outline ?' button--outline': ''}`}*/
    )
}

export default Button;
