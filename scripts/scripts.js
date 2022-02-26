/*
328/js4/scripts/scripts
author mat cameron
this script validates input from json-search.html and
searches a json file for a  name match
 */

//this function gets user input searches json file ands returns results to html page
function enter(){

    let list = document.getElementById('ul')
     list.innerHTML = "";

    let name = document.getElementById("myText").value;
    name = splitname(name);

    let out = document.getElementById("output");

    let found = false;

    for (let i = 0; i < people.length; i++) {
        if(name === people[i].fname +" "+ people[i].lname ||name === people[i].fname){
            found = true
            out.textContent = " ";
            let item = document.createElement("li");
            item.innerHTML = "<pre>Name: "+people[i].fname +" "+ people[i].lname + "\n"
                + "Sex: "+people[i].sex + "\n"
                +"Born: "+people[i].born+ "\n"
                +"died: "+people[i].died+ "\n"
                +"Fathers name: "+people[i].fatherFname+" " +people[i].fatherLname+ "\n"
                +"Mothers name: "+people[i].motherFname+" "+people[i].motherLname + "</pre>";
            list.appendChild(item);
        }
        if(!found)
            out.innerText="no person found";

    }
}

// this is a helper function that formats user input
// so user can input Jane or jane upper case or lower case
function fixinput(nam){
    console.log(nam);
    nam = nam.toLowerCase();
    console.log(nam);
    nam = nam.charAt(0).toUpperCase() + nam.slice(1)
    console.log(nam+"new");
    return nam;
}

//this helper function allows user to input jane or jane doe
//
function splitname(name){
    let sName;
    sName = name.split(' ');
    let fname = sName[0];
    let lname = sName[1];

    if(!lname){
        fname= fixinput(fname);
        return fname;
    }else
        return fixinput(fname)+" "+fixinput(lname);
}