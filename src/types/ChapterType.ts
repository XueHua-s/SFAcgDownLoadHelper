// 章节信息
export interface ChapterItem {
  // 标题
  title: string;
  // 章节id
  cId: string;
  // 内容
  content: string;
  // 更新时间
  updateTime: string;
  // 创建时间
  createdTime: string;
  // 字数
  wordCount: string;
}
// 书本
export interface BookItem {
  // 书名
  name: string;
  // 简介
  description: string;
  // 作者
  writer: string;
  // id
  bId: string;
  // 标签
  tags: string[];
  // 收藏数 / 喜欢数。
  likeCount: number;
  // 作品是否上架
  isPub: boolean;
  // 章节
  chapters: ChapterItem[]
}
