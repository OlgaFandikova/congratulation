import * as React from 'react'

const classNames = require('classnames/bind')

import Ripple from 'common/components/Ripple'

const cx = classNames.bind(require('../style/header.scss'))


export default class Header extends React.Component<{}, {}> {

    render() {
        return (
            <header>
                <div className={cx('container', 'header')}>
                    <div className={cx('logo')}>
                        <img className={cx('logo-img')} src={require('../img/balloons.svg')} alt=""/>
                        Поздравим<span className="ml-5 text-primary">всех</span>
                    </div>
                    <ul>
                        <li className={cx('nav-item')}>
                            <Ripple color="red" className={cx('nav-button')}>О нас</Ripple>
                        </li>
                        <li className={cx('nav-item')}>
                            <Ripple color="red" className={cx('nav-button')}>Персонажи</Ripple>
                        </li>
                        <li className={cx('nav-item')}>
                            <Ripple color="red" className={cx('nav-button')}>Оставить заявку</Ripple>
                        </li>
                        <li className={cx('nav-item')}>
                            <Ripple color="red" className={cx('nav-button')}>Контакты</Ripple>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
