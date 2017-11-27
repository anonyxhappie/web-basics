var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {

        var response = JSON.parse(xhttp.responseText);
        var people = response.people;
        var output = '';
        for (var index = 0; index < people.length; index++) {
            output += '<li>' + people[index].name + ', ' + people[index].age + '</li>';
        }
        document.getElementById('people').innerHTML = output;
    }
};
xhttp.open('GET', 'people.json', true);
xhttp.send();

var nxhttp = new XMLHttpRequest();
nxhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {

        var response = JSON.parse(nxhttp.responseText);
        var people = response.newpeople;
        var output = '';
        for (var index = 0; index < people.length; index++) {
            output += '<li>' + people[index].name + '</li>';
        }
        document.getElementById('newpeople').innerHTML = output;
    }
};
nxhttp.open('GET', 'newpeople.json', true);
nxhttp.send();