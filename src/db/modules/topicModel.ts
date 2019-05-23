import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { timeUtils, tools } from '../../utils';

/** 帖子主题表 */
const TopicSchema = new Schema({
  topicId: { type: String, default: tools.getUUID }, // 帖子的ID，唯一标识
  userId: { type: String, required: true }, // 发帖人id
  topicContent: { type: String, required: true }, // 帖子内容
  isTextContent: { type: Boolean, default: false }, // 是否纯文字
  imgUrlList: [{ type: String }], // 图片url列表
  isActive: { type: Boolean, default: true }, // 当前用户是否可用
  createdTime: { type: Date, default: timeUtils.getCurrentDateTime } // 创建用户的时间
});

TopicSchema.index({ topicId: 1 }, { unique: true });
TopicSchema.index({ userId: 1 });
TopicSchema.index({ topicContent: 1 });

const Topic = mongoose.model('Topic', TopicSchema);
export default Topic;
