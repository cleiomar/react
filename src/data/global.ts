class GlobalVars {
  private static instance: GlobalVars;
  private variable1: boolean;
  private variable2: boolean;
  private listeners: Function[] = [];

  private constructor() {
    if (!GlobalVars.instance) {
      this.variable1 = true;
      this.variable2 = true;
      GlobalVars.instance = this;
    }

    return GlobalVars.instance;
  }

  getVariable1() {
    return this.variable1;
  }

  setVariable1(value: boolean) {
    this.variable1 = value;
    this.notifyListeners();
  }

  getVariable2() {
    return this.variable2;
  }

  setVariable2(value: string) {
    this.variable2 = value;
    this.notifyListeners();
  }

  addListener(listener: Function) {
    this.listeners.push(listener);
  }

  removeListener(listener: Function) {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => {
      if (typeof listener === 'function') {
        listener();
      }
    });
  }
}

const instance = new GlobalVars();
//Object.freeze(instance);

export default instance;