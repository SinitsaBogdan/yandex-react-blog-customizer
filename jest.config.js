module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.[t|j]sx?$': 'babel-jest',
	},
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'babel-jest',
	},
};
