/*var meh = ``
var nameMap = {};

meh = meh.split('\n');

for (var x = 0; x < meh.length; x++) {
	nameMap[meh[x]] = x;
}

console.log(nameMap);
*/

function generateNames() {
    var list = document.getElementById('nameList');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    for (var x = 0; x < 50; x++) {
        var firstname = first_names[Math.floor(Math.random() * first_names.length)];
        var lastname = last_names[Math.floor(Math.random() * last_names.length)];
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(firstname.name + " " + lastname.name)); // + " " + ));
        list.appendChild(entry);
    }
}

/*
add these later
, Jr.
 III
, Sr.
 II
 IV
 V
 */