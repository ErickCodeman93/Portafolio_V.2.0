import mongoose, { Schema } from 'mongoose';

const RecordSchema = new Schema({

	user:{
		type: String,
		require: [ true, 'User is requires' ]
	},
	name:{
		type: String,
		require: [ true, 'Name is requires' ]
	},
	phone: {
		type: String,
		require: [ true, 'Name is requires' ]
	},
	email:{

	},
	password:{
		type: String,
		required: [ true, 'Password is required' ],
	},
	state:{
		type: Boolean,
		default: true,
	},
},
{
	toJSON: {
		transform: function (doc, ret) {
			ret.uid = ret._id;
			delete ret._id;
			delete ret.password;
			delete ret.__v;

			return ret;
		}
	  },
	timestamps: { createdAt: 'created_at' ,updatedAt:'updated_at', } 
});

export default mongoose.model( 'Record', RecordSchema );