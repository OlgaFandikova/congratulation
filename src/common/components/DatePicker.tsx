import * as React from 'react'

const classNames = require('classnames/bind')
import DatePicker, {ReactDatePickerProps} from 'react-datepicker'

const cx = classNames.bind(require('./style/datePicker.scss'))


interface Props extends ReactDatePickerProps {
    error: string
}

export default class DatePickerComponent extends React.Component<Props & any, {}> {

    render() {
        const {selected, error, showTimeSelect, timeFormat, timeIntervals, dateFormat, locale, placeholderText, onChange} = this.props

        return (
            <div className="mb-20">
                <DatePicker
                    selected={selected}
                    showTimeSelect={showTimeSelect}
                    timeFormat={timeFormat}
                    timeIntervals={timeIntervals}
                    dateFormat={dateFormat}
                    locale={locale}
                    placeholderText={placeholderText}
                    className={cx('date-picker', {'error': error})}
                    onChange={onChange}
                />
                {!!error &&
                    <div className="text-error font-14 mt-5">{error}</div>
                }
            </div>
        )
    }
}