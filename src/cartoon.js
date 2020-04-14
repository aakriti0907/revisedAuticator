import React,{Component} from 'react';
import ReactPlayer from 'react-player';
import './cartoon.css';

class Cartoon extends Component {
    render () {
      return (
        //   <div>
        //       <h1>CARTOONS!</h1>
        //   </div>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ZexYscXuv58'
            width='100%'
            height='80%'
            controls='true'
          />
        </div>
      )
    }
  }

export default Cartoon;