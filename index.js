var inside = require('turf-inside');
var featureCollection = require('turf-featurecollection');
var overlaps = require('turf-overlaps');
var pointWithin = require('turf-within');
var point = require('turf-point');

/**
 * Takes a {@link FeatureCollection} of {@link Point} features and a FeatureCollection of {@link Polygon} features and returns a FeatureCollection of Point features representing all points that fall within a collection of polygons.
 *
 * @module turf/within
 * @param {FeatureCollection} points a FeatureCollection of {@link Point} features
 * @param {FeatureCollection} polygons a FeatureCollection of {@link Polygon} features
 * @return {FeatureCollection} a collection of all points that land
 * within at least one polygon
 * @example
 * var searchWithin = turf.featurecollection([
 *   turf.polygon([[
 *     [-46.653,-23.543],
 *     [-46.634,-23.5346],
 *     [-46.613,-23.543],
 *     [-46.614,-23.559],
 *     [-46.631,-23.567],
 *     [-46.653,-23.560],
 *     [-46.653,-23.543]
 *   ]])
 * ]);
 * var points = turf.featurecollection([
 *   turf.point([-46.6318, -23.5523]),
 *   turf.point([-46.6246, -23.5325]),
 *   turf.point([-46.6062, -23.5513]),
 *   turf.point([-46.663, -23.554]),
 *   turf.point([-46.643, -23.557])
 * ]);
 *
 * var ptsWithin = turf.within(points, searchWithin);
 *
 * //=points
 *
 * //=searchWithin
 *
 * //=ptsWithin
 */
module.exports = function(feature1, feature2){
  if (overlaps(feature1, feature2)) {
    return false;
  }

  var testpoint = point(feature1.geometry.coordinates[0][0])
  var ptFc = featureCollection([testpoint]);
  var polyFc = featureCollection([feature2]);
  var result = pointWithin(ptFc, polyFc);

  return result.features.length > 0

};
