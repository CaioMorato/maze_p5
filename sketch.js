const grid = [];
const gridHeight = 601;
const gridWidth = 601;

const numberOfCells_Row = 10;
const numberOfCells_Column = 10;

const cellHeigth = Math.floor(gridHeight / numberOfCells_Column);
const cellWidth = Math.floor(gridWidth / numberOfCells_Row);

function setup() {
  createCanvas(gridWidth, gridHeight);

  for (let cellPosition_X = 0; cellPosition_X < gridWidth; cellPosition_X += 1) {
    for (let cellPosition_Y = 0; cellPosition_Y < gridHeight; cellPosition_Y += 1) {
      let cell = new Cell(cellPosition_X, cellPosition_Y);
      grid.push(cell);
    }
  }
}

function draw() {
  background(200);
  for (let eachCell = 0; eachCell < grid.length; eachCell += 1) {
    grid[eachCell].show();
  }
}

function Cell(position_x, position_y) {
  this.x_position_border_pixel = position_x;
  this.y_position_border_pixel = position_y;

  this.show = function () {
    let pos_x_pixel = this.x_position_border_pixel * cellWidth;
    let pos_y_pixel = this.y_position_border_pixel * cellHeigth;

    // top line
    line(pos_x_pixel, pos_y_pixel, pos_x_pixel + cellWidth, pos_y_pixel);

    // bottom line
    line(pos_x_pixel, pos_y_pixel + cellHeigth, pos_x_pixel + cellWidth, pos_y_pixel + cellHeigth);

    // left line
    line(pos_x_pixel, pos_y_pixel, pos_x_pixel, pos_y_pixel + cellHeigth);

    // right line
    line(pos_x_pixel + cellWidth, pos_y_pixel, pos_x_pixel + cellWidth, pos_y_pixel + cellHeigth);
  };
}
