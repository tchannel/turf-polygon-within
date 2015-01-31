# turf-polygon-within

turf polygon within module


### `within(poly1, poly2)`

Tells you whether poly1 is entirely inside of poly2


### Parameters

| parameter  | type    | description |
| ---------- | ------- | ----------- |
| `poly1`    | Polygon |             |
| `poly2`    | Polygon |             |


### Example

```js
var outside = turf.polygon([[
  [0, 0],
  [0, 3],
  [3, 3],
  [3, 0],
  [0, 0]
]])

var inside = turf.polygon([[
  [1, 1],
  [1, 2],
  [2, 2],
  [2, 1],
  [1, 1]
]]);

var is_within = within(inside, outside);

// true
```

## Tests

```sh
$ npm test
```

