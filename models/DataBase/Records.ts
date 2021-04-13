import mongoose, { Schema } from 'mongoose';

const RecordSchema = new Schema({

	name:{
		type: String,
		require: [ true, 'Name is requires' ]
	},
	email:{
		type: String,
		require: [ true, 'Email is requires' ]
	},
	phone: {
		type: String,
		require: [ true, 'Name is requires' ]
	},
	message: {
		type: String,
		default: 'Sin mensaje'
	},
},
{
	toJSON: {
		transform: function (doc, ret) {
			ret.uid = ret._id;
			delete ret._id;
			delete ret.__v;

			return ret;
		}
	  },
	timestamps: { createdAt: 'created_at' ,updatedAt:'updated_at', } 
});

export default mongoose.model( 'Record', RecordSchema );