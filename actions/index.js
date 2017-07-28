'use strict';

function addColumn(ev){
  ev.preventDefault();
  this.setState({
    table: this.state.table.map(row => {
      row.push("");
      return row;
    }
    )
  });
}

function addRow(ev){
  ev.preventDefault();
  const { table } = this.state;
  table.push(["", ""]);
  this.setState({ table });

}

function changeCell(rowIndex, columnIndex, ev){
  const { table } = this.state;
  table[rowIndex][columnIndex] = ev.target.value;
  this.setState({ table });
}

function focusCell(rowIndex, columnIndex) {
  this.setState({ focused: [rowIndex, columnIndex] });
}

function blurCell () {
  this.setState({ focused: null });
}

function removeRow(ev){
  ev.preventDefault();
  const { table } = this.state;
  if(table.length > 1){
    table.pop();
    this.setState({ table });
  }
}

function removeColumn(ev){
  ev.preventDefault();
  if(this.state.table[0].length > 1){
    this.setState({
      table: this.state.table.map(row => row.shift().split())
    })
  }
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
