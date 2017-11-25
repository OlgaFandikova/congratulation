import * as React from 'react'
import * as ReactDOM from 'react-dom'

const classNames = require('classnames/bind')
const Parallax = require('parallax-js')

import Ripple from 'common/components/Ripple'

const cx = classNames.bind(require('../style/slider.scss'))


const dataDepths = [
    {'data-depth': 0.1},
    {'data-depth': 0.2},
    {'data-depth': 0.3},
    {'data-depth': 0.4},
    {'data-depth': 0.5},
    {'data-depth': 0.6},
    {'data-depth': 0.7}
]

interface State {
    animate: boolean
}

export default class Slider extends React.Component<{}, State> {

    state = {
        animate: false
    }

    componentDidMount() {
        this.setState({
            animate: true
        }, () => {
            setTimeout(() => {
                const container = ReactDOM.findDOMNode(this.refs.container)
                const images = ReactDOM.findDOMNode(this.refs.images)

                const parallaxContainer = new Parallax(container)
                const parallaxImages = new Parallax(images)

                this.setState({
                    animate: false
                })
            }, 2100)
        })
    }

    render() {
        const {animate} = this.state

        return (
            <section className={cx('slider')}>
                <div ref="images" className={cx('images')}>
                    <img
                        {...dataDepths[1]}
                        src={require('../img/cloud.png')}
                        className={cx('cloud', 'left', {'animated bounceInDown': animate})}
                        alt=""
                    />
                    <img
                        {...dataDepths[2]}
                        src={require('../img/cloud.png')}
                        className={cx('cloud', 'right', {'animated bounceInDown': animate})}
                        alt=""
                    />
                    <img
                        {...dataDepths[1]}
                        src={require('../img/flower.png')}
                        className={cx('flower', {'animated bounceInDown': animate})}
                        alt=""
                    />
                    <img
                        {...dataDepths[2]}
                        src={require('../img/bird.png')}
                        className={cx('bird', {'animated bounceInDown': animate})}
                        alt=""
                    />
                    <img
                        {...dataDepths[0]}
                        src={require('../img/star.png')}
                        className={cx('star', {'animated bounceInDown': animate})}
                        alt=""
                    />
                    <div {...dataDepths[3]} className={cx('rectangle', 'top', {'animated bounceInDown': animate})}/>
                    <div{...dataDepths[0]} className={cx('rectangle', 'left', {'animated bounceInUp': animate})} />
                    <div {...dataDepths[2]} className={cx('rectangle', 'right', {'animated bounceInUp': animate})} />
                </div>
                <div className={cx('container', 'slider-container')} ref="container">
                    <div className={cx('text', {'animated fadeInDown': animate})}>
                        <h1 className={cx('title')}>Авторские поздравления<br/>для Ваших малышей</h1>
                        <Ripple className={cx('ripple-button')}><button className={cx('button')}>Заказать</button></Ripple>
                    </div>
                    <div {...dataDepths[0]} className={cx('circle', 'purple', {'animated bounceIn': animate})} />
                    <div {...dataDepths[1]} className={cx('circle', 'green', {'animated bounceIn': animate})} />
                    <div {...dataDepths[6]} className={cx('circle', 'yellow', {'animated bounceIn': animate})} />
                    <div {...dataDepths[3]} className={cx('circle', 'violet', {'animated bounceIn': animate})} />
                    <div {...dataDepths[2]} className={cx('circle', 'blue', {'animated bounceIn': animate})} />
                    <div {...dataDepths[4]} className={cx('circle', 'red', {'animated bounceIn': animate})} />
                    <div {...dataDepths[6]} className={cx('circle', 'small-green', {'animated bounceIn': animate})} />
                </div>
            </section>
        )
    }
}
