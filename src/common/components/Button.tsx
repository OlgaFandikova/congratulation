import * as React from 'react'

const classNames = require('classnames/bind')

import Ripple from './Ripple'

const cx = classNames.bind(require('./style/button.scss'))


interface Props {
    width?: number
    height?: number
    color?: string
    className?: string
    onClick?: () => void
}

export default class Button extends React.Component<Props, {}> {

    render() {
        const {width, height, color, className, onClick} = this.props

        return (
            <button onClick={onClick} style={{width: width, height: height}} className={cx('button', color, className)}>
                <Ripple color={color} className={cx('ripple')}>
                    {this.props.children}
                </Ripple>
            </button>
        )
    }
}
