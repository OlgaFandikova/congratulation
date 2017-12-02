import * as React from 'react'

const classNames = require('classnames/bind')

import Character from './Character'

const cx = classNames.bind(require('../style/characters.scss'))


const delays = [
    {'data-wow-delay': '.2s'},
    {'data-wow-delay': '.4s'},
    {'data-wow-delay': '.6s'},
    {'data-wow-delay': '.8s'}
]

const characters = [
    {img: require('../img/characters/ded-moroz.jpg'), name: 'Дед Мороз', color: 'blue'},
    {img: require('../img/characters/mcqueen.jpg'), name: 'Молния Маквин', delay: delays[0], color: 'purple'},
    {img: require('../img/characters/luntik.jpg'), name: 'Лунтик', delay: delays[1], color: 'green'},
    {img: require('../img/characters/krosh.jpg'), name: 'Крош', color: 'red'},
    {img: require('../img/characters/nusha.jpg'), name: 'Нюша', delay: delays[0], color: 'yellow'},
    {img: require('../img/characters/losyash.jpg'), name: 'Лосяш', delay: delays[1], color: 'orange'},
    {img: require('../img/characters/barboskiny.jpg'), name: 'Барбоскины', color: 'purple'},
    {img: require('../img/characters/nolik.jpg'), name: 'Нолик', delay: delays[0], color: 'pink'},
    {img: require('../img/characters/mikelandzello.jpg'), name: 'Микелянджелло', delay: delays[1], color: 'blue'},
    {img: require('../img/characters/rafael.jpg'), name: 'Рафаэль', color: 'green'},
    {img: require('../img/characters/donatello.jpg'), name: 'Донателло', delay: delays[0], color: 'yellow'},
    {img: require('../img/characters/leonardo.jpg'), name: 'Леонардо', delay: delays[1], color: 'orange'},
    {img: require('../img/characters/minon.jpg'), name: 'Миньон', color: 'red'},
    {img: require('../img/characters/chip&deyl.jpg'), name: 'Чип и Дейл', delay: delays[0], color: 'purple'}
]

interface CharacterInterface {
    img: string
    name: string
    color: string
    delay?: {
        'data-wow-delay': string
    }
}

export default class Characters extends React.Component<{}, {}> {

    render() {
        return (
            <section className={cx('section', 'section-bg')} id="characters">
                <div className="container text-center">
                    <h2 className="text-secondary mb-10">Персонажи</h2>
                    <p className="font-18">
                        Выберите голос персонажа из представленных или закажите из любого мультфильма
                    </p>
                    <div className="row mt-100">
                        {characters.map((character: CharacterInterface, index: number) => (
                            <Character
                                key={index}
                                img={character.img}
                                name={character.name}
                                color={character.color}
                                delay={character.delay}
                            />
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}
