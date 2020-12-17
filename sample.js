// make a ajax req. Use the fetch func
//'http://reduxblog.herokuapp.com/api/posts'



// function fetchPosts() {
//   fetch('http://reduxblog.herokuapp.com/api/posts')
//     .then(res => res.json())
//     .then(json => console.log(json))
// }


const fetchPosts = async () => {
  const res = await fetch('http://reduxblog.herokuapp.com/api/posts')
  const json = await res.json()
    
  console.log(json)
}
fetchPosts();