import { useState } from 'react';
import { Link } from 'react-router-dom';

import markets from '../../data/markets.json';

import {
  getBookmarks,
  removeBookmark,
  updateBookmarkNote
} from '../../utils/bookmarks';

import './Bookmarks.css';

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState(
    getBookmarks()
  );

  const handleNoteChange = (marketId, note) => {
    updateBookmarkNote(marketId, note);

    setBookmarks(getBookmarks());
    };  
    

    const handleExport = () => {
        const exportData = savedMarkets.map((bookmark) => ({
            market: bookmark.market.name,
            area: bookmark.market.area,
            address: bookmark.market.address,
            note: bookmark.note
        }));

        const blob = new Blob(
            [JSON.stringify(exportData, null, 2)],
            {
            type: 'application/json'
            }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');

        link.href = url;
        link.download = 'freshfind-bookmarks.json';

        link.click();

        URL.revokeObjectURL(url);
        };

  const savedMarkets = bookmarks
    .map((bookmark) => {
      const market = markets.find(
        (market) => market.id === bookmark.marketId
      );

      return {
        ...bookmark,
        market
      };
    })
    .filter((bookmark) => bookmark.market);

  const handleRemove = (marketId) => {
    removeBookmark(marketId);

    setBookmarks(
      getBookmarks()
    );
  };


  const handleShare = async (market) => {
  const shareData = {
    title: market.name,
    text: `Check out ${market.name} in ${market.area}.`,
    url: `${window.location.origin}/markets/${market.id}`
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Share failed:', error);
      }
    }
  } else {
    await navigator.clipboard.writeText(
      shareData.url
    );

    alert('Market link copied to clipboard.');
  }
};

  return (
    <main className="bookmarks">
      <div className="bookmarks__container">

        <header className="bookmarks__header">
          <span className="bookmarks__eyebrow">
            Your saved markets
          </span>

          <h1>Bookmarks</h1>

          <p>
            Keep track of the markets you want to
            visit.
          </p>
        </header>

        {savedMarkets.length === 0 ? (
          <section className="bookmarks__empty">
            <i
              className="bi bi-bookmark"
              aria-hidden="true"
            ></i>

            <h2>No saved markets yet</h2>

            <p>
              Save a market from its details page and
              it will appear here.
            </p>

            <Link to="/markets">
              Explore Markets
            </Link>
          </section>
        ) : (
            <>
           <div className="bookmarks__toolbar">
            <button
                type="button"
                className="bookmarks__export"
                onClick={handleExport}
            >
                <i
                className="bi bi-download"
                aria-hidden="true"
                ></i>

                Export Bookmarks
            </button>
            </div>

          <section className="bookmarks__grid">
            {savedMarkets.map((bookmark) => (
              <article
                className="bookmark-card"
                key={bookmark.marketId}
              >
                <div className="bookmark-card__image">
                  <img
                    src={bookmark.market.image}
                    alt={bookmark.market.name}
                  />
                </div>

                <div className="bookmark-card__content">
                  <span className="bookmark-card__area">
                    {bookmark.market.area}
                  </span>

                  <h2>
                    {bookmark.market.name}
                  </h2>

                  <p>
                    {bookmark.market.description}
                  </p>

                  <div className="bookmark-card__note">
                    <label htmlFor={`note-${bookmark.marketId}`}>
                        Your note
                    </label>

                    <textarea
                        id={`note-${bookmark.marketId}`}
                        value={bookmark.note}
                        onChange={(event) =>
                        handleNoteChange(
                            bookmark.marketId,
                            event.target.value
                        )
                        }
                        placeholder="Add a note about this market..."
                        rows="3"
                    />
                    </div>

                  <div className="bookmark-card__actions">
                    <Link
                      to={`/markets/${bookmark.market.id}`}
                      className="bookmark-card__view"
                    >
                      View Market
                    </Link>

                    <button
                        type="button"
                        className="bookmark-card__share"
                        onClick={() =>
                            handleShare(bookmark.market)
                        }
                        >
                        <i
                            className="bi bi-share"
                            aria-hidden="true"
                        ></i>

                        Share
                        </button>

                    <button
                      type="button"
                      className="bookmark-card__remove"
                      onClick={() =>
                        handleRemove(
                          bookmark.marketId
                        )
                      }
                    >
                      <i
                        className="bi bi-trash"
                        aria-hidden="true"
                      ></i>

                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
          </>
        )}

      </div>
    </main>
  );
}

export default Bookmarks;