import React from 'react';
import { connect } from 'react-redux';
import GameList from './GamesList';

class GamesPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Game List</h1>

                <GameList games={this.props.games}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(GamesPage);