describe("GradeParser", function () {

  it("returns an array of up/down/even for the given array", function () {
    var result = GradeParser.getMovements([6, 3, 5, 4, 3, 4, 4, 5]);
    expect(result).toEqual(["down", "up", "down", "down", "up", "even", "up"]);
  });

  it("finds a downwards trend in a student's decreasing grades", function () {
    var movements = GradeParser.getMovements([10, 9, 8, 7]);
    var result = GradeParser.getTrend(movements);
    expect(result).toEqual("in decline");
  });

  it("does not find a downwards trend in a student's increasing grades", function () {
    var movements = GradeParser.getMovements([6, 7, 8, 9]);
    var result = GradeParser.getTrend(movements);
    expect(result).toEqual("not in decline");
  });

  it("does not find a downwards trend in a student's grades if there are not enough results", function () {
    var movements = GradeParser.getMovements([10, 9, 8]);
    var result = GradeParser.getTrend(movements);
    expect(result).toEqual("not in decline");
  });

  it("does not find a downwards trend in a student's grades if there are not 3 downs in a row", function () {
    var movements = GradeParser.getMovements([6, 3, 5, 4, 3, 4, 4, 5]);
    var result = GradeParser.getTrend(movements);
    expect(result).toEqual("not in decline");
  });

});
