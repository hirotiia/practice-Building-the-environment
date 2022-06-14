export default (a: number, b: number): string => {
    return `Result is ${a + b}`;
}

// オブジェクトの型注釈の書き方

const person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 20
}

console.log(person.age);

// 配列の型注釈

const array: string[] = ['りんご','みかん','パイナップル'];

// Tuple型 配列ないの型の順番まで厳しく審査する

const book: [string, number, boolean] = ['onepiece', 600, true];

// でも配列にpushすることはできる[エラーにならないが参照した際にエラーになる]
book.push(21);