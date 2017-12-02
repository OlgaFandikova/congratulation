import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('../style/footer.scss'))


interface Props {
    scrollToSection: (sectionId: string) => void
}

export default class Footer extends React.Component<Props, {}> {

    render() {
        const {scrollToSection} = this.props

        return (
            <div>
                <footer className={cx('footer')}>
                    <div className="container">
                        <div className="row">
                            <div className="column md-5 flex align-items-center mb-40">
                                <img src={require('../img/confetti.svg')} className={cx('logo')} alt="" />
                                <h2 className="text-white mb-0">
                                    Поздравим<div className="text-secondary">Всех</div>
                                </h2>
                            </div>
                            <div className="column lg-4 md-3 sm-6 mb-40">
                                <ul className={cx('list')}>
                                    <li className={cx('list-item', 'border-item')} onClick={() => scrollToSection('about')}>О нас</li>
                                    <li className={cx('list-item', 'border-item')} onClick={() => scrollToSection('characters')}>Персонажи</li>
                                    <li className={cx('list-item', 'border-item')} onClick={() => scrollToSection('orderForm')}>Оставить заявку</li>
                                </ul>
                            </div>
                            <div className="column lg-3 md-4 sm-6">
                                <ul>
                                    <li className={cx('list-item')}>
                                        <a href="https://www.instagram.com/greetingsforall/?hl=ru" target="_blank">
                                            <img src={require('../img/instagram.svg')} className={cx('icon')} alt="" />
                                            greetingsforall
                                        </a>
                                    </li>
                                    <li className={cx('list-item')}>
                                        <a href="mailto:PozdravimVseh.rf@gmail.com" target="_blank">
                                            <img src={require('../img/email.svg')} className={cx('icon')} alt="" />
                                            PozdravimVseh.rf@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className={cx('copyright')}>
                    <div className="container">Copyright &copy; 2017 Поздравим всех</div>
                </div>
            </div>
        )
    }
}
