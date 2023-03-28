export default function getUserСharacteristic({ special = [] }) {
	return special.map(({ description = 'Описание недоступно', ...item }) => ({ ...item, description }));
}
