import * as React from 'react'
import * as ReactDOM from 'react-dom'

const classNames = require('classnames/bind')

import InputField from 'common/components/InputField'
import TextareaField from 'common/components/TextareaField'
import SelectField from 'common/components/SelectField'
import Radio from 'common/components/Radio'
import Button from 'common/components/Button'

const cx = classNames.bind(require('../style/orderForm.scss'))


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
}

interface State {
    form: FormProps
    formErrors: FormProps
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
    character: ''
}

const characterOptions = ['Дед Мороз', 'Нолик (Фиксики)', 'Молния Маквин (Тачки)', 'Смешарики (Крош)',
    'Смешарики (Нюша)', 'Смешарики (Лосяш)', 'Черепашки ниндзя (Микелянджелло)', 'Черепашки ниндзя (Рафаэль)',
    'Черепашки ниндзя (Донателло)', 'Черепашки ниндзя (Леонардо)', 'Миньон', 'Чип и Дейл (Любой из героев, кроме Вжика - уточнить в примечании)',
    'Барбоскины (Любой из героев - уточнить в примечании)', 'Лунтик', 'Хочу сделать заявку на подбор голоса (Уточнить в примечании)']

export default class OrderForm extends React.Component<{}, State> {

    state = {
        form: initialFormState,
        formErrors: {} as FormProps
    }

    render() {
        const {form: {name, phone, email, babyName, babyAge, gender, city, comment, character}, formErrors} = this.state

        return (
            <section className={cx('section')} style={{marginBottom: 1000}}>
                <div className="container">
                    <h2 className="mb-10 text-primary text-center">Оставить заявку</h2>
                    <p className="font-18 text-center">Для заказа необходимо оставить заявку на сайте</p>
                    <iframe name="hiddenIframe" style={{display: 'none'}} onLoad={() => {return false}} />
                    <form
                        ref="form"
                        style={{display: 'none'}}
                        action="https://docs.google.com/forms/d/e/1FAIpQLSf-A1wMtHOSt4YXezM7BsWLmk6_qslcpgz2B1hl5GLJ8FP1iw/formResponse"
                        method="post"
                        target="hiddenIframe"
                    >
                        <input type="text" name="entry.811039018" value={name} readOnly />
                        <input type="text" name="entry.1890618662" value={gender} readOnly />
                    </form>
                    <div className="row mt-60">
                        <div className="column sm-6">
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
                        <div className="column sm-6">
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
                            дата время
                            <TextareaField
                                placeholder="Комментарий"
                                value={comment}
                                onChange={(e: any) => this.handleChangeField('comment', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="text-center mt-30">
                        <Button color="blue" onClick={this.handleSubmit}>Оформить заказ</Button>
                    </div>
                </div>
            </section>
        )
    }

    private handleChangeField = (field: string, value: string) => {
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

            this.handleClearForm()
        }
    }

    private handleValidate = (values: FormProps) => {
        let errors = {} as FormProps

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

        return errors
    }

    private handleClearForm = () => {
        this.setState({...this.state,
            form: initialFormState
        })
    }
}
