declare module 'immutable-ics' {
  export class Property {
    constructor(data?: any);
    name: string;
    parameters?: any;
    value: any;
  }

  export class Component {
    constructor(data?: any);
    name: string;
    properties: Property[];
    components: Component[];
    pushProperty(property: Property): Component;
    pushComponent(component: Component): Component;
  }
}

