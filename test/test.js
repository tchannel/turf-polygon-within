var within = require('../'),
  test = require('tape'),
  fs = require('fs');


test('within -- completely inside', function(t){
  square0 = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/square0.geojson'));
  square1 = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/square1.geojson'));

  t.ok(within(square1, square0), "Square 1 is within Square 0");
  t.end();
});

test('within -- completely outside', function(t){
  square0 = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/square0.geojson'));
  square2 = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/square2.geojson'));

  t.notOk(within(square2, square0), "Square 2 is not within Square 0");
  t.end();
});

test('within -- overlapping', function(t){
  square2 = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/square2.geojson'));
  square3 = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/square3.geojson'));

  t.notOk(within(square3, square2), "Square 3 is not within Square 2");
  t.end();
});


