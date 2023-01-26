// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

var merge = function(intervals) {
      intervals.sort((a, b) => a[0] - b[0]);
  let mergedIntervals = [];
  for (let i = 0; i < intervals.length; i++) {
    if (mergedIntervals.length === 0 || intervals[i][0] > mergedIntervals[mergedIntervals.length - 1][1]) {
      mergedIntervals.push(intervals[i]);
    } else {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], intervals[i][1]);
    }
  }
  return mergedIntervals;
};
