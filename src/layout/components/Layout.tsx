import * as React from 'react'

import {TimelineMax} from 'gsap'

import Header from './Header'
import Footer from './Footer'
import PageLoader from './PageLoader'

import '../style/layout.scss'


export default class Layout extends React.Component<{}, {}> {

    render() {
        return (
            <main>
                <PageLoader />
                <Header scrollToSection={this.handleScrollToSection} />
                {this.props.children}
                <Footer scrollToSection={this.handleScrollToSection} />
            </main>
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
