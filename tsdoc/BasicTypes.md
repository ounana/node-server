# Basic Types

## Introduction
For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along.  
为了使程序变得有用，我们需要能够使用一些最简单的数据单元：数字，字符串，结构体，布尔值等。在TypeScript中，我们支持与JavaScript中几乎相同的类型，并支持实用的枚举类型以帮处理问题。

## Boolean
The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a `boolean` value.  
最基本的数据类型是简单的true和false值，JavaScript和Typescript将其称为boolean值。
```ts
let isDone: boolean = false;
```

## Number
As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type `number`, while BigIntegers get the type `bigint`. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.  
与JavaScript中一样，所有的数字都是浮点值或BigIntegers。浮点值获取number类型，BigIntegers获取bigint类型。除了十六进制和十进制，TypeScript还支持ECMAScript 2015中引入的二进制和八进制。
```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```

## String
Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type `string` to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.  
用JavaScript为网页和服务器创建程序的另一个基本部分是处理文本数据。与其他语言一样，我们使用类型string来引用这些文本数据。与JavaScript一样，TypeScript也使用双引号或者单引号包围字符串数据。
```ts
let octal: number = 0o744;
```

You can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (\`) character, and embedded expressions are of the form `${ expr }`.  
你也可以使用模板字符串，它可以跨越多行并具有嵌套表达式。这些字符串由反勾号/反引号包围，嵌套表达式的格式为${ expr }。
```ts
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
```

This is equivalent to declaring sentence like so:  
这相当于这样的句子：
```ts
let sentence: string = 
  "Hello, my name is " + 
  fullName + 
  ".\n\n" + 
  "I'll be" + 
  (age + 1) + 
  " years old next month.";
```

## Array
TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:  
TypeScript和JavaScript一样，允许使用值数组。数组类型可以使用两种方法之一编写。在第一种情况下，使用元素类型后跟[]来表示该元素类型的数组：
```ts
let list: number[] = [1, 2, 3];
```
The second way uses a generic array type, `Array<elemType>`:  
第二种方法使用泛型数组类型，`Array<elemType>`：
```ts
let list: Array<number> = [1, 2, 3];
```

## Tuple
Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:  
元组类型允许使用固定数量的元素来表示数组，这些元素的类型已知，但不比相同。例如，你可以希望将值表示为一对字符串和一个数字：
```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
//Type 'number' is not assignable to type 'string'.
//Type 'string' is not assignable to type 'number'.
```
When accessing an element with a known index, the correct type is retrieved:  
当访问已知索引的元素时，将检索正确的类型：
```ts
console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'
//Property 'substring' does not exist on type 'number'.
```
Accessing an element outside the set of known indices fails with an error:  
访问已知索引之外的元素失败，并报错：
```ts
x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.
//Tuple type '[string, number]' of length '2' has no element at index '3'.

console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.
//Object is possibly 'undefined'.
//Tuple type '[string, number]' of length '2' has no element at index '5'.
```

## Enum
A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.  
对JavaScript中的标准数据类型的一个有益的补充是枚举。与C#等语言一样，枚举是为一组数值提供更友好名称的一种方式。
```ts
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```
By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:  
默认情况下，枚举从0开始对其成员进行编号。可以通过手动设置其中一个成员的值来更改此设置。例如，我们可以从1开始上一个示例，而不是从0开始：
```ts
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;
```
Or, even manually set all the values in the enum:  
或者，甚至手动设置枚举中的所有值：
```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
```
A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. For example, if we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the corresponding name:  
枚举的一个方便的特性是，您还可以从一个数值转到枚举中该值的名称。例如，如果我们有值2，但不确定它在上面的颜色枚举中映射到什么，我们可以查找相应的名称：
```ts
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];

console.log(colorName); // Displays 'Green' as its value is 2 above
```

## Any
We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type checking and let the values pass through compile-time checks. To do so, we label these with the any type:  
我们可能需要在编写应用程序时描述不知道的变量类型。这些值可能来自动态内容，例如来自用户或第三方库。在这些情况下，我们希望不要类型检查并让值通过类型检查。为此，我们将这些标记为any类型：
```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```
The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation. You might expect Object to play a similar role, as it does in other languages. However, variables of type Object only allow you to assign any value to them. You can’t call arbitrary methods on them, even ones that actually exist:  
any类型是使用现有JavaScript的一种强大方式，允许来编译期间逐步选择加入和退出类型检查。你可能希望Object扮演类似的功能，就像宰其他语言中一样。但是，Object类型的变量只允许你为它们赋值。你不能对他们调用任意方法，即使是实际存在的方法：
```ts
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
//Property 'toFixed' does not exist on type 'Object'.
```
The any type is also handy if you know some part of the type, but perhaps not all of it. For example, you may have an array but the array has a mix of different types:  
如果您知道类型的某些部分，但可能不是全部，则any类型也很方便。例如，您可能有一个数组，但该数组混合了不同的类型：
```ts
let list: any[] = [1, true, "free"];

list[1] = 100;
```

## Void
void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:  
void正好跟any相反：完全没有任何类型。你通常可以将不返回值的函数指定为此类型：
```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```
Declaring variables of type void is not useful because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:  
声明void类型的变量是没用的，因为您只能为它们指定null（仅当没有指定--strictNullChecks时，请参阅下一节）或undefined：
```ts
let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given
```

## Null and Undefined
In TypeScript, both undefined and null actually have their own types named undefined and null respectively. Much like void, they’re not extremely useful on their own:  
在TypeScript中，undefined和null实际上都有自己的类型，分别命名为undefined和null。就像void一样，它们本身并不是常用的：
```ts
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.  
默认情况下，null和undefined是所有其他类型的子类型。这意味着您可以将null和undefined赋给number之类的对象。  

However, when using the --strictNullChecks flag, null and undefined are only assignable to any and their respective types (the one exception being that undefined is also assignable to void). This helps avoid many common errors. In cases where you want to pass in either a string or null or undefined, you can use the union type string | null | undefined.  
但是，当使用--strictNullChecks标志时，null和undefined只能分配给any类型及其各自的类型（一个例外是undefined也可以分配给void）。这有助于避免许多常见错误。如果要传入字符串、null或undefined，可以使用union类型string | null |undefined。  

Union types are an advanced topic that we’ll cover in a later chapter.  
Union类型是一个高级类型，我们将在后面的章节中讨论。  

As a note: we encourage the use of --strictNullChecks when possible, but for the purposes of this handbook, we will assume it is turned off.  
注意：我们鼓励尽可能使用--strictNullChecks，但在本手册中，我们假设它已关闭。

## Never
The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.  
never类型表示从来不存在的值的类型。例如，never是函数表达式或箭头函数表达式的返回类型，它总是抛出异常或从不返回异常。当变量被任何永远不可能为真的类型保护器缩小时，变量也会获得永远不为真的类型。  

The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.  
never类型是每个类型的子类型，并且可以分配给每个类型；但是，没有类型是never的子类型，或者可以分配给never（除了never本身）。哪怕是any也不能分配never。  

Some examples of functions returning never:  
一些函数返回never的示例：
```ts
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {}
}
``` 
## Object
object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined.  
object是一个表示非原始类型的类型，即任何非number、string、boolean、symbol、null或undefined的类型。  

With object type, APIs like Object.create can be better represented. For example:  
对于object类型，类似API OBject.create 可以更好地表现。例如：
```ts
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
//Argument of type '42' is not assignable to parameter of type 'object | null'.
create("string"); // Error
//Argument of type '"string"' is not assignable to parameter of type 'object | null'.
create(false); // Error
//Argument of type 'false' is not assignable to parameter of type 'object | null'.
create(undefined); // Error
//Argument of type 'undefined' is not assignable to parameter of type 'object | null'.
```

## Type assertions
Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.  
有时，你将在这样一种情况下：你比TypeScript更了解一个值。通常，当你知道某个实体的类型可能比其当前的类型更具体时，就会发生这种情况。  

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.  
类型断言是告诉编译器“相信我，我知道我在做什么”的一种方式。类型断言类似于其他语言中的类型转换，但不执行数据的特殊检查或重组。它没有运行时影响，完全由编译器使用。TypeScript假设您，即程序员，已经执行了您需要的任何特殊检查。  

Type assertions have two forms. One is the “angle-bracket” syntax:  
类型断言有两种形式。一种是“尖括号”语法：
```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```
And the other is the as-syntax:  
另一种是as语法：
```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed.  
两个例子相当。只使用一种是最好的；但是，当在JSX中使用TypeScript时，只允许as语法断言。

## A note about let
You may have noticed that so far, we’ve been using the let keyword instead of JavaScript’s var keyword which you might be more familiar with. The let keyword is actually a newer JavaScript construct that TypeScript makes available. We’ll discuss the details later, but many common problems in JavaScript are alleviated by using let, so you should use it instead of var whenever possible.  
您可能已经注意到，到目前为止，我们使用的是let关键字，而不是您可能更熟悉的JavaScript var关键字。let关键字实际上是TypeScript提供的较新的JavaScript构造。我们稍后将讨论细节，但是JavaScript中的许多常见问题都可以通过使用let来缓解，因此您应该尽可能使用它而不是var。