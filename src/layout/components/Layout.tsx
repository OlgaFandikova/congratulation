import * as React from 'react'

import Header from './Header'
import PageLoader from './PageLoader'

import '../style/layout.scss'


export default class Layout extends React.Component<{}, {}> {

    render() {
        return (
            <main>
                <PageLoader />
                <Header />
                {this.props.children}
            </main>
        )
    }
}
