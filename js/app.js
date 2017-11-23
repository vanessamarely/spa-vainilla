
function showNavigationTemplate(){
  const navigationTemplate = 
  '<ul>  <li>  <button onclick="showPage()">Home <i class="fa fa-home" aria-hidden="true"></i></button>   </li> <li> <button onclick="showPage(2)">About <i class="fa fa-user" aria-hidden="true"></i></button> </li> </ul>',
  menu = document.getElementById('menu');
  menu.innerHTML = navigationTemplate;
}

function showPage(page = ''){
  if(page === '') {
    window.location.href = 'index.html';
  }else{
    window.location.href = 'about.html';
  }
}


showNavigationTemplate();