import react from "react";
import './sortingalgovisualizer.css'


export default class sortingalgovisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array:[],
        };
    }
    // When app reload than the array resets itself
    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i=0;i<=100;i++){
            array.push(randomIntfromInterval(5, 10000));
        }
        this.setState({array});
    }

    render(){
        const {array} = this.state;
        
    }
}