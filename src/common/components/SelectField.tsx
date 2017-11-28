import * as React from 'react'
import * as ReactDOM from 'react-dom'

const classNames = require('classnames/bind')

import Ripple from 'common/components/Ripple'

const cx = classNames.bind(require('./style/selectField.scss'))


interface Props {
    options: Array<string>
    placeholder?: string
    value?: any
    error?: string
    className?: string
    onChange?: (e: any) => void
}

interface State {
    isOpenMenu: boolean
}

export default class SelectField extends React.Component<Props, State> {

    state = {
        isOpenMenu: false
    }

    componentDidMount() {
        window.addEventListener('click', this.handleCloseMenu)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleCloseMenu)
    }

    render() {
        const {options, placeholder, value, className, error} = this.props

        return (
            <div className={cx('field', className)}>
                <div
                    ref="value"
                    className={cx('value', {'focus': this.state.isOpenMenu}, {'error': error})}
                    onClick={this.handleToggleMenu}
                >
                    {value ? value : <span className={cx('placeholder')}>{placeholder}</span>}
                    <span className={cx('arrows')} />
                </div>
                <ul className={cx('menu', {'open': this.state.isOpenMenu})}>
                    {options.map((option: string, index: number) => (
                        <li key={index}>
                            <Ripple color="default" className={cx('menu-item')} onClick={() => this.handleChange(option)}>
                                {option}
                            </Ripple>
                        </li>
                    ))}
                </ul>
                {!!error &&
                    <div className="text-error font-14 mt-5">{error}</div>
                }
            </div>
        )
    }

    private handleToggleMenu = () => {
        this.setState({...this.state,
            isOpenMenu: !this.state.isOpenMenu
        })
    }

    private handleCloseMenu = (e: any) => {
        const value = ReactDOM.findDOMNode(this.refs.value)

        if (!!value && !value.contains(e.target)) {
            this.setState({...this.state,
                isOpenMenu: false
            })
        }
    }

    private handleChange = (value: string) => {
        this.props.onChange(value)

        this.setState({...this.state,
            isOpenMenu: false
        })
    }
}
