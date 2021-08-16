export class Sort {
  private orderSorted = 1;
  private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
  });

  constructor() {

  }

  public beginSort(property, order, type = ""){
    if (order === "sort") {
        this.orderSorted = -1;
    } return (x,y)=>{
      if (type === "date") {
            return this.sortData(new Date(x[property]), new Date(y[property]));
      } else {
            return this.collator.compare(x[property],y[property]) * this.orderSorted;
      }
    }
  }

  private sortData(x,y){
      if (x < y) {
        return -1 * this.orderSorted;
      } else if(x > y) {
        return 1 * this.orderSorted;
      }else {
        return 0 * this.orderSorted;
      }
  }
}
