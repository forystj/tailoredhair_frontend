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
}
