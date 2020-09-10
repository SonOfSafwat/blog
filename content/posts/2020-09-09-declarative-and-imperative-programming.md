---
template: post
title: Declarative and Imperative Programming
slug: declarative-and-imperative-programming
draft: false
date: 2020-09-09T10:53:18.761Z
description: Declarative and Imperative Programming
category: Today I Learned
tags:
  - functional programming
  - imperative programming
  - javascript
  - code bites
---
This excerpt is taken from Eric Elliot [article](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0) about functional programming. 

Functional programming is a declarative paradigm, meaning that the program logic is expressed without explicitly describing the flow control.

**Imperative** programs spend lines of code describing the specific steps used to achieve the desired results — the **flow control: How** to do things.

**Declarative** programs abstract the flow control process, and instead spend lines of code describing the **data flow: What** to do. The *how* gets abstracted away.

For example, this **imperative** mapping takes an array of numbers and returns a new array with each number multiplied by 2:

```javascript
const doubleMap = numbers => {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
};

console.log(doubleMap([2, 3, 4])); // [4, 6, 8]
```

This **declarative** mapping does the same thing, but abstracts the flow control away using the functional `Array.prototype.map()` utility, which allows you to more clearly express the flow of data:

```javascript
const doubleMap = numbers => numbers.map(n => n * 2);

console.log(doubleMap([2, 3, 4])); // [4, 6, 8]
```



**Imperative** code frequently utilizes statements. A **statement** is a piece of code which performs some action. Examples of commonly used statements include `for`, `if`, `switch`, `throw`, etc…

**Declarative** code relies more on expressions. An **expression** is a piece of code which evaluates to some value. Expressions are usually some combination of function calls, values, and operators which are evaluated to produce the resulting value.