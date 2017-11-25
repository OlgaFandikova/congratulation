import * as React from 'react'

const classNames = require('classnames/bind')
const wow = require('wowjs')

import Slider from './Slider'
import About from './About'

const cx = classNames.bind(require('../style/home.scss'))


export default class Home extends React.Component<{}, {}> {

    componentDidMount() {
        new wow.WOW().init()
    }

    render() {
        return (
            <div>
                <Slider />
                <About />
                <div className="container">
                    <div style={{height: 1000}} />
                </div>
            </div>
        )
    }
}
