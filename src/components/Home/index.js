import React, { Component } from "react";
import './Home.css';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import '../../assets/fonts/gotham-rounded/style.css'
class Home extends Component {
  constructor() {
    super();
    this.state = {
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
      ]
    }
  }
  componentDidMount=()=>{
  }
  render() {
    const {favouriteSongs, newReleaseSongs} = this.state;
    const params = {
      slidesPerView: '3',
      centeredSlides: false,
      loop: false,
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
      <div>
        <div className="col-md-12">
          <div className="row">
            <div className="body-wrapper">
              <div className="section-wrap">
                <div className="section-header">
                  <p>Your Favorite</p>
                  <span>View all</span>
                </div>
                <div className="section-body">
                  <Swiper {...params}>
                    { favouriteSongs.map((song,index)=>{
                      return (
                        <div  key={index+1}>
                          <div className="section-body-card">
                            <img src={song.cover} alt="song"/>
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
                  <p>New Release</p>
                  {/* <span>View all</span> */}
                </div>
                <div className="section-body">
                  <Swiper {...params1}>
                    { newReleaseSongs.map((song,index)=>{
                      return (
                        <div className="section-body-large-card" key={index+2}>
                          <img src={song.cover} alt="song" />
                        </div>
                      )})
                    }
                  </Swiper>
                </div>
              </div><br />

              <div className="section-wrap">
                <div className="section-header">
                  <p>Trending</p>
                  <span>View all</span>
                </div>
                <div className="section-body">
                  <Swiper {...params}>
                    { favouriteSongs.slice(0).reverse().map((song,index)=>{
                      return (
                        <div  key={index+3}>
                          <div className="section-body-card">
                            <img src={song.cover} alt="song"/>
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
                            <img src={song.cover} alt="song"/>
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
    );
  }
}

export default Home;

