HTMLElement.prototype.hasElement = function(element) {
    const el = document.querySelector(element);
    if (this.contains(el)) {
        return true;
    }
    return false;
};
HTMLElement.prototype.getPositionXY = function() {
    return [this.getBoundingClientRect().x, this.getBoundingClientRect().y];
}
HTMLElement.prototype.iterateHTMLElement = function(){
    let myArr = [];
    this.childNodes.forEach(element => {
        myArr.push(element);
    })
    return myArr;
}
Array.prototype.iterateArray = function(){
    let myArr = [];
    this.forEach(element => {
        myArr.push(element);
    })
    return myArr;
}
Object.prototype.iterateObjectKey = function(){
    let myArr = [];
    Object.entries(this).forEach(([key, value]) => {
        myArr.push(key)
    });
    return myArr;
}
Object.prototype.iterateObjectValue = function(){
    let myArr = [];
    Object.entries(this).forEach(([key, value]) => {
        myArr.push(value)
    });
    return myArr;
}
