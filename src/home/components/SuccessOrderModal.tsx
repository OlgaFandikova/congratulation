import * as React from 'react'

const classNames = require('classnames/bind')

import Ripple from 'common/components/Ripple'
import Button from 'common/components/Button'

const cx = classNames.bind(require('../style/successOrderModal.scss'))


interface Props {
    isOpen: boolean
    close: () => void
}

export default class SuccessOrderModal extends React.Component<Props, {}> {

    render() {
        const {isOpen, close} = this.props

        return (
            <div className={cx('wrap', {'active': isOpen})}>
                <div className={cx('overlay', {'animated fadeIn': isOpen})} onClick={close} />
                <div className={cx('modal-container')}>
                    <div className={cx('modal', {'animated bounceIn': isOpen})}>
                        <Ripple color="default" className={cx('button-close')} onClick={close}>
                            <img src={require('../img/close.svg')} className={cx('icon-close')} alt="" />
                        </Ripple>
                        <img src={require('../img/checked.svg')} alt="" />
                        <div className="ml-50">
                            <h4>Ваша заявка отправлена!</h4>
                            <p className="mb-40">Мы свяжемся с Вами в ближайшее время для уточнения деталей заказа</p>
                            <div className="flex justify-content-end">
                                <Button color="blue" width={130} onClick={close}>Ok</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
