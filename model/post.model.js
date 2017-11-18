const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let PostSchema = new Schema({
	title: {
		type: String,
		required: false,
		unique: false
	}
	description: {
		type: String,
		required: false,
		unique: false
	},
	image: {
		type: String,
		required: false,
		unique: false
	},
	original_poster: {
		type: String,
		required: true,
		unique: true
	},
	tags: {
		type: [String],
		required: true
	}
})


module.exports = mongoose.model('Post',PostSchema);