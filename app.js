
// // Q1
// var studentname = []
// // for push    (add name in end)
// studentname.push("")
// //for unshift        (add name in beginning)
// studentname.unshift("")
// //for splice         (add name at 1 in index)
// studentname.splice("")





// // Q2
// var student = Array("")




// // Q3
// String[""]



// // Q4
// // boolean [""] flags = {true or false}
// var flags = true + false



// // Q5
// var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PhD"]
// for(var i=0; i <qualifications.length; i++){
//     document.write(qualifications[i] + "<br>")
// }




// // Q6
// var studentNames = ["Ali", "usama", "Bilal"];
// var studentScores = [450, 400, 350];
// var totalMarks = 500;
// for (var i = 0; i < studentNames.length; i++) {
//   var percentage = (studentScores[i] / totalMarks) * 100;
//   document.write("Name: " + studentNames[i] + "<br>");
//   document.write("Score: " + studentScores[i] + "<br>");
//   document.write("Percentage: " + percentage + "%<br><br>");
// }



//Q9
var colors = ["red", "green", "blue"];
document.write("Original array: " + colors + "<br>");
var color1 = prompt("Enter a color name to add to the beginning of the array");
colors.unshift(color1);
document.write("Updated array after adding " + color1 + " to the beginning: " + colors + "<br>");
var color2 = prompt("Enter a color name to add to the end of the array");
colors.push(color2); 
document.write("Updated array after adding " + color2 + " to the end: " + colors + "<br>");
colors.unshift("pink", "purple");
document.write("Updated array after adding two more colors to the beginning: " + colors + "<br>");
colors.shift(); 
document.write("Updated array after deleting the first color: " + colors + "<br>");
colors.pop(); 
document.write("Updated array after deleting the last color: " + colors + "<br>");
var index = parseInt(prompt("Enter the index at which you want to add a color (0 to " + colors.length + ")"));
var color3 = prompt("Enter the color name you want to add at index " + index);
colors.splice(index, 0, color3);
document.write("Updated array after adding " + color3 + " at index " + index + ": " + colors + "<br>");
var index2 = parseInt(prompt("Enter the index from which you want to delete color(s) (0 to " + (colors.length - 1) + ")"));
var num = parseInt(prompt("Enter the number of colors you want to delete from index " + index2));
var deleted = colors.splice(index2, num);
document.write("Updated array after deleting " + deleted + " from index " + index2 + ": " + colors + "<br>")