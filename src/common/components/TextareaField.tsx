import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('./style/textareaField.scss'))


interface Props {
    placeholder?: string
    value?: any
    className?: string
    onChange?: (e: any) => void
}

export default class TextareaField extends React.Component<Props, {}> {

    render() {
        const {placeholder, value, className, onChange} = this.props

        return (
            <div className={cx('field', className)}>
                <textarea className={cx('input')} value={value} onChange={onChange} placeholder={placeholder} />
            </div>
        )
    }
}
