// Converts from degrees to radians.
function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

// Converts from radians to degrees.
function toDegrees(radians) {
  return (radians * 180) / Math.PI;
}

function bearing(fromA, to) {
  var startLat = fromA[0];
  var startLng = fromA[1];
  var destLat = to[0];
  var destLng = to[1];

  startLng = toRadians(startLng);
  startLat = toRadians(startLat);
  destLng = toRadians(destLng);
  destLat = toRadians(destLat);

  var y = Math.sin(destLng - startLng) * Math.cos(destLat);
  var x =
    Math.cos(startLat) * Math.sin(destLat) - Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
  var brng = Math.atan2(y, x);
  brng = toDegrees(brng);

  return (brng + 360) % 360;
}
