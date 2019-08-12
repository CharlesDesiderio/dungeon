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
        document.getElementById(currentX).children[this.state.playerY].innerHTML = 'HERO';
    }

    checkMove = (event) => {
        console.log(event.key);
        if (event.key === 'w') {
            console.log('pressed');
            let newY = this.state.playerX - 1;
            this.setState({playerY: newY})
            console.log(this.state);
            
        }
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
        document.getElementById(currentX).children[this.state.playerY].innerHTML = 'HERO';
    }
}

export default App;