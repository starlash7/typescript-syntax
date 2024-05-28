function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greet("662"));

console.log(greet("662", "Bye"));
