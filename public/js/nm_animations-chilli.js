window.addEventListener("load", () => {
  console.log("chilli: ", copyText);
  if (!!document.getElementById("chilli-animation")) {
    //New animejs timeline, looping from 8500 to the end
    const animationTimeline = anime.timeline({
      autoplay: false,
      // loop: true,
      // loopComplete: function (animation) {
      //   animation.pause();
      //   animation.seek(8500);
      //   animation.play();
      // },
    });

    // Select animation container
    const animationContainer = document.getElementById("chilli-animation");

    const scrollerPage = animationContainer.closest(".nm-scroller-single-page");

    scrollerPage.addEventListener("enter", () => {
      animationTimeline.play();
    });

    scrollerPage.addEventListener("leave", () => {
      animationTimeline.pause();
    });

    // New container for eyes
    const svgContainer = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgContainer.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgContainer.setAttribute("viewBox", "0 0 300 120");
    svgContainer.position = "relative";
    svgContainer.style.zIndex = 1;

    const copyTextContainer = document.createElement("div");
    copyTextContainer.setAttribute("class", "copy-text");
    copyTextContainer.style.position = "absolute";
    copyTextContainer.style.width = 0;
    copyTextContainer.style.height = 0;
    copyTextContainer.style.top = "-75px";
    copyTextContainer.style.right = "-75px";
    copyTextContainer.innerText = copyText;
    animationContainer.appendChild(copyTextContainer);

    const eyes = new Eyes({
      timeline: animationTimeline,
      initialState: "closed",
    });

    eyes.draw(svgContainer);
    animationContainer.appendChild(svgContainer);

    const chilly = document.createElement("div");
    chilly.setAttribute("id", "chilly");
    chilly.style.position = "absolute";
    chilly.style.backgroundImage = "url(" + assetPath + "/chilli.png)";
    chilly.style.backgroundRepeat = "no-repeat";
    chilly.style.backgroundSize = "contain";
    chilly.style.top = "85px";
    chilly.style.right = "30px";
    chilly.style.width = "0";
    chilly.style.height = "0";
    chilly.style.transform = "rotate(270deg)";
    chilly.style.zIndex = 2;
    animationContainer.appendChild(chilly);

    eyes.open(1000, 150);

    // Animation text

    animationTimeline.add({
      targets: copyTextContainer,
      rotate: 390,
      width: "130px",
      height: "100px",
      easing: "easeInOutQuad",
      duration: 500,
    });

    // Chilli animation

    animationTimeline.add({
      targets: chilly,
      width: "340px",
      height: "150px",
      translateX: 70,
      rotate: 370,
      easing: "easeInOutQuad",
      duration: 600,
    });

    animationTimeline.add({
      targets: chilly,
      rotate: 355,
      easing: "easeInOutQuad",
      duration: 600,
    });

    animationTimeline.add({
      targets: chilly,
      rotate: 360,
      easing: "easeInOutQuad",
      duration: 600,
    });

    // Looping animation

    eyes.open(1000, 400);
    eyes.winkRight(2000, 400, 800);
    eyes.blink(2000);
    eyes.angry(2000, 1000);
    eyes.close(1000, 150);
    eyes.angry(150, 150);
    eyes.open(1000, 400);
    eyes.blink(1000);
    eyes.sad(2000, 1000);
    eyes.close(1000, 150);
    eyes.sad(150, 150);
    eyes.sleepy(3000, 1000);
    eyes.close(3000, 2000);
    eyes.sleepy(150, 1000);
    eyes.close(3000, 3000);
    eyes.sleepy(150, 1500);
    eyes.close(3000, 4000);
    eyes.peekRight(3000, 2000, 800);
    eyes.openRight(1000, 150);
    eyes.openLeft(1500, 1000);
    eyes.happy(2000, 1000);
    eyes.close(2000, 150);
    eyes.happy(150, 150);
    eyes.open(1000, 500);
    eyes.blink(1000);
  }
});
