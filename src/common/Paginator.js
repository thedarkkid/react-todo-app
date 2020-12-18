
const getpageIDArrays = (datasetLength, limit) =>{
    let pageIDArray = [];
    for(let i=0; i<datasetLength; i +=limit) {
      pageIDArray.push(i);
    }
    return pageIDArray;
};

const getCurrentDataSet = (currentPageID, limit, dataset) => {
  if(currentPageID+limit >= dataset.length) return dataset.slice(currentPageID);
  else return dataset.slice(currentPageID, currentPageID+limit);
};

export default class Paginator{

  constructor(dataset, limit){
    this.currentPageID = 0;
    this.pageIDArray = getpageIDArrays(dataset.length, limit);
    this.currentPageIDArrayIndex = 0;
    this.currentDataSet = getCurrentDataSet(this.currentPageID, limit, dataset);
    this.dataset = dataset; this.limit = limit;
  }

  get Current(){
    return this.currentDataSet;
  }

  get Next(){
    if((this.currentPageIDArrayIndex+1) >= this.pageIDArray.length) return this.currentDataSet;
    this.currentPageID = this.pageIDArray[++this.currentPageIDArrayIndex];
    this.currentDataSet = getCurrentDataSet(this.currentPageID, this.limit, this.dataset);
    return this.Current;
  }

  get Previous(){
    if(this.currentPageIDArrayIndex <= 0) return this.currentDataSet;
    this.currentPageID = this.pageIDArray[--this.currentPageIDArrayIndex];
    this.currentDataSet = getCurrentDataSet(this.currentPageID, this.limit, this.dataset);
    return this.Current;
  }
}
