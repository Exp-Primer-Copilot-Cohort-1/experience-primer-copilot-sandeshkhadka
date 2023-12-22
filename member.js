function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'MySQL'];
    var member = {
        name: 'John',
        age: 30,
        skills: skills,
        address: {
            city: 'Paris',
            zip: 75000,
            country: 'France'
        }
    };
    console.log(member.skills[2]);
    console.log(member.address.city);
    console.log(member.address.zip);
    console.log(member.address.country);
    console.log(member['address']['country']);
    console.log(member['address'].country);
    console.log(member['address']['city']);
    console.log(member['address'].city);
}