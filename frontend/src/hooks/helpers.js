export function getById (id, array) {
  return array.find((item) => item.id === id);
}
