import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('../style/schemeWorking.scss'))


const delays = [
    {'data-wow-delay': '.2s'},
    {'data-wow-delay': '.4s'},
    {'data-wow-delay': '.6s'},
    {'data-wow-delay': '.8s'}
]

export default class SchemeWorking extends React.Component<{}, {}> {

    render() {
        return (
            <section className="section">
                <div className="container text-center">
                    <h2 className="text-primary mb-10">Как мы работаем</h2>
                    <p className="font-18">Lorem ipsum dolor sit amet, consectetur</p>
                    <div className="row mt-100">
                        <div className="column md-3 sm-6 mb-30 wow fadeInRight" {...delays[0]}>
                            <h3 className="text-right text-default font-38 mb-0">1.</h3>
                            <i className={cx('icon', 'icon-form')} />
                            Вы оставляете <strong>заявку</strong> нас на сайте
                        </div>
                        <div className="column md-3 sm-6 mb-30 wow fadeInRight" {...delays[1]}>
                            <h3 className="text-right text-default font-38 mb-0">2.</h3>
                            <i className={cx('icon', 'icon-operator')} />
                            Наш <strong>оператор связывается</strong> с вами, для уточнения деталей заказа
                        </div>
                        <div className="column md-3 sm-6 mb-30 wow fadeInRight" {...delays[2]}>
                            <h3 className="text-right text-default font-38 mb-0">3.</h3>
                            <i className={cx('icon', 'icon-wallet')} />
                            <strong>Оплата</strong> производится только после связи с оператором
                        </div>
                        <div className="column md-3 sm-6 mb-30 wow fadeInRight" {...delays[3]}>
                            <h3 className="text-right text-default font-38 mb-0">4.</h3>
                            <i className={cx('icon', 'icon-holiday')} />
                            Актер звонит по указанному в заявке номеру и дарит <strong>праздник Вашему Малышу</strong>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
