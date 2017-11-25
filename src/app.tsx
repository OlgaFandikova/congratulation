import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Layout from './layout/components/Layout'
import Home from './home/components/Home'

import 'common/style/base.scss'
import 'animate.css/animate.css'


class App extends React.Component<{}, {}> {

    render() {
        return (
            <Layout>
                <Home />
            </Layout>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
)
