var today = new Date();
var hour = today.getHours();
var greeting;
if (hour >= 18) {
    greeting = 'good evening'
} else if (hour >= 12) {
    greeting = 'good afternoon'
} else if (hour >= 6) {
    greeting = 'good morning'
} else {
    greeting = 'welcome'
}
//변수는 ''안에 넣으면 안됨
document.write('<span>' + greeting + '</span>')