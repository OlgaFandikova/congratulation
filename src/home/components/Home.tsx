import * as React from 'react'

const wow = require('wowjs')
import {TimelineMax} from 'gsap'

import Slider from './Slider'
import About from './About'
import SchemeWorking from './SchemeWorking'
import Characters from './Characters'
import OrderForm from './OrderForm'
import Contacts from './Contacts'


export default class Home extends React.Component<{}, {}> {

    componentDidMount() {
        new wow.WOW({
            mobile: false
        }).init()
    }

    render() {
        return (
            <div>
                <Slider scrollToSection={this.handleScrollToSection} />
                <About scrollToSection={this.handleScrollToSection} />
                <SchemeWorking />
                <Characters />
                <OrderForm />
                <Contacts />
            </div>
        )
    }

    private handleScrollToSection = (sectionId: string) => {
        const tl = new TimelineMax()
        const body = [document.documentElement, document.body]
        const header = document.getElementById('header') as any
        const section = document.getElementById(sectionId) as any
        const scrollTop = section.offsetTop - header.offsetHeight

        tl.to(body, 0.75, {
            scrollTop: scrollTop
        })
    }
}
