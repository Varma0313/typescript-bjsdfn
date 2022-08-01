class teacher {
  private _hours: number;
  public get hours(): number {
    return this._hours;
  }
  public set hours(v: number) {
    this._hours = v;
  }
  constructor(hours: number) {
    this._hours = hours;
  }
  public total(totalhour: number): void {
    this._hours += totalhour;
  }
  public withdraw(totalhour: number): void {
    if (this._hours < totalhour) {
      console.log('Insufficient hours');
      return;
    }
    this._hours -= totalhour;
  }
}
class students extends teacher {
  public month = 22;
  constructor(totalhour: number) {
    super(totalhour);
  }

  public totalhours(): void {
    this.month = super.hours + super.hours * 0.45;
    super.hours = 36;
  }
}
let rd = new students(0);
console.log('working hour of the teacher', rd.hours);
let perMonth: number[] = Array.from({ length: 22 }, (i, ind) => ind + 1);
for (let item of perMonth) {
  rd.total(6);
  console.log('Every working hour after 6 session per day', rd.hours);
}
rd.totalhours();
console.log('After considering the break for every day', rd.month);
console.log('Now total working hours of Teacher per week', rd.hours);
