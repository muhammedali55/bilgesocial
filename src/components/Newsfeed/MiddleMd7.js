import React, { Component } from 'react'
import Post from './Post'

export default class MiddleMd7 extends Component {
    constructor(props){
        super(props)
    }

    state={
        postList:[
            {id: 1},{id:2 },{id:3 },{id:4}
        ]
    }

  render() {
    return (
     
        <div className="col-md-7">

            <div className="create-post">
            
                
                <div className="row">
                    <div className="col-md-7 col-sm-7">
                <div className="form-group">
                    <img src="images/users/user-1.jpg" alt="" className="profile-photo-md" />
                    
                    <textarea name="content" id="exampleTextarea" cols="30" rows="1" className="form-control" placeholder="Write what you wish">

                    </textarea>
                </div>
                </div>
                    <div className="col-md-5 col-sm-5">
                <div className="tools">
                    <ul className="publishing-tools list-inline">
                    <li><a href="#"><i className="ion-compose"></i></a></li>
                    <li><a href="#"><i className="ion-images"></i></a></li>
                    <li><a href="#"><i className="ion-ios-videocam"></i></a></li>
                    <li><a href="#"><i className="ion-map"></i></a></li>
                    </ul>
                    <button className="btn btn-primary pull-right" type="submit" >Publish</button>
                </div>
                </div>
        

            </div>
            </div>

            {
                this.state.postList.map(x=> <Post />)
            }
         
      </div>
    )
  }
}
