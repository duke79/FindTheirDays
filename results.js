var usersStr = localStorage.getItem("users");
var usersJson = JSON.parse(usersStr);
var sortable = [];
for (var user in usersJson)
    sortable.push([user, usersJson[user]]);

sortable.sort(function(a, b) {
    return b[1] - a[1];
});

for(var i=0;i<sortable.length;i++)
{
	console.log(sortable[i][0]+" = "+sortable[i][1]);
}
