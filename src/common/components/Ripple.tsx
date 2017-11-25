import * as React from 'react'
import * as ReactDOM from 'react-dom'

const classNames = require('classnames/bind')
import {TimelineMax} from 'gsap'

const cx = classNames.bind(require('./style/ripple.scss'))


interface Props {
    color?: string
    className?: string
    onClick?: () => void
}

interface State {
    width: number
    height: number
}

export default class Ripple extends React.Component<Props, State> {

    state = {
        width: 0,
        height: 0
    }

    render() {
        const {color, className, onClick} = this.props

        return (
            <div className={cx('container', className)} onMouseDown={this.handleMouseDown} onClick={onClick}>
                {this.props.children}
                <svg viewBox={`0 0 ${this.state.width} ${this.state.height}`} className={cx('obj', color)}>
                    <circle ref="ripple" cx="1" cy="1" r="1" />
                </svg>
            </div>
        )
    }

    private handleMouseDown = (event: any) => {
        const elem         = ReactDOM.findDOMNode(this.refs.ripple),
              tl           = new TimelineMax(),
              x            = event.nativeEvent.offsetX,
              y            = event.nativeEvent.offsetY,
              w            = event.target.offsetWidth,
              h            = event.target.offsetHeight,
              offsetX      = Math.abs( (w / 2) - x ),
              offsetY      = Math.abs( (h / 2) - y ),
              deltaX       = (w / 2) + offsetX,
              deltaY       = (h / 2) + offsetY,
              scaleRatio   = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))

        this.setState({...this.state,
            width: w,
            height: h,
        })

        tl.fromTo(elem, 0.5, {
            x: x,
            y: y,
            transformOrigin: '50% 50%',
            scale: 0,
            opacity: 1
        }, {
            scale: scaleRatio,
            opacity: 0
        })
    }
}
