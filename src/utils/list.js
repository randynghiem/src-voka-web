export const formatStartTime = start => {
  let secondTotal = Math.floor(start);
  let seconds = secondTotal % 60;
  let minutes = Math.floor(secondTotal / 60);
  if (minutes < 10) {
    return "0" + minutes + ":" + ("0" + seconds).slice(-2);
  } else {
    return minutes + ":" + ("0" + seconds).slice(-2);
  }
};

export const markLines = (lines, cur) => {
  return lines.map(line => ({
    ...line,
    current: line.start === cur ? "current" : ""
  }));
};
