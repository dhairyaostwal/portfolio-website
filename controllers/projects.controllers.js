fetch('../data/projects.json')
  .then((res) => res.json())
  .then((data) => {
    const projectsJson = data;
    const projectsDiv = document.createElement('div');

    for (let element = 0; element < projectsJson.length; element++) {
      // for (const element of projectsJson) {
      const project = document.createElement('div');
      const projectHeading = document.createElement('a');
      projectHeading.innerText = projectsJson[element].project_title;
      projectHeading.className = 'Project--Card--Heading';

      const projLang = document.createElement('h5');
      projLang.innerText = '.' + projectsJson[element].project_language;
      projLang.className = 'Project--Card--Lang';

      const paraContainer = document.createElement('p');
      const para = document.createElement('p');
      para.innerText = projectsJson[element].project_description;
      projectHeading.href = projectsJson[element].project_link;
      paraContainer.appendChild(para);
      paraContainer.className = 'Project--Card--Content';

      const pc = document.createElement('div');
      pc.appendChild(projectHeading);
      pc.appendChild(projLang);
      //   project.appendChild(projectHeading);
      //   project.appendChild(projLang);
      project.appendChild(pc);
      project.appendChild(paraContainer);
      project.className = 'card';
      projectsDiv.appendChild(project);
      projectsDiv.className = 'cards';
    }

    document.getElementById('Blogs--Content').appendChild(projectsDiv);
  });
