export const flexMapper = {
  start: 'flex-start',
  end: 'flex-end',
  top: 'flex-start',
  right: 'flex-end',
  bottom: 'flex-end',
  left: 'flex-start',
  middle: 'center',
  justify: 'space-between',
  spread: 'space-around',
  evenly: 'space-evenly',
};

/**
 * Removes props from an object.
 * @param {Object} obj The object
 * @param {Array} props Array of props to be removed from the object
 */
export const cleanObject = (obj, props) => {
  const newObj = { ...obj };

  props.forEach((prop) => {
    delete newObj[prop];
  });

  return newObj;
};

/**
 * Destructs an object into smaller objects.
 * Example:
 * var [ setA, setB, rest ] = destruct(obj)(['prop1', 'prop2'], ['prop3', 'prop4']);
 * @param {*} obj Object to destruct
 */
export const destruct = (obj, ...args) => {
  const keys = Object.keys(obj);

  const result = [
    ...args.map(k => k.reduce(
      (p, n) => {
        if (keys.includes(n)) {
          keys.splice(keys.indexOf(n), 1);
          return {
            ...p,
            [n]: obj[n],
          };
        }

        return p;
      },
      {},
    )),
    keys.reduce((p, n) => ({ ...p, [n]: obj[n] }), {}),
  ];

  return result;
};

/**
 * Converts a value to a CSS length
 * @param {String | Number} value Value to be converted
 */
export const getCSSLength = (value) => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
};

/**
 * Returns type of a given object.
 * @param {*} obj Target object
 */
export const getType = obj => (
  Object.prototype.toString.call(obj).toLowerCase().replace(/\[object|\]|\s/g, '')
);

/**
 * Finds a property value inside an object given a dot notation path.
 * @param {String} path Path to property inside the object
 * @param {*}      obj  Target object
 */
export const getPropertyFromObject = (path, obj) => {
  const pathArr = path.split('.');
  let currentObj = obj;

  while (pathArr.length && currentObj && currentObj[pathArr[0]]) {
    currentObj = currentObj[pathArr.shift()];
  }

  return pathArr.length ? undefined : currentObj;
};

/**
 * Sets a property value inside an object given a dot notation path.
 * @param {String} path  Path to property inside the object
 * @param {*}      value Property value
 * @param {*}      obj   Target object
 */
export const setPropertyInObject = (path, value, obj) => {
  const pathArr = path.split('.');
  let currentObj = obj;

  while (pathArr.length > 1 && currentObj[pathArr[0]]) {
    const p = pathArr.shift();
    if (currentObj[p] === undefined) currentObj[p] = {};
    currentObj = currentObj[p];
  }

  currentObj[pathArr[0]] = value;

  return obj;
};
