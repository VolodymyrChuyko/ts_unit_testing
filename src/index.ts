export function sum(a: number, b: number) {
  return a + b;
}

export function subtract(a: number, b: number) {
  return a - b;
}

export function fetchUser() {
  return new Promise<{id: number, name: string}>(resolve => {
    setTimeout(
    () => resolve({ id: 1, name: 'Jhon Doe' }),
    1000);
  });
}
