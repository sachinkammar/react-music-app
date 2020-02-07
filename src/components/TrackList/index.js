import React, { Component } from "react";
import './TrackList.css';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import '../../assets/fonts/gotham-rounded/style.css';
import Page from '../Page'
class TrackList extends Component {
  constructor() {
    super();
    this.state = {
      favouriteSongs : [
        {"name":"Believer","cover":"./img/covers/believer.jpg","composedBy":"Imagine Dragons","time":"3:30"},
        {"name":"Friction","cover":"./img/covers/friction.jpeg","composedBy":"Jonas Brothers","time":"3:49"},
        {"name":"Loved By","cover":"./img/covers/id-1.jpg","composedBy":"Alan Walker","time":"4:22"},
        {"name":"I Don't Care","cover":"./img/covers/id-2.png","composedBy":"The chainsmokers","time":"4:50"},
        {"name":"Goodbyes","cover":"./img/covers/id-3.jpg","composedBy":"Justin Bieber, The chainsmokers","time":"3:30"},
        {"name":"ME!","cover":"./img/covers/id-4.jpg","composedBy":"Moroon 5","time":"2:18"},
        {"name":"Fuck You","cover":"./img/covers/id-5.png","composedBy":"Cardi B, Selena Gomez, Ozuna","time":"5:29"},
        {"name":"Great Work","cover":"./img/covers/id-7.png","composedBy":"Ava Max","time":"4:50"},
        {"name":"Burn It Slow","cover":"./img/covers/id-8.jpg","composedBy":"Ed Sheeran & Bieber's","time":"3:49"},
        {"name":"Still You","cover":"./img/covers/id-9.png","composedBy":"Alan Walker","time":"4:22"},
        {"name":"Let Me Down","cover":"./img/covers/id-10.png","composedBy":"Ariana Grande","time":"2:18"},
        // {"name":"","cover":"./img/covers/"},
        // {"name":"","cover":"./img/covers/"},
        // {"name":"","cover":"./img/covers/"},
        // {"name":"","cover":"./img/covers/"}
      ],
      newReleaseSongs: [
        {"name":"Loved By","cover":"./img/covers/id-5.png","composedBy":"Jonas Brothers","time":"4:22"},
        {"name":"I Don't Care","cover":"./img/covers/id-7.png","time":"2:18"},
        {"name":"Goodbyes","cover":"./img/covers/id-8.jpg","composedBy":"Alan Walker","time":"3:30"},
        {"name":"ME!","cover":"./img/covers/id-9.png","composedBy":"The chainsmokers","time":"3:49"},
        {"name":"Smash It!","cover":"./img/covers/id-10.png","composedBy":"Justin Bieber, The chainsmokers","time":"4:50"},
        {"name":"Believer","cover":"./img/covers/believer.jpg","composedBy":"Moroon 5","time":"4:19"},
        {"name":"Friction","cover":"./img/covers/friction.jpeg","composedBy":"Cardi B, Selena Gomez, Ozuna","time":"3:49"},
        {"name":"Loved By","cover":"./img/covers/id-1.jpg","composedBy":"Ed Sheeran & Bieber's","time":"5:29"},
        {"name":"I Don't Care","cover":"./img/covers/id-2.png","composedBy":"Ava Max","time":"4:50"},
        {"name":"Goodbyes","cover":"./img/covers/id-3.jpg","composedBy":"Ariana Grande","time":"3:30"},
        {"name":"ME!","cover":"./img/covers/id-4.jpg","composedBy":"Bebe Rexha","time":"4:22"}
      ]
    }
  }
  componentDidMount=()=>{
  }
  goToPlayer=()=>{
    this.props.history.push('/player')
  }
  render() {
    const {favouriteSongs, newReleaseSongs} = this.state;
    const params = {
      slidesPerView: '3',
      centeredSlides: false,
      loop: false,
      lazy: true,
      spaceBetween: 70,
      shouldSwiperUpdate: true,
      freeMode: true,
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
    const params1 = {
      slidesPerView: '2',
      centeredSlides: false,
      effect: 'slide',
      loop: false,
      lazy: true,
      spaceBetween: 20,
      shouldSwiperUpdate: true,
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
      <Page>
        <div className="col-md-12">
          <div className="row">
            <div className="body-wrapper delay-page-load">
              <div className="bowse-body track-list">
                <div className="track-list-header">
                  <div className="track-list-header-img">
                    <img src={favouriteSongs[2].cover} className="img-responsive" />
                  </div>
                  <div className="track-list-header-info">
                    <h4>Weekly Top Songs</h4>
                    <p>32 Songs <span> 211k Favourites</span></p>
                  </div>
                  <div className="">
                    <div className="track-list-header-info-play">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 20 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-play"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <div className="track-list-header-info-fav">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="browse-body-hot-songs">
                  {/* <div className="browse-body-hot-songs-title">
                    <span>Hot Songs</span>
                    <span style={{color:'#e78783',fontSize:14}}>See All</span>
                  </div> */}
                  <div className="browse-body-hot-songs-box">
                    {favouriteSongs.length>0 && favouriteSongs.map((song,index)=>{
                      return(<div className="browse-body-hot-song-wrap" key={index} style={{animation:'none'}} onClick={this.goToPlayer}>
                        <div className="browse-body-hot-song-body-img">
                          <img src={song.cover} alt={song.name} />
                        </div>
                        <div className="browse-body-hot-song-body">
                          <div>
                            <p>
                              {song.name}
                            </p>
                            <span>
                              {song.composedBy}
                            </span>
                          </div>
                          <p className="browse-body-hot-song-body-song-time">
                            {song.time}
                          </p>
                        </div>
                      </div>)
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default TrackList;

