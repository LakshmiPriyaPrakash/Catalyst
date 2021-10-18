Catalyst, a Medium clone, is a website dedicated to stories on sustainability, minimalism, green-living, and all the lifestyle choices we can make to change the world for the better.  

**Documentation:** https://github.com/LakshmiPriyaPrakash/Catalyst/wiki  

**Live site link:** https://the-catalyst.herokuapp.com/


### Landing Page:

![](https://res.cloudinary.com/lpriya/image/upload/v1634537112/Catalyst/landing-page_rqixlw.jpg)

### Sign up modal:

![](https://res.cloudinary.com/lpriya/image/upload/v1634537112/Catalyst/signup-modal_iajmjf.jpg)

### Story page and comments sidebar:

![](https://res.cloudinary.com/lpriya/image/upload/v1634537112/Catalyst/story-comments_tqpnkq.jpg)

### Features
* Sign up modal for new users 
* Log in with credentials for existing users
* Full access to site functionality for demo user
* Logged in users can read, write, edit, and delete stories
* Logged in users can read, write, edit, and delete comments for stories
* Logged out users can read stories and comments

### Code highlights
I loved implementing the comments sidebar which slides in from the right when you click on the comments button at the bottom of every story. The comments sidebar shows an input form followed by the user comments for that story. If you are a logged out user, the comments sidebar will ask you to log in to submit, edit, or delete comments. If you are a logged in user, edit and delete icons show up for all your comments. When you click on the edit icon, a edit form will open with the comment to be edited. My favorite part was getting the edit form to open in place of the comment.

Part of the code:
```
  {storyComments.map(comment => {
       let d = new Date(comment.createdAt);
       let dateWritten = d.toString().slice(4, 10);
       return (
          <li key={comment.id} className="comments-list">
            {!showEditBoxArr[comment.id] &&
              <div id={comment.id}>
               <p className="user-name"><FaRegUserCircle /> {comment.User.name}</p>
               <p className="date-written">{dateWritten}</p>
               <p id="cmt-bdy">{comment.body}</p>

               {sessionUser && (sessionUser.id === comment.userId) &&
                  <button className="ed-button" type="submit"
                    onClick={() => {
                      setshowEditBox(true)
                      setshowCommentId(comment.id)
                      setEditBody(comment.body)
                      let newobj = {...newObj}
                      newobj[comment.id] = true;
                      setEditBoxArr(newobj)
                       }
                   }>
                    <FaEdit />
                  </button>
                  }
                 {sessionUser && (sessionUser.id === comment.userId) &&
                    button className="ed-button" type="submit" onClick={() => dispatch(deleteComment(comment.id))}>
                      <RiDeleteBin5Line />
                    </button>
                  }
                   </div>
```

### Database Schema

![Catalyst Database schema](https://res.cloudinary.com/lpriya/image/upload/v1634534777/Catalyst/Catalyst_Database_schema2_ng1pq1.png)

### Front End Routes
* /api/stories
  * fetches all the stories  
* /api/stories/:storyId
  * updates a story
* /api/stories/delete/:storyId
  * deletes a story  
* /api/comments
  * fetches all comments
* /api/comments/:commentId
  * updates a comment 
* /api/comments/delete/:commentId
  * deletes a comment

### Backend Routes
* Stories
  * GET api/stories
  * POST api/stories
  * PUT api/stories/:id
  * DELETE api/stories/delete/:id

* Comments
  * GET api/comments
  * POST api/comments
  * PUT api/comments/:id
  * DELETE api/comments/delete/:id


### React Components
* HomePage
  * displays all stories
* Navigation
  * shows links for home, log in, sign up, and demo user 
* LoginFormModal
  * displays a form to log in a user to their account on the app
* SignupFormModal
  * displays a form the guest can use to sign up as a user of the app
* UserDashboard
  * shows the user feed and links to write a story and view all their stories in the navigation bar
* UserFeed
  * displays all recommended stories for the logged in user
* UserStories
  * displays all the stories written by the logged in user
* StoryDetails
  * displays the details of the story including its contents
* WriteStory
  * displays the form for writing a new story
* UpdateStory
  * displays the form for editing a story
* Comments
  * displays the comment input form, the comments, and comment edit form in the comments sidebar
* Footer
  * displays the creator's name and links to their Github and LinkedIn


### Redux
* session: { logged in user data }
* stories: { all stories, users who wrote the stories}
* comments: {all comments, users who wrote the comments, stories for which the comments were written }


### Future Plans
Implement:
* Likes for stories
* Follows for authors
* Categories for stories
* Bookmark for stories
* User profiles
