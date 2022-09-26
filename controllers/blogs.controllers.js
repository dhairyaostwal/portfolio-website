import blogsJson from '../data/blogs.json' assert { type: 'json' };

const blogDiv = document.createElement('div');

for (let element = 0; element < blogsJson.length; element++) {
  // for (const element of blogsJson) {
  const blog = document.createElement('div');
  const dateElement = document.createElement('h5');
  dateElement.innerText = blogsJson[element].published_on;
  dateElement.className = 'Blogs--Content--Month';

  const paraContainer = document.createElement('p');
  const para = document.createElement('a');
  para.innerText = blogsJson[element].title;
  para.href = blogsJson[element].blog_link;
  paraContainer.appendChild(para);
  paraContainer.className = 'Blogs--Content--Data';

  blog.appendChild(dateElement);
  blog.appendChild(paraContainer);
  blog.className = 'Blogs--Standard--Font';
  blogDiv.appendChild(blog);
}

document.getElementById('Blogs--Content').appendChild(blogDiv);
