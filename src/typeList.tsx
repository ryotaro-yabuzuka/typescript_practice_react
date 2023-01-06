/* eslint-disable @typescript-eslint/no-unused-vars */
//** TypeScriptの基本の型 */

//boolean
let bool: boolean = true;

//number 数値
let num: number = 0;

//string 文字
let str: string = "A";

//Array 配列
//<>で囲むことで、中のかたも指定できる
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple
let tuple: [number, string] = [0, "A"];

//any
//なんでも良い、できれば使わないのが理想
let any1: any = false;

//void
//何も返却値がないことを意味する
//記述しなくても型推論してくれる
const func1 = (): void => {
  const test = "TEST";
};

//null型
let null1: null = null;

//undefined
//何も設定されていない
let undefined1: undefined = undefined;

//object
let obj1: object = {};
//objectのそれぞれの要素にを型を設定することもできる
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
