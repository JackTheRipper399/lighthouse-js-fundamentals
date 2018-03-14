function range(start, end, step){
  var result = [];
  if (typeof range === undefined){
    return [];
  }
  if (start > end){
    return [];
  }
  if (step < 0){
    return [];
  }
  for (var i = start; i <= end; i += step){
    result.push(i);
  }
  return result;
}