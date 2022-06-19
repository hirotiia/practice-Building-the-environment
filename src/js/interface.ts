/** 
 * interface と タイプエイリアスの違い
 * interface: objectのみ
 * タイプエイリアス: なんでもいける
 * ⇨ではinterface いらないのでは？
 * interfaceを使うことで絶対objectじゃーん！とわかりやすい
 **/



interface Human {
    name: string;
    age: number;
    greeting(message: string): void;
}

class Developer implements Human {
    constructor(public name: string, public age: number) {}

    greeting(message: string) {
        console.log('Hello');
    }
}

let developer: Human;