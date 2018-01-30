const clickStylist = () => {
  document.getElementsByClassName("c_status")[0].style.color = "rgba(255,255,255,.5)"
  document.getElementsByClassName("s_status")[0].style.color = "rgba(255,255,255,1)"
}

const clickClient = () => {
  document.getElementsByClassName("s_status")[0].style.color = "rgba(255,255,255,.5)";
  document.getElementsByClassName("c_status")[0].style.color = "rgba(255,255,255,1)";
}

const regOpen = () => {
  document.getElementsByClassName("reg")[0].style.display = "block";
  document.getElementsByClassName("log")[0].style.display = "none";
  document.getElementsByClassName("logg")[0].style.color = "rgba(255,255,255,.5)"
  document.getElementsByClassName("regg")[0].style.color = "rgba(255,255,255,1)"
};

const logOpen = () => {
  document.getElementsByClassName("log")[0].style.display = "block";
  document.getElementsByClassName("reg")[0].style.display = "none";
  document.getElementsByClassName("regg")[0].style.color = "rgba(255,255,255,.5)"
  document.getElementsByClassName("logg")[0].style.color = "rgba(255,255,255,1)"
};

const openShow = () => {
  document.getElementsByClassName("background_filter")[0].style.display = "block";
  document.getElementsByClassName("color_filter")[0].style.display = "block";
  document.getElementsByClassName("show_modal")[0].style.display = "block";
}

const closeBoxes = () => {
  document.getElementsByClassName("background_filter")[0].style.display = "none";
  document.getElementsByClassName("color_filter")[0].style.display = "none";
  document.getElementsByClassName("show_modal")[0].style.display = "none";
  document.getElementsByClassName("new_modal")[0].style.display = "none";
}

const showComments = () => {
    document.getElementsByClassName("show_thelook")[0].style.display = "none";
    document.getElementsByClassName("show_thecomments")[0].style.display = "block";
    document.getElementsByClassName("comment")[0].style.display = "none";
    document.getElementsByClassName("look")[0].style.display = "block";
}

const showLook = () => {
    document.getElementsByClassName("show_thecomments")[0].style.display = "none";
    document.getElementsByClassName("show_thelook")[0].style.display = "block";
    document.getElementsByClassName("look")[0].style.display = "none";
    document.getElementsByClassName("comment")[0].style.display = "block";
}

const searchSpecialty = () => {
    document.getElementsByClassName("search_specialty")[0].classList.toggle("search_specialtyz");
}

const searchColorEnjoy = () => {
    document.getElementsByClassName("search_enjoy")[0].classList.toggle("search_enjoyz");
}

const showAddNew = () => {
  document.getElementsByClassName("background_filter")[0].style.display = "block";
  document.getElementsByClassName("color_filter")[0].style.display = "block";
  document.getElementsByClassName("new_modal")[0].style.display = "block";
}


const profilePosts = () => {
  document.getElementsByClassName("profile_right")[0].style.display = "none";
  document.getElementsByClassName("profile_right_posts")[0].style.display = "block";
  document.getElementsByClassName("prolooks")[0].style.display = "none";
  document.getElementsByClassName("proposts")[0].style.display = "block";
}

const profileLooks = () => {
  document.getElementsByClassName("profile_right")[0].style.display = "flex";
  document.getElementsByClassName("profile_right_posts")[0].style.display = "none";
  document.getElementsByClassName("prolooks")[0].style.display = "block";
  document.getElementsByClassName("proposts")[0].style.display = "none";
}

const changeSearchBg = () => {
  document.getElementsByClassName("left")[0].style.background = "#f1f1f1";
}

const changeColorBg = () => {
  document.getElementsByClassName("colorinput")[0].style.background = "#f1f1f1";
}

const changeEnjoyBg = () => {
  document.getElementsByClassName("colorinput2")[0].style.background = "#f1f1f1";
}


const hideHomeSearch = () => {
  document.getElementsByClassName("homecontainer")[0].style.display = "none";
  document.getElementsByClassName("container")[0].style.display = "block";
}




//
