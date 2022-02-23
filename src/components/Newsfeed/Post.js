import React, { Component } from 'react'

export default class Post extends Component {

    constructor(props){
        super(props)
    
     
    }

    /**
     * State içinde post listesi tanımladım
     */
    state={
       post: {}
    }

    /**
     * Componentleriniz yüklendikten sonra ne olacağını nelerin çalışacağını 
     * belirliyorsuz.
     * Sayfa değişiklikler olduğunda kontrol etmek için timer konulabilir.
     * Ya da sayfanın içerikleri bir api den çekilebilir.
     */
    componentDidMount = ()=>{
      /**
       * bir state içinde değer atamak için setState kullanılır.
       */
      this.setState({
          post: this.props.data
      })
    }

  render() {
     
    return (
       
        <div key={this.props.data.id} className="post-content">
          <img src="images/post-images/1.jpg" alt="post-image" className="img-responsive post-image" />
          <div className="post-container">
            <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
            <div className="post-detail">
              <div className="user-info">
                <h5><a href="timeline.html" className="profile-link">{this.state.post.username}</a> <span className="following">{this.props.data.following ? 'following' : '' }</span></h5>
                <p className="text-muted">Published a photo about 3 mins ago</p>
              </div>
              <div className="reaction">
                <a className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                <a className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
              </div>
              <div className="line-divider"></div>
              <div className="post-text">
                <p>
                    {
                        this.props.data.content
                    }
                     <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
              </div>
              <div className="line-divider"></div>
              {
                  this.props.data.comment.map(x=>
                        <div key={x.id} className="post-comment">
                            <img src={x.photo} alt="" className="profile-photo-sm" />
                            <p><a href="timeline.html" className="profile-link">{x.username} </a>
                            <i className="em em-laughing"></i> 
                            {
                                x.comment
                            }
                            </p>
                        </div>
                    )
              }
            
             
            </div>
          </div>
        </div>

    )
  }
}
