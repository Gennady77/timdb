import React, { Fragment } from 'react'
import { PersonData } from '../../types'

interface Props {}

const Home: React.FC<Props> = () => {
    const persons: PersonData[] = [{
        name: 'Иван',
        surname: 'Иванов',
        patronymic: 'Иванович',
    }, {
        name: 'Виктор',
        surname: 'Петров',
        patronymic: 'Сергеевич',
    }, {
        name: 'Анатолий',
        surname: 'Кузнецов',
        patronymic: 'Степанович',
    }, {
        name: 'Денис',
        surname: 'Золотарёв',
        patronymic: 'Валерьевич',
    }, {
        name: 'Юрий',
        surname: 'Кравченко',
        patronymic: 'Александрович',
    }];

    return (
        <Fragment>
            <table className="usa-table">
                <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                </tr>
                </thead>
                <tbody>
                {(persons.map(person =>
                    <tr>
                        <td>{person.surname}</td>
                        <td>{person.name}</td>
                        <td>{person.patronymic}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>

    )
}

export default Home
