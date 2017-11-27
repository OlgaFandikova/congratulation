import * as React from 'react'

const classNames = require('classnames/bind')
const wow = require('wowjs')

import Slider from './Slider'
import About from './About'
import SchemeWorking from './SchemeWorking'
import OrderForm from './OrderForm'

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
                <SchemeWorking />
                <OrderForm />
            </div>
        )
    }
}
