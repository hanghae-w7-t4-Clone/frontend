export const RESP = {
  CARDS: {
    success: true,
    data: [
      {
        cardId: 1,
        nickname: "유저네임",
        imgUrlList: [
          "https://i.pinimg.com/564x/49/6d/50/496d50d1bc8e3ae9e629946bb55ee41e.jpg",
          "https://i.pinimg.com/564x/0b/88/e5/0b88e5f2dee0939f6c04e9ace1417419.jpg",
          "https://i.pinimg.com/564x/19/46/2c/19462c11204c50c89233ab1b045165d1.jpg",
        ],
        likeCount: 3,
        content: "내용",
        commentCount: 2,
        place: "지역",
        createdAt: "시간",
        commentListDto: [{ id: 1, nickname: "nick", content: "댓내용" }],
      },
    ],
    error: null,
  },
};
