import React, { Component } from 'react'
import Post from './Post'

export default class MiddleMd7 extends Component {
    constructor(props){
        super(props)
    }

    /**
     * Api den userid bu kullanıcıya ait post listesini çekeceğiz.
     */
    state={
        postList:[
            {
                id: 1,
                username: "Alexis Clark",
                following: true,
                postmediaurl: "images/post-images/1.jpg",
                like: 400,
                dislike: 2,
                publishat: 1645359091000,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                comment: [
                    {
                        id: 1,
                        username: "Diana",
                        photo: "images/users/user-11.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 2,
                        username: "Ahmet",
                        photo: "images/users/user-19.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 3,
                        username: "Bahar",
                        photo: "images/users/user-20.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 4,
                        username: "Gümüş",
                        photo: "images/users/user-1.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    }
                ]
            },
            {
                id: 2,
                username: "Aleyna KUŞ",
                following: true,
                publishat: 1645613293,
                postmediaurl: "images/post-images/2.jpg",
                like: 400,
                dislike: 2,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                comment: [
                    {
                        id: 1,
                        username: "Diana",
                        photo: "images/users/user-11.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 2,
                        username: "Ahmet",
                        photo: "images/users/user-19.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 3,
                        username: "Bahar",
                        photo: "images/users/user-20.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 4,
                        username: "Gümüş",
                        photo: "images/users/user-1.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    }
                ]
            },
            {
                id: 3,
                username: "Besim BAŞ",
                following: true,
                publishat: 1645613293,
                postmediaurl: "images/post-images/3.jpg",
                like: 400,
                dislike: 2,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                comment: [
                    {
                        id: 1,
                        username: "Diana",
                        photo: "images/users/user-11.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 2,
                        username: "Ahmet",
                        photo: "images/users/user-19.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 3,
                        username: "Bahar",
                        photo: "images/users/user-20.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 4,
                        username: "Gümüş",
                        photo: "images/users/user-1.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    }
                ]
            },
            {
                id: 4,
                username: "Verimli SAAT",
                following: true,
                publishat: 1645613293,
                postmediaurl: "images/post-images/4.jpg",
                like: 400,
                dislike: 2,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                comment: [
                    {
                        id: 1,
                        username: "Diana",
                        photo: "images/users/user-11.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 2,
                        username: "Ahmet",
                        photo: "images/users/user-19.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 3,
                        username: "Bahar",
                        photo: "images/users/user-20.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    },
                    {
                        id: 4,
                        username: "Gümüş",
                        photo: "images/users/user-1.jpg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"

                    }
                ]
            }
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
                this.state.postList.map(
                    post=> <Post key={post.id} data={post}/>)
            }
         
      </div>
    )
  }
}
