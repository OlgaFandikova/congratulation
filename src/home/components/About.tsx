import * as React from 'react'

const classNames = require('classnames/bind')

import Ripple from 'common/components/Ripple'

const cx = classNames.bind(require('../style/about.scss'))


const delays = [
    {'data-wow-delay': '.2s'},
    {'data-wow-delay': '.4s'},
    {'data-wow-delay': '.6s'},
    {'data-wow-delay': '.8s'}
]

export default class About extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <section className="section">
                    <div className="container text-center">
                        <h2 className="text-secondary mb-10">О нас</h2>
                        <p className="font-18">Поздравляем малышей по телефону голосом любимого героя</p>
                        <div className="row mt-70">
                            <div className="column sm-3 wow fadeInUp" {...delays[0]}>
                                <i className={cx('icon', 'icon-bubbles')} />
                                <strong>Живое общение</strong><br/>
                                Актер подстраивается под малыша и ведет с ним активный диалог
                            </div>
                            <div className="column sm-3 wow fadeInUp" {...delays[1]}>
                                <i className={cx('icon', 'icon-baby')} />
                                <strong>Индивидуальных подход</strong> к каждому ребенку
                            </div>
                            <div className="column sm-3 wow fadeInUp" {...delays[2]}>
                                <i className={cx('icon', 'icon-list')} />
                                Возможность заказать <strong>голос любого персонажа</strong> из любого мультфильма
                            </div>
                            <div className="column sm-3 wow fadeInUp" {...delays[3]}>
                                <i className={cx('icon', 'icon-phone')} />
                                Звонок в <strong>удобное для Вас время</strong>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={cx('section', 'section-bg', 'wow', 'fadeInUp')} {...delays[1]}>
                    <div className="container text-center">
                        <h3 className="font-38 mb-30">
                            Впервые в России<br/>авторские поздравления для Ваших деток!
                        </h3>
                        <Ripple color="blue" className={cx('ripple-button')}>
                            <button className={cx('button')}>Заказать</button>
                        </Ripple>
                    </div>
                </section>
            </div>
        )
    }
}
