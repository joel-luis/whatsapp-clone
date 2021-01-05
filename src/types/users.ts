export interface User {
  id: string | number;
  avatar: string;
  name: string;
}
export interface Messages {
  author: number;
  body: string;
}
export interface List {
  chatId: number;
  title: string;
  image: string;
  lastMessage: string;
  lastMessageDate: {
    nanoseconds: number;
    seconds: number;
  };
  date: {
    nanoseconds: number;
    seconds: number;
  };
}
