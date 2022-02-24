import React, { Component } from 'react'
import MiddleMd7 from '../components/Newsfeed/MiddleMd7'
import StaticMd3 from '../components/Newsfeed/StaticMd3'
import StaticMs2 from '../components/Newsfeed/StaticMs2'
import Header from './Header'
import Footer from './Footer'

export default class NewsFeed extends Component {

  /**
   * Burada props içnide gelen verileri kontrol ederek bir çok konuda bilgi sahibi olabilir.z
   * 
   * @param {*} props 
   */
  constructor(props){
    super(props)
    console.log(props)
  }

  render() {
    return (
      <>
          <Header />
        <div id="page-contents">
            <div className="container">
                <div className="row">

                    <StaticMd3 />
                    <MiddleMd7 />
                    <StaticMs2 />
            
                </div>
            </div>
        </div>
        <Footer />
      </>
    
    )
  }
}
