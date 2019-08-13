import React from 'react';
import '../style/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            grid: [12, 12],
            playerX: 2,
            playerY: 5
        }
    }
    
    componentDidMount() {
        document.addEventListener('keypress', this.checkMove);
        let currentX = 'row-' + this.state.playerX;
        document.getElementById(currentX).children[this.state.playerY].style.backgroundColor = 'white';
        document.getElementById(currentX).children[this.state.playerY].innerHTML = 'o';
    }

    checkMove = (event) => {
        let currentX = 'row-' + this.state.playerX;
        let newX = this.state.playerX;
        let newY = this.state.playerY;
        if (event.key === 'a') {
            document.getElementById(currentX).children[this.state.playerY].innerHTML = '';
            if (this.state.playerY > 0) {newY = this.state.playerY - 1;}
        }
        if (event.key === 'd') {
            document.getElementById(currentX).children[this.state.playerY].innerHTML = '';
            if (this.state.playerY < this.state.grid[0] - 1) {newY = this.state.playerY + 1;}
        }
        if (event.key === 'w') {
            document.getElementById(currentX).children[this.state.playerY].innerHTML = '';
            if (this.state.playerX > 0) {newX = this.state.playerX - 1;}
        }
        if (event.key === 's') {
            document.getElementById(currentX).children[this.state.playerY].innerHTML = '';
            if (this.state.playerX < this.state.grid[1] - 1) {newX = this.state.playerX + 1;}
        }

        this.setState({playerX: newX, playerY: newY})

    }
    
    render() {
        
        return (
            <div>
                {[...Array(this.state.grid[0])].map((e, i) => <div id={`row-${i}`} className="row">
                    {[...Array(this.state.grid[1])].map((e, i) => <div id={`col-${i}`} className="column"> </div>)}
                </div>)}
            </div>
        )
    }

    componentDidUpdate() {
        let currentX = 'row-' + this.state.playerX;
        document.getElementById(currentX).children[this.state.playerY].style.backgroundColor = 'white';
        document.getElementById(currentX).children[this.state.playerY].innerHTML = 'o';
    }
}

export default App;