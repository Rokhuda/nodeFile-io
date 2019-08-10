const fs = require('fs');
global.counter = 0; //Keeps track of how many instances of the class are created


class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, visitorAssistor) {
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.visitorAssistor = visitorAssistor;
        counter++;
        this.number = counter; //Keeps track of how many instances of the class are created
    }

    //Saving information in JSON FILE:
    save() {
        let data = JSON.stringify(this);
        let num = this.number;
        try {
            
        } catch (error) {
            
        }
        fs.writeFileSync('visitor_' + num + '.json', data);

        return "File has been created."

}
  //loads
load() {
    let data = JSON.stringify(this)
    try {
        fs.readFileSync(path, data)
        } catch (err) {
            
        return data

    }
    
}
}

let visitor_1 = new Visitor('Rokhuda Tshitimbi', 30, "21/3/19", "1hr30", 'attentive', 'Ryuk');
let visitor_2 = new Visitor('Light Yagami', 19, "21/5/19", "3hr00", 'has potential', 'Rem');

console.log(visitor_1.save())
console.log(visitor_2.save())
console.log(visitor_1.load())
console.log(visitor_2.load())

module.exports = Visitor;