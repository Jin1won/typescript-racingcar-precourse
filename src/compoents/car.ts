class Car {
  name: string;

  forward: number;

  constructor(name: string, forward: number) {
    this.name = name;
    this.forward = forward;
  }

  getCarName() {
    return this.name;
  }

  setCarName(name: string) {
    this.name = name;
  }

  getCarForward() {
    return this.forward;
  }

  setCarForward(forward: number) {
    this.forward = forward;
  }
}

export default Car;
