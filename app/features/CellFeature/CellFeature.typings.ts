export interface CellIndexes {
  index: number;
  rowIndex: number;
  columnIndex: number;
}

export interface CellFeatureProps extends CellIndexes {
  onMouseEnter: (indexes: CellIndexes) => void;
  onMouseLeave: () => void;
}
