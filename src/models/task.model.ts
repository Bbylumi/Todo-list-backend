import mongoose, {Schema, Document} from "mongoose";

export interface ITask extends Document {
    name: string;
}

const TaskSchema: Schema = new Schema ({
    name: { type: String, required: true},
});

export default mongoose.model<ITask>('Task', TaskSchema);