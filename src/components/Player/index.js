import React, { Component } from "react";
import './Player.css';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import '../../assets/fonts/gotham-rounded/style.css';
import 'rc-slider/assets/index.css';
// import { Slider, Rail, Handles, Tracks } from 'react-compound-slider';
import Slider, { Range } from 'rc-slider';
import Sound from 'react-sound';
import { SliderRail, Handle, Track } from './RangeSlider';
const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    
      <Handle value={value} {...restProps} />
  );
};
const sliderStyle = {
  position: 'relative',
  width: '100%',
  touchAction: 'none',
}
var song1 = './Benny_Blanco__J_Balvin__Tainy_-_I_cant_get_enough_(iringtone.net).mp3'
const domain = [1, 45]
const defaultValues = [1]
var swiper;
class Player extends Component {
  constructor() {
    super();
    this.state = {
      values: defaultValues.slice(),
    update: defaultValues.slice(),
      favouriteSongs : [
        {"name":"Believer","cover":"./img/covers/believer.jpg"},
        {"name":"Friction","cover":"./img/covers/friction.jpeg"},
        {"name":"Loved By","cover":"./img/covers/id-1.jpg"},
        {"name":"I Don't Care","cover":"./img/covers/id-2.png"},
        {"name":"Goodbyes","cover":"./img/covers/id-3.jpg"},
        {"name":"ME!","cover":"./img/covers/id-4.jpg"},
        {"name":"Fuck You","cover":"./img/covers/id-5.png"},
        {"name":"Great Work","cover":"./img/covers/id-7.png"},
        {"name":"Burn It Slow","cover":"./img/covers/id-8.jpg"},
        {"name":"Still You","cover":"./img/covers/id-9.png"},
        {"name":"Let Me Down","cover":"./img/covers/id-10.png"},
        // {"name":"","cover":"./img/covers/"},
        // {"name":"","cover":"./img/covers/"},
        // {"name":"","cover":"./img/covers/"},
        // {"name":"","cover":"./img/covers/"}
      ],
      newReleaseSongs: [
        {"name":"Loved By","cover":"./img/covers/id-5.png"},
        {"name":"I Don't Care","cover":"./img/covers/id-7.png"},
        {"name":"Goodbyes","cover":"./img/covers/id-8.jpg"},
        {"name":"ME!","cover":"./img/covers/id-9.png"},
        {"name":"Smash It!","cover":"./img/covers/id-10.png"},
        {"name":"Believer","cover":"./img/covers/believer.jpg"},
        {"name":"Friction","cover":"./img/covers/friction.jpeg"},
        {"name":"Loved By","cover":"./img/covers/id-1.jpg"},
        {"name":"I Don't Care","cover":"./img/covers/id-2.png"},
        {"name":"Goodbyes","cover":"./img/covers/id-3.jpg"},
        {"name":"ME!","cover":"./img/covers/id-4.jpg"}
      ],
      activeSlideKey:1,
      playStatus: Sound.status.STOPPED,
      elapsed: '00:00',
      total: '00:00',
      position: 0,
      playFromPosition: 0,
      actualPosition:0
    }
  }
  componentDidMount=()=>{
  }
  handleSongLoad=(loaded)=>{
    console.log("loaded",loaded)
    loaded.setAutoPlay(true)
  }
  handleSongPlaying(audio) {
    this.setState({ position: audio.position,actualPosition:audio.position, elapsed: this.formatMilliseconds(audio.position),
    total: this.formatMilliseconds(audio.duration),values:[audio.position/1000] })
    //console.log("saskj",audio);
  }
  formatMilliseconds(milliseconds) {
    // Format hours
    var hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;

    // Format minutes
    var minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;

    // Format seconds
    var seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    // Return as string
    return (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds < 10 ? '0' : '') + seconds;
  }
  togglePlay=()=>{
    // Check current playing state
    if(this.state.playStatus === Sound.status.PLAYING){
      // Pause if playing
      this.setState({playStatus: Sound.status.PAUSED})
    } else {
      // Resume if paused
      this.setState({playStatus: Sound.status.PLAYING})
    }
  }

  forward=()=>{
    this.setState({position: this.state.position+=1000*10});
  }

  backward=()=>{
    this.setState({position: this.state.position-=1000*10});
  }

  handleSongFinished () {
   console.log("song finished");
   this.setState({playStatus: Sound.status.STOPPED})
  }

  setPosition = (values)=>{
    this.setState({position:values*1000})
  }
  getSwiper=(mySwiper)=>{
    if(mySwiper){
      swiper=mySwiper;
      console.log("swiper",mySwiper.activeIndex);
      // this.setState({activeSlideKey:mySwiper.activeIndex})
      this.setState({playStatus:Sound.status.STOPPED})
    }
  }
  slideMove=(mySwiper)=>{
    if(mySwiper){
      swiper=mySwiper;
      console.log("swiper",mySwiper);
      // this.setState({activeSlideKey:mySwiper.activeIndex})
      this.setState({playStatus:Sound.status.STOPPED})
      swiper.slideNext();
    }
  }
  render() {
    const {favouriteSongs, newReleaseSongs,values, update, activeSlideKey} = this.state;
    const params = {
      on: {
        'init': () => {},
        'slideChange': () => {console.log("changed");
        var temp = activeSlideKey+1
        this.getSwiper(swiper)
        },
        'touchEnd': () => {console.log("complete");
        this.slideMove(swiper)
        }
      },
      slidesPerView: 1,
      centeredSlides: true,
      containerClass:"player-body-card-wrapper",
      slideClass:"player-body-card-slide-class",
      slideActiveClass:'player-body-card-active',
      activeSlideKey:this.activeSlideKey,
      watchOverflow: true,
      shouldSwiperUpdate:true,
      rebuildOnUpdate:false,
      loop: true,
      spaceBetween: 0,
      navigation: {
        nextEl: '.reviews__slider__nav--next',
        prevEl: '.reviews__slider__nav--prev'
      },
      renderPrevButton: () => (
        <a className="reviews__slider__nav reviews__slider__nav--prev" style={{display:'none'}} href="/home">prev</a>
      ),
      renderNextButton: () => (
        <a className="reviews__slider__nav reviews__slider__nav--next" style={{display:'none'}} href="/home">next</a>
      )
    }
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <div className="body-wrapper delay-page-load">
              <div className="section-wrap">
                <div className="player-header">
                  <h4>Don't Let Me Down</h4>
                  <p>Justine Bieber</p>
                </div>
                <div className="player-body">
                  <Swiper {...params} >
                    { favouriteSongs.map((song,index)=>{
                      return (
                        <div  key={index+1} onChange={this.abc}>
                          <div className="player-body-card">
                            <img src={song.cover} alt="song" />
                          </div>
                        </div>
                      )})
                    }
                  </Swiper>
                </div>
                <div className="player-handles">
                  <Sound
                    url={song1}
                    autoLoad={true}
                    playStatus={this.state.playStatus}
                    onPlaying={this.handleSongPlaying.bind(this)}
                    position={this.state.position}
                    onFinishedPlaying={this.handleSongFinished.bind(this)}
                    onLoad = {this.handleSongLoad}
                  />
                  <div className="player-handles-props">
                      <div style={{margin:'0 20px',width:'100%'}}>
                      <Slider
                        min={0}
                        max={40}
                        step={1}
                        onUpdate={this.onUpdate}
                        defaultValue={this.state.position/1000}
                        value={this.state.position/1000}
                        onChange={this.setPosition}
                        trackStyle={{backgroundColor:'rgb(77, 144, 254)'}}
                        handleStyle={[{backgroundColor:'rgb(77, 144, 254)',border:'rgb(77, 144, 254)',boxShadow:'0 0 5px rgb(77, 144, 254)'}]}
                      >
                        {/* <Rail>
                          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                        </Rail>
                        <Handles>
                          {({ handles, getHandleProps }) => (
                            <div className="slider-handles">
                              {handles.map(handle => (
                                <Handle
                                  key={handle.id}
                                  handle={handle}
                                  domain={domain}
                                  getHandleProps={getHandleProps}
                                />
                              ))}
                            </div>
                          )}
                        </Handles>
                        <Tracks right={false}>
                          {({ tracks, getTrackProps }) => (
                            <div className="slider-tracks">
                              {tracks.map(({ id, source, target }) => (
                                <Track
                                  key={id}
                                  source={source}
                                  target={target}
                                  getTrackProps={getTrackProps}
                                />
                              ))}
                            </div>
                          )}
                        </Tracks> */}
                      </Slider>
                      </div>
                      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <span>{this.state.elapsed}</span>
                        <span>{this.state.total}</span>
                      </div>
                  </div>
                  <div className="player-handles-icons-wrap">
                  <div style={{color:'#4d90fe',cursor:'pointer'}} onChange={this.backward}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shuffle"
                    >
                      <polyline points="16 3 21 3 21 8" />
                      <line x1={4} y1={20} x2={21} y2={3} />
                      <polyline points="21 16 21 21 16 21" />
                      <line x1={15} y1={15} x2={21} y2={21} />
                      <line x1={4} y1={4} x2={9} y2={9} />
                    </svg>
                    </div>
                    <div style={{color:'#4d90fe',cursor:'pointer'}} onChange={this.backward}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-skip-back"
                      >
                        <polygon points="19 20 9 12 19 4 19 20" />
                        <line x1={5} y1={19} x2={5} y2={5} />
                      </svg>
                    </div>
                    <div className="playlists-top-list-info-actions-play" onClick={this.togglePlay} style={{border:'1px solid #4d90fefa',boxShadow:'1px 5px 6px 0px rgba(84, 96, 212, 0.10), 1px 4px 6px 0px rgba(84, 96, 212, 0.10)',transform: 'scale(2)',backgroundColor:'#ffffff',width:27,height:27}}>
                      {this.state.playStatus === Sound.status.PLAYING ?
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={142}
                        height={16}
                        viewBox="0 0 23 25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={0}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-pause"
                        style={{fill:'#4d90fe',color:'#4d90fe'}}
                      >
                        <rect x={6} y={4} width={4} height={16} />
                        <rect x={14} y={4} width={4} height={16} />
                      </svg>:
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 21 27"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-play"
                      style={{fill:'#4d90fe',color:'#4d90fe'}}
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>}
                    </div>
                    <div style={{color:'#4d90fe',cursor:'pointer'}} onChange={this.forward}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-skip-forward"
                      >
                        <polygon points="5 4 15 12 5 20 5 4" />
                        <line x1={19} y1={5} x2={19} y2={19} />
                      </svg>
                    </div>
                    <div style={{color:'#4d90fe',cursor:'pointer'}} onChange={this.forward}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 22 22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-repeat"
                      >
                        <polyline points="17 1 21 5 17 9" />
                        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                        <polyline points="7 23 3 19 7 15" />
                        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;