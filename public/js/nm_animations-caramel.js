window.addEventListener("load", () => {
  if (!!document.getElementById("caramel-animation")) {
    //New animejs timeline, looping from 8500 to the end
    const animationTimeline = anime.timeline({
      autoplay: false,
      loop: true,
      loopComplete: function (animation) {
        animation.pause();
        animation.seek(4150);
        animation.play();
      },
    });

    // Select animation container
    const animationContainer = document.getElementById("caramel-animation");

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
    copyTextContainer.style.opacity = 0;
    copyTextContainer.innerText = copyText;
    animationContainer.appendChild(copyTextContainer);

    const eyes = new Eyes({
      timeline: animationTimeline,
      initialState: "closed",
    });

    eyes.draw(svgContainer);
    animationContainer.appendChild(svgContainer);

    const caramel = document.createElement("div");
    caramel.style.position = "absolute";
    caramel.style.backgroundImage = "url(" + assetPath + "/caramel.png)";
    caramel.style.backgroundRepeat = "no-repeat";
    caramel.style.backgroundSize = "100% 200px";
    caramel.style.backgroundPosition = "center";
    caramel.style.opacity = 1;
    caramel.style.top = "80px";
    caramel.style.right = "150px";
    caramel.style.width = 0;
    caramel.style.height = "200px";
    caramel.style.transform = "rotate(180deg)";
    caramel.style.zIndex = 2;
    animationContainer.appendChild(caramel);

    eyes.open(1000, 150);

    // Animation text

    animationTimeline.add({
      targets: copyTextContainer,
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 1000,
    });

    // Caramel animation

    animationTimeline.add({
      targets: caramel,
      width: "300px",
      right: "20px",
      easing: "easeOutElastic(10, .5)",
      duration: 600,
    });

    eyes.open(1000, 400);

    // Looping animation

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
