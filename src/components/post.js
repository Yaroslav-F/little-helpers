import React   from 'react'
import Backend from '../services/backend'

class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = { title: '', date: '', body: '' }
  }

  componentDidMount() {
    Backend.getPost(this.props.match.params.slug, (response) => {
      this.setState({
        title: response.data.title,
        date: response.data.date,
        body: response.data.body
      })
    })
  }

  render() {
    if(this.state.title.length === 0){
      return(
        <div className='text-center'>
          <div className='spinner-border mt-5' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )
    }

    return (
      <div className='blog-post'>
        <h2 className='blog-post-title'>{this.state.title}</h2>
        <p className='blog-post-meta'>{new Date(this.state.date).toLocaleDateString('en-gb', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <div dangerouslySetInnerHTML={{ __html: this.state.body }} />
      </div>
    )
  }
}

export default Post;
