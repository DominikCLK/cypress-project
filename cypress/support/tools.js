export default class Tools {

    static getRandomString(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static getRandomName(length) {
        let result = '';
        let charactersUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charactersLowerCase = 'abcdefghijklmnopqrstuvwxyz';
        let charactersLength = charactersUpperCase.length;

        for (let i = 0; i < length; i++) {
            if (i < 1) {
                result = charactersUpperCase.charAt(Math.floor(Math.random() * charactersLength));
            } else {
                result += charactersLowerCase.charAt(Math.floor(Math.random() * charactersLength));
            }
        }
        return "ATTests" + result;
    }

    
    static getRandomInt(length) {
        return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)).toString();
    }

    static getRandomPhoneNumberWithCountryCode() {
        let result = '+48';
        return result + (Math.floor(Math.random() * 900000000) + 100000000);
    }

    static getRandomEmail(){
        let result = '@gmail.com';
        return this.getRandomName(3) + '.' + this.getRandomName(3) + (Math.floor(Math.random() * 900000) + 100000) + result;
    }    
}