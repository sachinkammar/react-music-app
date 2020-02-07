import React, { Component } from "react";
import './Home.css';
import Swiper from 'react-id-swiper';
import axios from 'axios';
import 'react-id-swiper/lib/styles/css/swiper.css';
import '../../assets/fonts/gotham-rounded/style.css';
import Page from '../Page';

var access_token;
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
      ],
      newReleases:[],
     featuredPlaylists:[],
     topCharts:[],
     trendingSongs:[],
     topArtists:[]
    }
  }
  componentDidMount=()=>{
    this.getAccessToken();
  }
  getAccessToken=()=>{
    axios.get('/api/spotify/access_token')
    .then(response => {
      access_token = response.data.message.notSigned.access_token;
      console.log("response",access_token);
      this.getNewReleases()
      this.getFeaturedPlaylists()
      this.getTopCharts()
      this.getTrendingSongs(access_token);
      this.getSeveralArtists(access_token)
    })
    .catch(err => {
      console.log(err);
    })
  }

  getNewReleases=()=>{
    axios.get('/api/spotify/get-new-releases')
    .then(response => {
      var newReleases = response.data.message.body.albums.items;
      this.setState({newReleases})
      //console.log("newReleases response",newReleases);
    })
    .catch(err => {
      console.log(err);
    });
  }

  getFeaturedPlaylists=()=>{
    axios.get('/api/spotify/get-featured-playlists')
    .then(response => {
      var featuredPlaylists = response.data.message.body.playlists.items;
      this.setState({featuredPlaylists})
      console.log("getFeaturedPlaylists response",featuredPlaylists);
    })
    .catch(err => {
      console.log(err);
    });
  }

  getTopCharts=()=>{
    axios.get('/api/spotify/get-top-charts')
    .then(response => {
      var topCharts = response.data.message.body.items;
      this.setState({topCharts})
      console.log("get-top-charts response",topCharts);
    })
    .catch(err => {
      console.log(err);
    });
  }

  getTrendingSongs=(at)=>{
    axios.get('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF',
    {
      query:{
        playlist_id:"37i9dQZEVXbMDoHDwVN2tF",
        market:'IN'
      },
      headers: {
      Authorization:
      'Bearer ' +at
    }})
    .then(response => {
      var trendingSongs = response.data.tracks.items;
      this.setState({trendingSongs})
      console.log("getTrendingSongs response",trendingSongs);
    })
    .catch(err => {
      console.log(err);
    });
  }

  getSeveralArtists=(at)=>{
    var ids = ''
    axios.get('https://api.spotify.com/v1/artists?ids=60d24wfXkVzDSfLS6hyCjZ%2C64KEffDW9EtZ1y2vBYgq8T%2C66CXWjxzNUsdJxJ2JdwvnR%2C53XhwfbYqKCa1cC15pYq2q%2C06HL4z0CvFAxyc27GXpf02%2C6eUKZXaKkcviH0Ku9w2n3V%2C4nDoRrQiYLoBzwC5BhVJzF%2C7n2wHs1TKAczGzO7Dd2rGr%2C1uNFoZAHBGtllmzznpCI3s%2C3TVXtAsR1Inumwj472S9r4',
    {
      headers: {
      Authorization:
      'Bearer ' +at
    }})
    .then(response => {
      var topArtists = response.data.artists;
      this.setState({topArtists})
      console.log("topArtists response",topArtists);
    })
    .catch(err => {
      console.log(err);
    });
  }

  
  playSong=(url)=>{
    window.open(url,'_blank');
  }
  goToPlayer=()=>{
    this.props.history.push('/player')
  }
  goToTrackList=()=>{
    this.props.history.push('/track-list')
  }
  
  render() {
    const {favouriteSongs, newReleaseSongs, newReleases, featuredPlaylists, topCharts, trendingSongs,topArtists} = this.state;
    const params = {
      slidesPerView: '3',
      centeredSlides: false,
      loop: false,
      lazy: true,
      spaceBetween: 100,
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
      lazy: true,
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
      <Page>
        <div className="col-md-12">
          <div className="row">
            <div className="body-wrapper delay-page-load">
              <div className="section-wrap">
                <div className="section-header">
                  <p>New Releases</p>
                  {/* <span>View all</span> */}
                </div>
                <div className="section-body">
                  <Swiper {...params1}>
                    { newReleases.map((song,index)=>{
                      return (
                        <div className="section-body-large-card" key={song.id} onClick={()=>this.playSong(song.external_urls.spotify)}>
                          <img src={song.images[1].url} alt="song" className="swiper-lazy" />
                        </div>
                      )})
                    }
                  </Swiper>
                </div>
              </div><br />
              <div className="section-wrap">
                <div className="section-header">
                  <p>Your Favorites</p>
                  <span>View all</span>
                </div>
                <div className="section-body">
                  <Swiper {...params} style={{minWidth:150}}>
                    { favouriteSongs.map((song,index)=>{
                      return (
                        <div  key={index+1} onClick={this.goToPlayer}>
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
                  <p>Trending</p>
                  <span>View all</span>
                </div>
                <div className="section-body">
                  <Swiper {...params}>
                    { trendingSongs.map((song,index)=>{
                      return (
                        <div key={song.track.id} onClick={()=>this.playSong(song.track.external_urls.spotify)}>
                          <div className="section-body-card">
                            <img src={song.track.album.images[1].url} alt="song" className="swiper-lazy" />
                          </div>
                          <span className="section-body-card-title">{song.track.name.substring(0,28)}</span>
                        </div>
                      )})
                    }
                  </Swiper>
                </div>
              </div><br />
              <div className="section-wrap">
                <div className="section-header">
                  <p>Top Charts</p>
                  <span>View all</span>
                </div>
                <div className="section-body">
                  <Swiper {...params}>
                    { topCharts.map((song,index)=>{
                      return (
                        <div  key={song.id} onClick={()=>this.playSong(song.external_urls.spotify)}>
                          <div className="section-body-card">
                            <img src={song.images[0].url} alt="song" className="swiper-lazy" />
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
                    { topArtists.map((song,index)=>{
                      return (
                        <div key={index+4} onClick={()=>this.playSong(song.external_urls.spotify)}>
                          <div className="section-body-round-card">
                            <img src={song.images[1].url} alt="song" className="swiper-lazy" />
                          </div>
                          <span className="section-body-round-card-title">{song.name}</span>
                        </div>
                      )})
                    }
                  </Swiper>
                </div>
              </div><br />
              <div className="section-wrap">
                <div className="section-header">
                  <p>Top Playlists</p>
                  {/* <span>View all</span> */}
                </div>
                <div className="section-body">
                <Swiper {...params} style={{minWidth:150}}>
                    { featuredPlaylists.map((song,index)=>{
                      return (
                        <div  key={index+1} onClick={()=>this.playSong(song.external_urls.spotify)}>
                          <div className="section-body-card">
                            <img src={song.images[0].url} alt="song" className="swiper-lazy" />
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
                    <p>You May Also Like</p>
                    <span>View all</span>
                  </div>
                  <div className="section-body">
                    <Swiper {...params}>
                      { favouriteSongs.slice(0).reverse().map((song,index)=>{
                        return (
                          <div  key={index+1}  onClick={this.goToTrackList}>
                            <div className="section-body-card section-body-list-card">
                              <img src={song.cover} alt="song" className="swiper-lazy" />
                              <div className="section-body-card-overly">
                                <p>{song.name}</p>
                                <span>
                                  <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width={16} 
                                    height={16} 
                                    viewBox="0 0 24 18" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth={2} 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                  </svg>
                                </span>
                                <span> 250K</span>
                              </div>
                            </div>
                          </div>
                        )})
                      }
                    </Swiper>
                  </div>
                </div><br />
                
              <div className="section-wrap">
                <div className="section-header">
                  <p>Top 50</p>
                  {/* <span>View all</span> */}
                </div>
                <div className="section-body">
                  <Swiper {...params1}>
                    { newReleaseSongs.slice(0).reverse().map((song,index)=>{
                      return (
                        <div className="section-body-large-card" key={index+2} onClick={this.goToPlayer}>
                          <img src={song.cover} alt="song" className="swiper-lazy" />
                        </div>
                      )})
                    }
                  </Swiper>
                </div>
              </div><br />

              <div className="section-wrap">
                <div className="section-header">
                  <p>Most Played</p>
                  <span>View all</span>
                </div>
                <div className="section-body">
                  <Swiper {...params}>
                    { newReleaseSongs.map((song,index)=>{
                      return (
                        <div  key={index+3} onClick={this.goToPlayer}>
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
                  <p>Your Favorites</p>
                  <span>View all</span>
                </div>
                <div className="section-body">
                  <Swiper {...params}>
                    { favouriteSongs.slice(0).reverse().map((song,index)=>{
                      return (
                        <div  key={index+1} onClick={this.goToPlayer}>
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
                  <p>New Releases</p>
                  {/* <span>View all</span> */}
                </div>
                <div className="section-body">
                  <Swiper {...params1}>
                    { newReleaseSongs.map((song,index)=>{
                      return (
                        <div className="section-body-large-card" key={index+2} onClick={this.goToPlayer}>
                          <img src={song.cover} alt="song" className="swiper-lazy" />
                        </div>
                      )})
                    }
                  </Swiper>
                </div>
              </div><br />
              <div className="section-wrap">
                <div className="section-header">
                  <p>Your Favorites</p>
                  <span>View all</span>
                </div>
                <div className="section-body">
                  <Swiper {...params} style={{minWidth:150}}>
                    { favouriteSongs.map((song,index)=>{
                      return (
                        <div  key={index+1} onClick={this.goToPlayer}>
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
                  <p>Trending</p>
                  <span>View all</span>
                </div>
                <div className="section-body">
                  <Swiper {...params}>
                    { favouriteSongs.slice(0).reverse().map((song,index)=>{
                      return (
                        <div  key={index+3} onClick={this.goToPlayer}>
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
                        <div key={index+4} onClick={this.goToTrackList}>
                          <div className="section-body-round-card">
                            <img src={song.cover} alt="song" className="swiper-lazy" />
                          </div>
                          <span className="section-body-round-card-title">{song.name}</span>
                        </div>
                      )})
                    }
                  </Swiper>
                </div>
              </div><br />

              <div className="section-wrap">
                <div className="section-header">
                  <p>Top 50</p>
                  {/* <span>View all</span> */}
                </div>
                <div className="section-body">
                  <Swiper {...params1}>
                    { newReleaseSongs.slice(0).reverse().map((song,index)=>{
                      return (
                        <div className="section-body-large-card" key={index+2} onClick={this.goToPlayer}>
                          <img src={song.cover} alt="song" className="swiper-lazy" />
                        </div>
                      )})
                    }
                  </Swiper>
                </div>
              </div><br />

              <div className="section-wrap">
                <div className="section-header">
                  <p>Most Played</p>
                  <span>View all</span>
                </div>
                <div className="section-body">
                  <Swiper {...params}>
                    { newReleaseSongs.map((song,index)=>{
                      return (
                        <div  key={index+3} onClick={this.goToPlayer}>
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
                  <p>Your Favorites</p>
                  <span>View all</span>
                </div>
                <div className="section-body">
                  <Swiper {...params}>
                    { favouriteSongs.slice(0).reverse().map((song,index)=>{
                      return (
                        <div  key={index+1} onClick={this.goToPlayer}>
                          <div className="section-body-card">
                            <img src={song.cover} alt="song" className="swiper-lazy" />
                          </div>
                          <span className="section-body-card-title">{song.name}</span>
                        </div>
                      )})
                    }
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Home;

