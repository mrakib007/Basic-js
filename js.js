function hotelCost(days) {
    if (days > 0) {
        var rent = 0;
        for (var i = 1; i <= days; i++) {
            if (i >= 1 && i <= 10) {
                rent += 100;
            }
            else if (i >= 11 && i <= 20) {
                rent += 80;
            }
            else if (i > 20) {
                rent += 50;
            }
        }
        return rent;
    }
    else {
        return "Day's cann't be negative or symbol";
    }
}
var totalRent = hotelCost(21);
console.log(totalRent);
