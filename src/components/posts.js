import React    from 'react'
import { Link } from 'react-router-dom'
import Backend  from '../services/backend'

class Posts extends React.Component{
  constructor(props) {
    super(props);
    this.state = { posts: [] }
  }

  componentDidMount() {
    Backend.getPosts((response) => {
      this.setState({
        posts: response.data
      })
    })
  }

  render() {
    if(this.state.posts.length === 0){
      return(
        <div className='text-center'>
          <div className='spinner-border mt-5' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )
    }

    return (
      <React.Fragment>
        {this.state.posts.map((post, index) => (
          <div className='blog-post' key={index}>
            <h2 className='blog-post-title'>{post.title}</h2>
            <p className='blog-post-meta'>{new Date(post.date).toLocaleDateString('en-gb', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <Link to={post.slug} className='btn btn-outline-primary'>Read More</Link>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default Posts;