let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d"); //ctx stands for context
loadImg();

function loadImg() {

    let img1 = new Image();

    img1.onload = function () {
        ctx.drawImage(img1, 0, 0);
    }

    img1.src = "/home/paluchasz/web_stack_tutorials/project/Misc_pollen.jpg";
}

let init_coord = [];
let fin_coord = [];
let first_click = true;

function getCoordinate(event) {
    let c = document.getElementById("myCanvas");
    let rect = c.getBoundingClientRect();
    // Return the size of an element and its position relative to the viewport
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // console.log(event.clientX, rect.left, event.clientY, rect.top)
    // event.clientX and event.clientY output the horizontal, x and vertical, y components
    // of the mouse pointer (always referenced to the top left corner of page which is (0,0))
    // The rect.left and rect.top give the x/y coordinates of left and top side of rect
    // respectively. Hence if we scroll up or down the rect.top changes
    // uncomment above to see 

    document.getElementById("coordinate").innerHTML = "Coordinate: " + [x, y];
    return [x, y];
}

function getLength(event) {

    coordinate = getCoordinate(event);

    if (first_click) {
        init_coord = coordinate;
        first_click = false;
        document.getElementById("distance").innerHTML = "Selected point"
            + " has coordinates " + init_coord + ". Now click for the second point.";
        console.log(init_coord);
        return; //to make sure once we assign first_click to false it doesn't 
        // immediately go to the else clause 
    }

    else {
        fin_coord = coordinate;
        distance = Math.sqrt((fin_coord[0] - init_coord[0]) ** 2
            + (fin_coord[1] - init_coord[1]) ** 2);
        first_click = true;
        document.getElementById("distance").innerHTML = "Selected point"
            + " has coordinates " + fin_coord + ". The length of the segment is "
            + distance.toFixed(2) + ". Click again to measure another segment!";
        console.log(distance, fin_coord);
    }
}
