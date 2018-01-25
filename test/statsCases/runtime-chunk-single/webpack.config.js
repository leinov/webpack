module.exports = {
	mode: "development",
	entry: {
		e1: "./e1",
		e2: "./e2"
	},
	output: {
		filename: "[name].js"
	},
	stats: {
		hash: false,
		timings: false,
		assets: false,
		modules: false,
		reasons: true
	},
	optimization: {
		runtimeChunk: "single"
	}
};
