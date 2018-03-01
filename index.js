let $ = require('jquery');
let _ = require('underscore');

const showUsers = function(usersCount) {
  $.ajax({
    url: 'https://randomuser.me/api/?nat=US&results=' + usersCount,
    dataType: 'json',
    success: function(data) {
      var names = getNames(data.results);
      populateTable(names);
    }
  });
};

const getNames = function(users) {
  return _.map(users, function(user) {
    return { firstName: user.name.first, lastName: user.name.last };
  });
};

const populateTable = function(userNames) {
  var table = document.getElementById('usersTable');
  table.innerHTML += "<tr><th>First Name</th><th>Last Name</th><tr>"
  _.each(userNames, function(userName) {
    table.innerHTML += "<tr><td>" + userName.firstName + "</td><td>" + userName.lastName + "</td></tr>"
  })
};
