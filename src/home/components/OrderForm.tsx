import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {Moment} from 'moment'
const moment = require('moment')

import InputField from 'common/components/InputField'
import TextareaField from 'common/components/TextareaField'
import SelectField from 'common/components/SelectField'
import DatePicker from 'common/components/DatePicker'
import Radio from 'common/components/Radio'
import Button from 'common/components/Button'
import SuccessOrderModal from './SuccessOrderModal'

import 'react-datepicker/dist/react-datepicker.css'


interface FormProps {
    name: string
    phone: string
    email: string
    babyName: string
    babyAge: string
    gender: string
    city: string
    comment: string
    character: string
    date: Moment
}

interface State {
    form: FormProps
    formErrors: FormProps
    isOpenSuccessOrderModal: boolean
}

const initialFormState = {
    name: '',
    phone: '',
    email: '',
    babyName: '',
    babyAge: '',
    gender: 'Мальчик',
    city: '',
    comment: '',
    character: '',
    date: null as any
}

const characterOptions = ['Дед Мороз', 'Нолик (Фиксики)', 'Молния Маквин (Тачки)', 'Смешарики (Крош)',
    'Смешарики (Нюша)', 'Смешарики (Лосяш)', 'Черепашки ниндзя (Микелянджелло)', 'Черепашки ниндзя (Рафаэль)',
    'Черепашки ниндзя (Донателло)', 'Черепашки ниндзя (Леонардо)', 'Миньон', 'Чип и Дейл (Любой из героев, кроме Вжика - уточнить в примечании)',
    'Барбоскины (Любой из героев - уточнить в примечании)', 'Лунтик', 'Хочу сделать заявку на подбор голоса (Уточнить в примечании)']

export default class OrderForm extends React.Component<{}, State> {

    state = {
        form: initialFormState,
        formErrors: {} as FormProps,
        isOpenSuccessOrderModal: false
    }

    render() {
        const {form: {name, phone, email, babyName, babyAge, gender, city, comment, character, date}, formErrors,
               isOpenSuccessOrderModal} = this.state

        return (
            <section className="section" id="orderForm">
                <div className="container">
                    <h2 className="mb-10 text-primary text-center">Оставить заявку</h2>
                    <p className="font-18 text-center">Для заказа необходимо оставить заявку на сайте</p>
                    <iframe name="hiddenIframe" style={{display: 'none'}} onLoad={() => {return false}} />
                    <form
                        ref="form"
                        style={{display: 'none'}}
                        action="https://docs.google.com/forms/d/e/1FAIpQLSc_XomZ1kqHqP5BhALVdLhAzDOPZbwY_MOaRjW1_zbtkcE50Q/formResponse"
                        method="post"
                        target="hiddenIframe"
                    >
                        <input type="text" name="entry.521284723" value={name} readOnly />
                        <input type="text" name="entry.1842782635" value={phone} readOnly />
                        <input type="text" name="entry.1758408083" value={email} readOnly />
                        <input type="text" name="entry.1185931276" value={babyName} readOnly />
                        <input type="text" name="entry.1769270770" value={gender} readOnly />
                        <input type="text" name="entry.217536178" value={babyAge} readOnly />
                        <input type="text" name="entry.1935632738" value={character} readOnly />
                        <input type="text" name="entry.822369980" value={city} readOnly />
                        <input type="text" name="entry.2138541312_day" value={moment(date).format('DD')} readOnly />
                        <input type="text" name="entry.2138541312_month" value={moment(date).format('MM')} readOnly />
                        <input type="text" name="entry.2138541312_year" value={moment(date).format('YYYY')} readOnly />
                        <input type="text" name="entry.297930897_hour" value={moment(date).format('HH')} readOnly />
                        <input type="text" name="entry.297930897_minute" value={moment(date).format('mm')} readOnly />
                        <input type="text" name="entry.1022715280" value={comment} readOnly />
                    </form>
                    <div className="row mt-60">
                        <div className="column md-6 wow slideInLeft">
                            <InputField
                                placeholder="Ваше имя"
                                value={name}
                                error={formErrors.name ? formErrors.name : ''}
                                onChange={(e: any) => this.handleChangeField('name', e.target.value)}
                            />
                            <InputField
                                placeholder="Ваш телефон"
                                value={phone}
                                error={formErrors.phone ? formErrors.phone : ''}
                                onChange={(e: any) => this.handleChangeField('phone', e.target.value)}
                            />
                            <InputField
                                placeholder="Ваш Email"
                                value={email}
                                error={formErrors.email ? formErrors.email : ''}
                                onChange={(e: any) => this.handleChangeField('email', e.target.value)}
                            />
                            <InputField
                                placeholder="Имя Вашего малыша"
                                value={babyName}
                                error={formErrors.babyName ? formErrors.babyName : ''}
                                onChange={(e: any) => this.handleChangeField('babyName', e.target.value)}
                            />
                            <InputField
                                placeholder="Возраст Вашего малыша"
                                type="number"
                                value={babyAge}
                                error={formErrors.babyAge ? formErrors.babyAge : ''}
                                onChange={(e: any) => this.handleChangeField('babyAge', e.target.value)}
                            />
                            <Radio id="boy" name="gender" label="Мальчик" checked={gender == 'Мальчик'}
                                   onChange={() => this.handleChangeField('gender', 'Мальчик')} />
                            <Radio id="girl" name="gender" label="Девочка" checked={gender == 'Девочка'}
                                   onChange={() => this.handleChangeField('gender', 'Девочка')} />
                        </div>
                        <div className="column md-6 wow slideInRight">
                            <SelectField
                                placeholder="Выберите персонажа"
                                value={character}
                                error={formErrors.character ? formErrors.character : ''}
                                onChange={(value: string) => this.handleChangeField('character', value)}
                                options={characterOptions}
                            />
                            <InputField
                                placeholder="Ваш город"
                                value={city}
                                error={formErrors.city ? formErrors.city : ''}
                                onChange={(e: any) => this.handleChangeField('city', e.target.value)}
                            />
                            <DatePicker
                                selected={date}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="LLL"
                                locale="ru"
                                error={formErrors.date ? formErrors.date : ''}
                                placeholderText="Выберите дату и время поздравления"
                                onChange={(date: Moment) => this.handleChangeField('date', date)}
                            />
                            <TextareaField
                                placeholder="Комментарий"
                                value={comment}
                                onChange={(e: any) => this.handleChangeField('comment', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="text-center mt-30 wow fadeInUp">
                        <Button color="blue" onClick={this.handleSubmit}>Оформить заказ</Button>
                    </div>
                </div>
                <SuccessOrderModal isOpen={isOpenSuccessOrderModal} close={this.handleCloseSuccessOrderModal} />
            </section>
        )
    }

    private handleChangeField = (field: string, value: any) => {
        this.setState({...this.state,
            form: {...this.state.form,
                [field]: value
            },
            formErrors: {} as FormProps
        })
    }

    private handleSubmit = () => {
        let formErrors = this.handleValidate(this.state.form)

        if (Object.keys(formErrors).length) {
            this.setState({...this.state,
                formErrors: formErrors
            })
        } else {
            const form = ReactDOM.findDOMNode(this.refs.form) as any

            form.submit()

            this.handleOpenSuccessOrderModal()
        }
    }

    private handleValidate = (values: FormProps) => {
        let errors = {} as any

        if (!values.name) {
            errors.name = 'Введите Ваше имя'
        }
        if (!values.phone) {
            errors.phone = 'Введите Ваш телефон'
        }
        if (!values.email) {
            errors.email = 'Введите Ваш email'
        }
        if (!values.babyName) {
            errors.babyName = 'Введите имя Вашего малыша'
        }
        if (!values.babyAge) {
            errors.babyAge = 'Введите возраст Вашего малыша'
        }
        if (!values.city) {
            errors.city = 'Введите Ваш город'
        }
        if (!values.character) {
            errors.character = 'Выберите персонажа'
        }
        if (!values.date) {
            errors.date = 'Выберите дату и время поздравления'
        }

        return errors
    }

    private handleOpenSuccessOrderModal = () => {
        this.setState({...this.state,
            form: initialFormState,
            isOpenSuccessOrderModal: true
        })
    }

    private handleCloseSuccessOrderModal = () => {
        this.setState({...this.state,
            isOpenSuccessOrderModal: false
        })
    }
}
