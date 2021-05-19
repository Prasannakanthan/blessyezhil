// // function add(){
// //     var x = Number(document.getElementById("fnum").value);
// //     $("#fnum").val();


// //     document.getElementById("snum").innerHTML;
// //     $("#snum").text();


// //     var y = Number(document.getElementById("snum").value);
// //     document.getElementById("snum").innerHTML;
// //     var sum = x + y;
// //     alert(sum);
// //     document.getElementById("result").innerHTML = sum;
// // }


// // $("#btn").click(function(){
// //     var x = Number($("#fnum").val());
// //     var y = Number($("#snum").val());
// //     var sum = x + y;
// //     $("#result").val(sum);

// //     $("img").attr("alt")
// // });

// $("#btn").click(function() {
//     var item = $("#txtbox").val();
//     $(".listItems").append("<div class='item'><span>" + item + "</span><button class='removeItem'>X</button></div>");
//     $("#txtbox").val("");
// });

// $(document).on("click", ".removeItem", function() {
//     $(this).parent().remove();
// });

// function func() {
//     console.log(document.getElementById("para").innerHTML);
// }

// function getData() {
//     var firstname = document.getElementById("fname").value;
//     document.getElementById("para").innerHTML = firstname;
//     //alert(firstname)
// }

// var d = add(1, 3);
// document.write(d);

// function add(x, y) {
//     var sum = x + y;
//     return sum;
// }


// JSON
// Javascript Object Notation

// AJAX 
// Aynchronous Javascript and XML 


//     [{
//     brand: "samsung",
//     model: "galaxy",
//     prie: "20k"
// }, {
//     brand: "onceplus",
//     model: "7",
//     prie: "40k"
// }, {
//     brand: "iphone",
//     model: "11",
//     prie: "50k"
// }]

// Number
// String
// Array
// Boolean
// Object



// function getData() {
//     //AJAX operation
//     var x = new XMLHttpRequest();
//     x.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     x.send();

//     x.onreadystatechange = function() {
//         if (this.status == 200 && this.readyState == 4) {
//             var res = (JSON.parse(this.responseText));
//             for (var i = 0; i < res.length; i++) {
//                 document.getElementById("data").innerHTML += "<div class='titleStyle'>" + (res[i].title) + "</div>";
//             }

//         }
//     }
// }

$(document).on("click", "#btn", function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        success: function(data) {
            var res = data;
            res.forEach(function(element) {
                $("#todoITems").append(element.title + "<br>")
            });
        },
        error: function() {
            console.log("Sorry, unable to fetch the data!")
        }
    })
});

$(document).on("click", "#btn", function() {
    var item = $("#listItem").val();
    $("#listItem").val("");
    $(".listofitems").append("<div>" + item + "<button class='removeItem'>X</button></div>");
});


$(document).on("click", ".removeItem", function() {
    $(this).parent().hide();
});