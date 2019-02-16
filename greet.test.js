const greet = require('./greet');
// 1
test('Write a method greet(name)', () => {
    expect(greet("Bob"));
});

test('when name is "Earth", the method should return a string "Hello, Earth.".', () => {
    expect(greet("Earth")).toBe('Hello, Earth.');
});


// 2
test('when name is null, then the method should return the string "Hello, my friend."', () => {
    expect(greet(null)).toBe('Hello, my friend.');
});


// 3
test('when name is "JERRY" then the method should return the string "HELLO JERRY!"', () => {
    expect(greet("JERRY")).toBe('HELLO JERRY!');
});


// 4
test('when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', () => {
    expect(greet(["Jill","Jane"])).toBe('Hello, Jill and Jane.');
});


//5
test('when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe('Hello, Amy, Brian, and Charlotte.');
});


//6
test('when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', () => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!');
});