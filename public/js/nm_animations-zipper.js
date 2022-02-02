window.addEventListener("load", () => {
  if (!!document.getElementById("zipper-animation")) {
    //New animejs timeline, looping from 8500 to the end
    const animationTimeline = anime.timeline({
      autoplay: false,
      loop: true,
      loopComplete: function (animation) {
        animation.pause();
        animation.seek(8500);
        animation.play();
      },
    });

    // Select animation container
    const animationContainer = document.getElementById("zipper-animation");

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

    const zipper = document.createElement("div");
    zipper.style.position = "absolute";
    zipper.style.backgroundImage = "url(" + assetPath + "/zipper.svg)";
    zipper.style.backgroundRepeat = "no-repeat";
    zipper.style.backgroundPosition = "right";
    zipper.style.backgroundSize = "224px 100%";
    zipper.style.top = "150px";
    zipper.style.right = "30px";
    zipper.style.width = "0";
    zipper.style.height = "55px";
    zipper.style.zIndex = 1;
    animationContainer.appendChild(zipper);

    const zipperContainer = document.createElement("div");
    zipperContainer.style.position = "absolute";
    zipperContainer.style.top = "152px";
    zipperContainer.style.right = "-100px";
    zipperContainer.style.width = "240px";
    zipperContainer.style.height = "50px";
    zipperContainer.style.opacity = 0;
    zipperContainer.style.zIndex = 2;

    const zipperTractor = document.createElement("div");
    zipperTractor.style.position = "absolute";
    zipperTractor.style.backgroundImage = "url(" + assetPath + "/tractor.png)";
    zipperTractor.style.backgroundRepeat = "no-repeat";
    zipperTractor.style.backgroundSize = "contain";
    zipperTractor.style.top = "0";
    zipperTractor.style.right = "0";
    zipperTractor.style.width = "40px";
    zipperTractor.style.height = "50px";
    zipperTractor.style.transform = "rotate(90deg)";
    zipperTractor.style.zIndex = 3;
    zipperContainer.appendChild(zipperTractor);

    const zipperPully = document.createElement("div");
    zipperPully.style.position = "absolute";
    zipperPully.style.backgroundImage = "url(" + assetPath + "/pully.png)";
    zipperPully.style.backgroundRepeat = "no-repeat";
    zipperPully.style.backgroundSize = "40px 100px";
    zipperPully.style.backgroundPosition = "center bottom";
    zipperPully.style.top = "-78px";
    zipperPully.style.right = "25px";
    zipperPully.style.width = "40px";
    zipperPully.style.height = "200px";
    zipperPully.style.transform = "rotate(-45deg)";
    zipperPully.style.zIndex = 4;
    zipperContainer.appendChild(zipperPully);

    const zipperLoop = document.createElement("div");
    zipperLoop.style.position = "absolute";
    zipperLoop.style.backgroundImage = "url(" + assetPath + "/loop.png)";
    zipperLoop.style.backgroundRepeat = "no-repeat";
    zipperLoop.style.backgroundSize = "contain";
    zipperLoop.style.top = "7px";
    zipperLoop.style.right = "16px";
    zipperLoop.style.width = "10px";
    zipperLoop.style.height = "35px";
    zipperLoop.style.transform = "rotate(-90deg)";
    zipperLoop.style.zIndex = 5;
    zipperContainer.appendChild(zipperLoop);

    animationContainer.appendChild(zipperContainer);

    eyes.open(1000, 150);

    // Animation text

    animationTimeline.add({
      targets: copyTextContainer,
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 1000,
    });

    // Zipper container appears

    animationTimeline.add({
      targets: zipperContainer,
      right: 34,
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 250,
    });

    animationTimeline.add(
      {
        targets: zipperPully,
        keyframes: [
          {
            top: -87,
            right: 20,
            rotate: 25,
            duration: 400,
          },
          {
            top: -81,
            right: 25,
            rotate: -23,
            duration: 500,
          },
          {
            top: -83,
            right: 25,
            rotate: -7,
            duration: 600,
          },
        ],
        easing: "easeOutSine",
      },
      "-=100"
    );

    // blinkEyes(animation, 1000);
    eyes.suprised(1000, 1500);

    // // Pull the zipper

    animationTimeline.add(
      {
        targets: zipperContainer,
        right: 230,
        duration: 500,
        easing: "easeInOutQuad",
      },
      "-=1500"
    );

    animationTimeline.add(
      {
        targets: zipper,
        width: 224,
        easing: "easeInOutQuad",
        duration: 500,
      },
      "-=1500"
    );

    animationTimeline.add(
      {
        targets: zipperPully,
        keyframes: [
          {
            top: -75,
            right: 25,
            rotate: -55,
            duration: 400,
          },
          {
            top: -87,
            right: 20,
            rotate: 20,
            duration: 500,
          },
          {
            top: -81,
            right: 25,
            rotate: -23,
            duration: 500,
          },
          {
            top: -83,
            right: 25,
            rotate: -7,
            duration: 600,
          },
        ],
        easing: "easeOutSine",
      },
      "-=1500"
    );

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
