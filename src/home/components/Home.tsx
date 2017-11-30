import * as React from 'react'

const wow = require('wowjs')

import Slider from './Slider'
import About from './About'
import SchemeWorking from './SchemeWorking'
import Characters from './Characters'
import OrderForm from './OrderForm'


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
                <Characters />
                <OrderForm />
            </div>
        )
    }
}
