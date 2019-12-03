

let turtles = [
    {
        key: 1,
        routeName: "donnie",
        name: "Donnie",
        hp: 300,
        attack: 15,
        block: function () {
            this.specialMeter += 20;
        },
        specialMeter: 0,
        special: function () {
            if (this.specialMeter >= 100) {
                console.log("special move successful")
                this.hp += 100;
                this.specialMeter = 0;
            }
            else {
                console.log("special meter not full yet");
                return
            }
        }
    },
    {
        key: 2,
        routeName: "leo",
        name: "Leo",
        hp: 350,
        attack: 20,
        block: function () {
            this.specialMeter += 15;
        },
        specialMeter: 0,
        special: function () {
            if (this.specialMeter >= 100) {
                console.log("special move successful")
                this.hp += 25;
                this.attack += 5
                this.specialMeter = 0;
            }
            else {
                console.log("special meter not full yet");
                return
            }
        }
    },
    {
        key: 3,
        routeName: "mikey",
        name: "Mikey",
        hp: 300,
        attack: 15,
        block: function () {
            this.specialMeter += 25;
        },
        specialMeter: 0,
        special: function () {
            if (this.specialMeter >= 100) {
                console.log("special move successful")
                this.hp += 100;
                this.specialMeter = 10;
            }
            else {
                console.log("special meter not full yet");
                return
            }
        }
    },
    {
        key: 1,
        routeName: "raph",
        name: "Raph",
        hp: 400,
        attack: 25,
        block: function () {
            this.specialMeter += 10;
        },
        specialMeter: 0,
        special: function () {
            if (this.specialMeter >= 100) {
                console.log("special move successful")
                this.hp += 50;
                this.attack += 10
                this.specialMeter = -10;
            }
            else {
                console.log("special meter not full yet");
                return
            }
        }
    }
]





module.exports = turtles;



