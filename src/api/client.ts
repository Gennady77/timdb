import { Response } from '../types'

const personsResponse = [{
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

const laptopResponse = [{
    model: 'Digma Eve 11 C409',
    manufacturerCode: '[ES2056EW]',
    os: 'Windows 10 Домашняя',
    gamingLaptop: false,
    releaseYear: 2020,
}];

export const client = {
    get:<T> (url = '') =>
        new Promise<Response<T>>((resolve) => {
            setTimeout(() => {
                let response: any;

                switch (url) {
                    case '/api/persons':
                        response = personsResponse;
                        break;
                    case '/api/laptops':
                        response = laptopResponse;
                }

                resolve({
                    data: response
                });
            }, 1000);
        })
};