const countDown = () => {
  //getting the dom elements for the respective times
  const today = new Date();
  const launchDate = new Date("1 December 2021");
  const days_ = document.getElementById("days-left");
  const hours_ = document.getElementById("hours-left");
  const minutes_ = document.getElementById("minutes-left");
  const seconds_ = document.getElementById("seconds-left");

  //calculating time left
  const timeLeft = launchDate - today;
  const secondsLeft = Math.floor((timeLeft / 1000) % 60);
  const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  //replacing the dom elements with the times left
  days_.innerHTML = daysLeft;
  hours_.innerHTML = hoursLeft;
  minutes_.innerHTML = minutesLeft;
  seconds_.innerHTML = secondsLeft;
};

setInterval(countDown, 1000);
