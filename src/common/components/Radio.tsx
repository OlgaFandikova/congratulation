import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('./style/radio.scss'))


interface Props {
    id: string
    name?: string
    label?: string
    value?: any
    checked?: boolean
    className?: string
    onChange?: (e: any) => void
}

export default class Radio extends React.Component<Props, {}> {

    render() {
        const {id, name, label, checked, className, onChange} = this.props

        return (
            <div className={cx('field', className)}>
                <input id={id} name={name} type="radio" className={cx('radio')} checked={checked} onChange={onChange} />
                <label htmlFor={id} className={cx('label')}>{label}</label>
            </div>
        )
    }
}
