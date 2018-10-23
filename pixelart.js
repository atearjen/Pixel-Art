/*Variable definitions*/
var height, width, color, background_color, table, row, column

/*Event listeners*/
// Select size & color input
$("input").on("input", selectInput);

//Submit query
$(":submit").on("click", makeGrid);

//Select cell color
table = $("#pixelCanvas");
table.on("click", "td", addColor);

//Select Background color
$("#backgroundPicker").on("input", changeBackground);

//Clear grid
$("#resetGrid").on("click", refreshGrid);

/*Functions*/
//Make Grid
function makeGrid(e) {
e.preventDefault();

//clear grid
clearGrid();

if(inputValidation()){
alert("Height or Width should not exceed 100!");
return;
}

//nested for loop for grid
for (let i=0; i<height; i++){
row="<tr>"; column="";

for(let j=0; j<width; j++){
let col_builder="<td></td>";
column+=col_builder;
}
row=row+column+"</tr>";
table.append(row);
}
}

/*Helper functions*/
//Select input
function selectInput() {
height=$("#inputHeight").val();
width=$("#inputWidth").val();
color=$("#colorPicker").val();
}

//Check height and width do not exceed max
function inputValidation(){
if(height > 100 || width > 100)
{
return true;
}
else
{
return false;
}
}

//Clear table
function clearGrid() {
table.empty();
}

//Change color
function addColor() {
color=$("#colorPicker").val();
$(this).css("background-color", color);
}

//Change background
function changeBackground(){
background_color=$("#backgroundPicker").val();
table.css("background-color", background_color);

//logic to change background after grid refresh -- so colored cells are not changed
$("td").each(function(){
let $cell = $(this);
if($cell.attr("style") == "background-color: rgb(255, 255, 255);")
{
$cell.css("background-color",background_color);
}
});
}

//Refresh grid
function refreshGrid(){
//refresh table
table.css("background-color", "#FFFFFF");

//refresh cells
$("td").each(function(){
let cell_color="#FFFFFF";
$(this).css("background-color", cell_color);
});
}
