/**
 * used to draw star rating UI
 */
Number.prototype.roundUpRating = function () {
    let rs = 0;
    if (this) {
        let ratingInitial = this;
        let ratingFloor = Math.floor(ratingInitial);
        let ratingDecimal = Number(ratingInitial - ratingFloor).toFixed(1);
        if (ratingDecimal == 0) {
            rs = ratingInitial;
        }
        else if (0 < ratingDecimal && ratingDecimal <= 0.2) {
            rs = ratingFloor;
        }
        else if (0.2 < ratingDecimal && ratingDecimal < 0.8) {
            rs = ratingFloor + 0.5;
        }
        else {
            rs = ratingFloor + 1.0;
        }
    }
    if(typeof rs === 'object' && rs !== null){
        rs = 0;
    }

    return rs;
};

var roundUpRating = function (that) {
    let rs = 0;
    if (that) {
        let ratingInitial = that;
        let ratingFloor = Math.floor(ratingInitial);
        let ratingDecimal = Number(ratingInitial - ratingFloor).toFixed(1);
        if (ratingDecimal == 0) {
            rs = ratingInitial;
        }
        else if (0 < ratingDecimal && ratingDecimal <= 0.2) {
            rs = ratingFloor;
        }
        else if (0.2 < ratingDecimal && ratingDecimal < 0.8) {
            rs = ratingFloor + 0.5;
        }
        else {
            rs = ratingFloor + 1.0;
        }
    }
    if(typeof rs === 'object' && rs !== null){
        rs = 0;
    }

    return rs;
};

export {
    roundUpRating
}