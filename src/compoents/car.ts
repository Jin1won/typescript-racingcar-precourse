class Car {
  name: string;

  forward: number;

  constructor(name: string, forward: number) {
    this.name = name;
    this.forward = forward;
  }

  getCarName() {
    console.log(this.name);
    return this.name;
  }

  setCarName(name: string) {
    this.name = name;
    console.log(this.name);
  }

  getCarForward() {
    console.log(this.forward);
    return this.forward;
  }

  setCarForward(forward: number) {
    this.forward = forward;
    console.log(this.forward);
  }
}

export default Car;
