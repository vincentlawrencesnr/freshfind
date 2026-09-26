const BOOKMARKS_KEY = 'freshfind_bookmarks';

export const getBookmarks = () => {
  const savedBookmarks =
    localStorage.getItem(BOOKMARKS_KEY);

  return savedBookmarks
    ? JSON.parse(savedBookmarks)
    : [];
};

export const isBookmarked = (marketId) => {
  const bookmarks = getBookmarks();

  return bookmarks.some(
    (bookmark) => bookmark.marketId === marketId
  );
};

export const saveBookmark = (marketId) => {
  const bookmarks = getBookmarks();

  if (isBookmarked(marketId)) {
    return;
  }

  const updatedBookmarks = [
    ...bookmarks,
    {
      marketId,
      note: ''
    }
  ];

  localStorage.setItem(
    BOOKMARKS_KEY,
    JSON.stringify(updatedBookmarks)
  );
};

export const removeBookmark = (marketId) => {
  const bookmarks = getBookmarks();

  const updatedBookmarks = bookmarks.filter(
    (bookmark) => bookmark.marketId !== marketId
  );

  localStorage.setItem(
    BOOKMARKS_KEY,
    JSON.stringify(updatedBookmarks)
  );
};

export const updateBookmarkNote = (marketId, note) => {
  const bookmarks = getBookmarks();

  const updatedBookmarks = bookmarks.map((bookmark) => {
    if (bookmark.marketId === marketId) {
      return {
        ...bookmark,
        note
      };
    }

    return bookmark;
  });

  localStorage.setItem(
    BOOKMARKS_KEY,
    JSON.stringify(updatedBookmarks)
  );
};