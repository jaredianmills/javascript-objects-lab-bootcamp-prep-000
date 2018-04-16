var recipes = {eggs: 2, butter: '1 tablespoon', salt: '1 pinch', cheese: '1/4 cup', bacon: '2 ounces'};

function updateObjectWithKeyAndValue(object, key, value) {
  var updatedObject = Object.assign({}, object, {[key]: value});
  return updatedObject;
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
};

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
}
