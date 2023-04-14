import powers from '../data/powers'

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power() {
    return powers.find(power => power.id === this.powerId)?.desc || 'Not found'
  }
}

export class Hero1 {}
export class Hero2 {}
export class Hero3 {}
export class Hero4 {}
