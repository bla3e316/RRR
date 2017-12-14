import React from 'react';

export default function GameList({ games }) {
    const emptyMessage = (
        <p>There are no games.</p>
    );

    const gameList = (
        <p>games list</p>
    );

    return (
        <div>
            {games.length === 0 ? emptyMessage : gameList}
        </div>
    );
}
