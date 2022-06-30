type Last = {
	<T>(arr: T[]): T;
};

const last: Last = (arr) => arr[arr.length - 1];
