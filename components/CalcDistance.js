function calcDistance(path, station_code) {
  let point = Math.abs(path[0] - station_code);
  for (let i = 0; i < path.length; i++) {
    if (i === 0) {
      continue;
    }

    let temp = Math.abs(path[i] - station_code);

    if (temp < point) {
      point = temp;
      continue;
    }

    break;
  }
  return point;
}

function sortByNearest(ride, station_code) {
  return ride.sort((a, b) => {
    let A = a.station_path;
    let B = b.station_path;
    return calcDistance(A, station_code) - calcDistance(B, station_code);
  });
}

export { calcDistance, sortByNearest };
