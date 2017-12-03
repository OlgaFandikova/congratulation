import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('../style/contacts.scss'))


export default class Contacts extends React.Component<{}, {}> {

    render() {
        return (
            <section className={cx('section', 'section-bg')} id="contacts">
                <div className="container text-center">
                    <h2 className="text-secondary mb-10">Контакты</h2>
                    <p>Вы можете связаться с нами в любое время!</p>
                    <div className="row mt-50">
                        <div className="column sm-6">
                            <a href="https://www.instagram.com/greetingsforall/?hl=ru" className={cx('item')} target="_blank">
                                <img src={require('../img/instagram.svg')} className={cx('icon')} alt="" />
                                Greetingsforall
                            </a>
                        </div>
                        <div className={cx('column', 'sm-6', 'border')}>
                            <a href="mailto:PozdravimVseh.rf@gmail.com" className={cx('item')} target="_blank">
                                <img src={require('../img/letter.svg')} className={cx('icon')} alt="" />
                                PozdravimVseh.rf@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
