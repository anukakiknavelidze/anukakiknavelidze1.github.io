/*
 */
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus est sed ante rhoncus iaculis. " +
    "Pellentesque nec risus lectus. Sed euismod diam et justo molestie, ut tincidunt lorem tincidunt. " +
    "Cras iaculis nisi placerat, varius justo at, consectetur lectus. Etiam porttitor sapien nibh, " +
    "non cursus massa finibus et. Fusce rhoncus accumsan purus, sit amet maximus nisl varius vitae. Maecenas " +
    "tincidunt placerat nibh eu convallis. Aenean vitae felis vitae metus iaculis pulvinar nec eu orci. Aliquam a " +
    "aliquam leo. Quisque feugiat ligula vel efficitur porttitor. Curabitur congue ex quis urna gravida aliquet. " +
    "Mauris arcu enim, pulvinar vitae nulla at, dignissim pharetra libero. ";
//ცვლადი "ლორემ" შემოგვაქვს და მნიშვნელობას ვანიჭებთ.

var id = "container";
//ცვლადი "აიდი" შემოგვაქვს და მნიშვნელობას ვანიჭებთ. (String) Container

var el = document.getElementById(id);
// ცვლადი "ელ" შემოგვაქვს, რომელსაც აიდის მიხედვით გამოაქვს ელემენტი "აიდი" დოკუმენტიდან.

for (var i = 0; i < 10; i++) { /* "For"-გამეორების ბრძანება;ცვლადი "I" (ინკრიმენტი). მასა ყოველ ჯერზე იმატებს ერთით.*/
    var row = document.createElement("div"); //შემოდის ცვლადი "Row", რომელიც დოკუმენტში ქმნის "Div" ელემენტს.//
    row.classList.add("row"); //ცვლად "როუს" ენიჭება კლასი "როუ"//
    for (var j = 0; j < 3; j++) { //შემოდის ახალი ცვლადი ჯეი, რომლის საწყისი მნიშვნელობაა 0, ნაკლებია სამზე და იზრდება ერთით.//
        var col = document.createElement("div"); //ცვლადი ქოლ დოკუმენტში ქმნის ელემენტს სახელად დივ//
        col.classList.add("col"); //ცვლად ქოლს ენიჭება კლასი ქოლ.//
        col.innerHTML = lorem;// ცვლადი ქოლის შიდა ეიჩტიემელში იწერება ცვლადი ლორემის მნიშვნელობა.//
        col.style.backgroundColor = "#5" + i + j * 4; //ქოლს ენიჭება ბექგრაუნდის ფერი, რომელიც პროგრესიით იცვლება.//
        row.appendChild(col); //ცვლადი ქოლ თავსდება როუს შიგნით.//
            }
    el.appendChild(row); //ცვლადი როუ თავსდება ცვლად ელში რომელიც თვითონ კონტეინერია.//
}