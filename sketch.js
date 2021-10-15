const grid = [];
const gridHeight = 601;
const gridWidth = 601;

const numberOfCells_Row = 10;
const numberOfCells_Column = 10;

const cellHeigth = Math.floor(gridHeight / numberOfCells_Column);
const cellWidth = Math.floor(gridWidth / numberOfCells_Row);

function setup() {
  createCanvas(gridWidth, gridHeight);

  for (let cellPosition_X = 0; cellPosition_X < gridWidth; cellPosition_X += cellWidth) {
    for (let cellPosition_Y = 0; cellPosition_Y < gridHeight; cellPosition_Y += cellHeigth) {
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
  this.position_x = position_x;
  this.position_y = position_y;

  this.show = function () {
    rect(position_x, position_y, cellWidth, cellHeigth);
  };
}
