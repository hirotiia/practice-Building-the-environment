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

// enum 列挙型

enum CofeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI',
}

const cofee = {
    hot: true,
    size: Cofeesize.TALL
}

// TSにおけるany型 javascriptに戻る(typescriptではanyはなるべく使わないように心がける)

let anything: any = true;
anything = 'Hello';
anything = 1;
anything = [ 'イー','アー','サー','スー'];
anything = {};

// ユニオン型

let UnionType: number | string = 10;

// ユニオンタイプの値が数字の場合 (numberで使用できるメソッドが使用可能になる)
UnionType.toUpperCase();
UnionType = '卍';
// ユニオンタイプの値が文字の場合 (stringで使用できるメソッドが使用可能になる)
UnionType.toUpperCase();

// ユニオン型　　配列バージョン

let UnionTypes: (string|number)[] = [21,'Hello'];

// ◎ポイント：constで下記のような記述をした場合リテラル型になるがletで記述した場合にはstring型になる。
// リテラル型 string型の中の'apple'型という型ができる。もう'apple'しか入れられない。 (どこで使うん....)
// boolean,numberでも同じく設定可能

const apple: 'apple' = 'apple';
let grape: 'grape' = 'grape';

const size: 'S' | 'M' | 'L' = 'L';

const ClothSize: {
    color: string,
    size: 'S' | 'M' | 'L',
} = {
    color: 'red',
    size: 'M'
}

// タイプエイリアス 型を変数のように扱える (alias:別名、通称)
// 👇コンパイルすると消えます。
type CarColor = 'Black' | 'Red' | 'White';

const Car1: {
    color: CarColor,
    price: number
} = {
    color: 'Black',
    price: 10000000,
}





