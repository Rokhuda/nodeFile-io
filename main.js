const fs = require('fs');
global.counter = 0; //Keeps track of how many instances of the class are created
let data;
module.exports = class Visitor {
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
        fs.writeFileSync('Visitor_' + num + '.json', data);

        console.log(data);
        
        return "File has been created."

    }


    //Takes in number and returns visitor associated with the number
    load(num) {

        fs.readdir(process.cwd(), handleFiles); ///Read files in the folder    (Process.cwd() = current working directory)
        var filename;
        var i;

        function handleFiles(err, files) {
            for (i = 0; i < files.length; ++i) {
                filename = files[i];
                if (filename.match(num)) //Match filename with strings(num)
                {
                    //Open the file and get the name:
                    fs.readFile(filename, (err, data) => {
                        if (err) throw err;
                        let guest = JSON.parse(data);
                        console.log(guest);
                        return guest;
                    });
                }
            }
        }
        return num;
    }
}

// visitor = new Visitor('Rokhuda', 12, "21/3/19", "1hr30", 'Shinigami love apples', 'Ryuk');
// visitor2 = new Visitor('Light', 12, "21/5/19", "3hr00", 'Shinigami love apples', 'Ryuk');
// visitor3 = new Visitor('Rem', 12, "21/5/19", "4hr00", 'Shinigami love apples', 'Ryuk');

/*  save(visitor); */
// save(visitor2);
// save(visitor3);
// console.log(visitor.save());
// console.log(visitor.load(1))
// console.log(visitor.save());
// console.log(visitor.load(2))
// console.log(visitor.save());
// console.log(visitor.load(3))


//Testing
// load(1);
// load(2);
// load(3); 