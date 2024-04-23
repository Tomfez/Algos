class MyArray {

    constructor() {
        this.value = [];
    }

    addItemAtBeginning(item) {
        const arrLength = this.value.length;
        const newArr = new Array(arrLength + 1);

        newArr[0] = item;
        for (let i = 0; i < arrLength; i++) {
            newArr[i + 1] = this.value[i];
        }
        this.value = newArr;
    }

    addItemAtEnd(item) {
        const arrLength = this.value.length;
        const newArr = new Array(arrLength + 1);

        let i = 0;

        while (i < arrLength) {
            newArr[i] = this.value[i];
            i++;
        }

        newArr[i] = item;
        this.value = newArr;

        this.value = newArr;
    }

    addItemAtPosition(item, position) {
        const arrLength = this.value.length;
        if (position < 0 || position > arrLength) {
            throw new Error("wrong input");
        }

        const newArr = new Array(arrLength + 1);

        let i = 0;
        let j = 0;

        while (i < arrLength) {
            if (i === position) {
                newArr[j] = item;
                j++;
            }

            newArr[j] = this.value[i];
            i++;
            j++;
        }
        this.value = newArr;
    }

    addItemAtPosition2(item, position) {
        const arrLength = this.value.length;
        if (position < 0 || position > arrLength)
            throw new Error("wrong input");

        const newArr = new Array(arrLength + 1);

        for (let i = 0; i < arrLength + 1; i++) {
            if (i === position) {
                newArr[i] = item;
            }
            else if (i < position) {
                newArr[i] = this.value[i];
            }
            else if (i > position) {
                newArr[i] = this.value[i - 1];
            }
        }

        this.value = newArr;
    }

    removeItemAtBeginning() {
        if (this.value.length === 0) {
            return;
        } else {
            const newArray = new Array(this.value.length - 1);
            for (let i = 1; i < this.value.length; i++) {
                newArray[i - 1] = this.value[i];
            }
            this.value = newArray;
        }
    }

    removeItemAtEnd() {
        if (this.value.length === 0) {
            return;
        } else {
            const newArray = new Array(this.value.length - 1);
            for (let i = 0; i < this.value.length - 1; i++) {
                newArray[i] = this.value[i];
            }
            this.value = newArray;
        }
    }

    removeItemAtPosition(position) {
        if (position < 0 || position >= this.value.length) {
            throw new Error('wrong input');
        } else {
            const newArray = new Array(this.value.length - 1);
            for (let i = 0; i < this.value.length; i++) {
                if (i < position) {
                    newArray[i] = this.value[i];
                } else if (i > position) {
                    newArray[i - 1] = this.value[i];
                }
            }
            this.value = newArray;
        }
    }
}

const myArr = new MyArray();
myArr.addItemAtBeginning("a");
myArr.addItemAtBeginning("b");
myArr.addItemAtEnd("z");
myArr.addItemAtPosition("d", 2);
myArr.addItemAtPosition2("e", 4);

console.log(myArr.value);

myArr.removeItemAtPosition(2);
console.log("removeItemAtPosition", myArr.value);

myArr.removeItemAtBeginning();
console.log("removeItemAtBeginning", myArr.value);

myArr.removeItemAtEnd();
console.log("removeItemAtEnd", myArr.value);