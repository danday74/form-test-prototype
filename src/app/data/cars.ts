import { ICar } from '../interfaces/i-car'

const carz: ICar[] = [
  {
    make: 'Vauxhall',
    model: 'Corsa',
    name: null,
    value: null
  },
  {
    make: 'Ford',
    model: 'Fiesta',
    name: null,
    value: null
  },
  {
    make: 'Audi',
    model: 'A3',
    name: null,
    value: null
  }
]

export const cars: ICar[] = carz.map((car: ICar) => {
  car.name = `${car.make} ${car.model}`
  car.value = `${car.make}-${car.model}`.toLowerCase()
  return car
})
