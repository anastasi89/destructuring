export default function getUserCharacteristic(obj) {
  const resultArr = [];
  for (const item of obj.special) {
    const {
      id, name, icon, description = 'Описание не доступно',
    } = item;
    resultArr.push({
      id,
      name,
      icon,
      description,
    });
  }
  return resultArr;
}
