import slidesJson from '../data/slides.json' assert { type: 'json' };

const slidesDiv = document.createElement('div');

for (let element = 0; element < slidesJson.length; element++) {
  // for (let element = 0; element < Math.min(5, slidesJson.length); element++) {
  const slide = document.createElement('div');
  const slideTitle = document.createElement('a');
  slideTitle.href = slidesJson[element].ppt_link;
  slideTitle.innerText = slidesJson[element].title;
  slideTitle.className = 'Slides--Content--Month';

  const memoryAttached = document.createElement('blockquote');
  memoryAttached.innerText = slidesJson[element].memory_attached;
  memoryAttached.className = 'Slides--Content--Data';

  slide.appendChild(slideTitle);
  slide.appendChild(memoryAttached);
  slidesDiv.appendChild(slide);
}

document.getElementById('Slides--Content').appendChild(slidesDiv);
