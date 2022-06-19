function Logging(constructor: Function) {
    console.log('Logging...');
}

// デコレーターはクラスの定義時に実行される
@Logging
class User {
    name = 'quil';
    constructor () {
        console.log('User was created!');
    }
}