interface IsPerson {
    name: String;
    age: number;
    speak(a: string): void;
    spent(a: number): number;
  }
  
  const me: IsPerson = {
    name: "shaun",
    age: 30,
    speak(text: string): void {
      console.log(text);
    },
    spent(number: 2000): number {
      console.log(number);
      return number;
    },
  };
  