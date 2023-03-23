export default function getUserСharacteristic(object) {
  const resultArr = [];

  object.special.forEach((item) => {
    const {
 id, name, icon, description = 'Описание недоступно',
} = item;

    const obj = {};
    obj.id = id;
    obj.name = name;
    obj.icon = icon;
    obj.description = description;

    resultArr.push(obj);
  });

  return resultArr;
}
