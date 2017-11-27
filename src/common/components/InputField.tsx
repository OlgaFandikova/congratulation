import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('./style/inputField.scss'))


interface Props {
    placeholder?: string
    value?: any
    error?: string
    className?: string
    type?: string
    onChange?: (e: any) => void
}

export default class InputField extends React.Component<Props, {}> {

    render() {
        const {placeholder, value, className, error, type, onChange} = this.props

        return (
            <div className={cx('field', className)}>
                <input type={type ? type : 'text'} className={cx('input', {'error': !!error})} value={value} onChange={onChange} placeholder={placeholder} />
                {!!error &&
                    <div className="text-error font-14 mt-5">{error}</div>
                }
            </div>
        )
    }
}
