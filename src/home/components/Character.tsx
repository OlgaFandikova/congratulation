import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('../style/character.scss'))


interface Props {
    img: string
    name: string
    color: string
    delay?: {
        'data-wow-delay': string
    }
}

export default class Character extends React.Component<Props, {}> {

    render() {
        const {img, name, delay, color} = this.props

        return (
            <div className="column md-4 sm-6">
                <div className={cx('item', 'wow', 'fadeInUp')} {...delay}>
                    <div className={cx('img-container')}>
                        <div className={cx('img')} style={{
                            background: `url(${img}) no-repeat center`,
                            backgroundSize: 'contain'
                        }} />
                    </div>
                    <div className={cx('name', color)}>{name}</div>
                </div>
            </div>
        )
    }
}
