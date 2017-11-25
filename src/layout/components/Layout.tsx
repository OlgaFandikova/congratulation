import * as React from 'react'

import Header from './Header'

import '../style/layout.scss'


export default class Layout extends React.Component<{}, {}> {

    render() {
        return (
            <main>
                <Header />
                {this.props.children}
            </main>
        )
    }
}
