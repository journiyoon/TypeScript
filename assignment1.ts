type Last = {
	<T>(arr: T[]): T;
};

const last: Last = (arr) => arr[arr.length - 1];

type Prepend = {
	<T, V>(arr: T[], item: V): void;
};

const prepend: Prepend = (arr, item) => {
	return [item, ...arr];
};
