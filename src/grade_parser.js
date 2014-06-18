window.GradeParser = {

  getMovements: function (grades) {
    var movements = [];

    for (i = 1; i < grades.length; i++) {
      if (grades[i - 1] < grades[i]) {
        movements[movements.length] = "up";
      } else if (grades[i - 1] == grades[i]) {
        movements[movements.length] = "even";
      } else {
        movements[movements.length] = "down";
      }
    }

    return movements;
  },

  getTrend: function (movements) {
    var decreasing_in_a_row = 0;

    for (i = 0; i < movements.length; i++) {
      if (movements[i] == "up") {
        decreasing_in_a_row = 0;
      } else if (movements[i] == "down") {
        decreasing_in_a_row = decreasing_in_a_row + 1;
      }
    }

    if (decreasing_in_a_row >= 3) {
      return "in decline";
    } else {
      return "not in decline";
    }
  }

};