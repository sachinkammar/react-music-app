import React, { Component } from "react";
import './Playlists.css';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import '../../assets/fonts/gotham-rounded/style.css';
import Page from '../Page'
class Playlists extends Component {
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
  goToTrackList=()=>{
    this.props.history.push('/track-list')
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
              <div className="browse-header playlists-header">
                <p>Your music zone</p>
                <h3>My Playlists</h3>
              </div>
              <div className="bowse-body">
                <div className="playlists-top-list">
                  <div className="playlists-top-list-img" onClick={this.goToTrackList}>
                    <img src={newReleaseSongs[4].cover} className="img-reponsive" />
                  </div>
                  <div className="playlists-top-list-info">
                    <h4>Favourites</h4>
                    <p>32 songs</p>
                    <span>Updated 2 days ago</span>
                    <div className="playlists-top-list-info-actions">
                      <div className="playlists-top-list-info-actions-play" onClick={this.goToTrackList}>
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
                      <div className="playlists-top-list-info-more">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-more-vertical"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={12} cy={5} r={1} />
                          <circle cx={12} cy={19} r={1} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="playlists-create">
                  <div className="playlists-create-icon">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={26}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1={12} y1={5} x2={12} y2={19} />
                        <line x1={5} y1={12} x2={19} y2={12} />
                      </svg>
                    </div>
                  </div>
                  <div className="playlists-create-title">
                    <p>Create a new playlist</p>
                    <span>Click to add</span>
                  </div>
                </div>
                <div className="section-wrap">
                  <div className="section-header playlists-all-header">
                    <p>Created Playlists</p>
                  </div>
                  <div className="section-body">
                    <div className="playlists-all">
                      { favouriteSongs.slice(0).reverse().map((song,index)=>{
                        return (
                          <div key={index+1} onClick={this.goToTrackList}>
                            <div className="playlist-all-list">
                              <img src={song.cover} alt="song" className="swiper-lazy" />
                              <div className="playlist-all-list-overly">
                                <p>{song.name}</p>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-bar-chart-2"
                                  >
                                    <line x1={18} y1={20} x2={18} y2={10} />
                                    <line x1={12} y1={20} x2={12} y2={4} />
                                    <line x1={6} y1={20} x2={6} y2={14} />
                                  </svg>
                                </span>
                                <span> 32 songs</span>
                              </div>
                            </div>
                          </div>
                        )})
                      }
                    </div>
                  </div>
                </div>
                <div className="section-wrap">
                  <div className="section-header">
                    <p>Trending Songs</p>
                    <span>View all</span>
                  </div>
                  <div className="section-body">
                    <Swiper {...params}>
                      { favouriteSongs.slice(0).reverse().map((song,index)=>{
                        return (
                          <div  key={index+3}>
                            <div className="section-body-card">
                              <img src={song.cover} alt="song" className="swiper-lazy" />
                            </div>
                            <span className="section-body-card-title">{song.name}</span>
                          </div>
                        )})
                      }
                    </Swiper>
                  </div>
                </div><br />
                <div className="section-wrap">
                  <div className="section-header">
                    <p>Popular Artists</p>
                    <span>View all</span>
                  </div>
                  <div className="section-body">
                    <Swiper {...params}>
                      { favouriteSongs.slice(0).reverse().map((song,index)=>{
                        return (
                          <div key={index+4}>
                            <div className="section-body-round-card">
                              <img src={song.cover} alt="song" className="swiper-lazy" />
                            </div>
                            <span className="section-body-round-card-title">{song.name}</span>
                          </div>
                        )})
                      }
                    </Swiper>
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

export default Playlists;