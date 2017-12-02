import * as React from 'react'

const classNames = require('classnames/bind')

import Ripple from 'common/components/Ripple'

const cx = classNames.bind(require('../style/header.scss'))


interface Props {
    scrollToSection: (sectionId: string) => void
}

interface State {
    isOpen: boolean
}

export default class Header extends React.Component<Props, State> {

    state = {
        isOpen: false
    }

    render() {
        const {scrollToSection} = this.props

        return (
            <div className={cx('wrap')}>
                <header className={cx('header')} id="header">
                    <div className="container flex justify-content-between align-items-center">
                        <div className={cx('logo')}>
                            <img className={cx('logo-img')} src={require('../img/confetti.svg')} alt=""/>
                            Поздравим<span className="ml-5 text-primary">всех</span>
                        </div>
                        <ul className={cx('nav', {'open': this.state.isOpen})}>
                            <li className={cx('nav-item')} onClick={() => scrollToSection('about')}>
                                <Ripple color="red" className={cx('nav-button')}>О нас</Ripple>
                            </li>
                            <li className={cx('nav-item')} onClick={() => scrollToSection('characters')}>
                                <Ripple color="red" className={cx('nav-button')}>Персонажи</Ripple>
                            </li>
                            <li className={cx('nav-item')} onClick={() => scrollToSection('orderForm')}>
                                <Ripple color="red" className={cx('nav-button')}>Оставить заявку</Ripple>
                            </li>
                            <li className={cx('nav-item')} onClick={() => scrollToSection('contacts')}>
                                <Ripple color="red" className={cx('nav-button')}>Контакты</Ripple>
                            </li>
                        </ul>
                        <div className={cx('menu')} onClick={this.handleToggleMenu} />
                    </div>
                </header>
            </div>
        )
    }

    private handleToggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
