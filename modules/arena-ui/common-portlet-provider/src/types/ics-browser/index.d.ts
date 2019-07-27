declare namespace ics {

  function createEvent(attributes: any, callback?: any): void;
  function createEvents(attributes: any, callback?: any): void;
}

declare module 'ics-browser' {
  export = ics;
}
