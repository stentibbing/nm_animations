window.addEventListener("load", () => {
  if (!!document.getElementById("strawberry-animation")) {
    //New animejs timeline, looping from 8500 to the end
    const animationTimeline = anime.timeline({
      autoplay: false,
      loop: true,
      loopComplete: function (animation) {
        animation.pause();
        animation.seek(5200);
        animation.play();
      },
    });

    // Select animation container
    const animationContainer = document.getElementById("strawberry-animation");

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
    copyTextContainer.style.opacity = 0;
    copyTextContainer.innerText = copyText;
    animationContainer.appendChild(copyTextContainer);

    const eyes = new Eyes({
      timeline: animationTimeline,
      initialState: "closed",
    });

    eyes.draw(svgContainer);
    animationContainer.appendChild(svgContainer);

    const mouthContainer = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );

    mouthContainer.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    mouthContainer.setAttribute("viewBox", "0 0 300 120");
    mouthContainer.setAttribute("height", "120");
    mouthContainer.setAttribute("width", "300");
    mouthContainer.style.position = "relative";
    mouthContainer.style.zIndex = 2;

    const mouth = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    mouth.setAttribute("d", "M 30 30 C 60 75, 240 75, 270 30");
    mouth.setAttribute("fill", "none");
    mouth.setAttribute("stroke", "#000");
    mouth.setAttribute("stroke-width", "32px");

    mouthContainer.appendChild(mouth);
    animationContainer.appendChild(mouthContainer);

    const strawberry = document.createElement("div");
    strawberry.style.position = "absolute";
    strawberry.style.backgroundImage = "url(" + assetPath + "/strawberrie.png)";
    strawberry.style.backgroundRepeat = "no-repeat";
    strawberry.style.backgroundSize = "contain";
    strawberry.style.backgroundPosition = "bottom center";
    strawberry.style.opacity = 0;
    strawberry.style.left = "50px";
    strawberry.style.top = "135px";
    strawberry.style.width = "20px";
    strawberry.style.height = "40px";
    strawberry.style.rotate = "-10deg";
    strawberry.style.zIndex = 1;

    animationContainer.appendChild(strawberry);

    eyes.open(1000, 150);

    // Animation text

    animationTimeline.add(
      {
        targets: copyTextContainer,
        opacity: 1,
        easing: "easeInOutQuad",
        duration: 1000,
      },
      "-=150"
    );

    animationTimeline.add(
      {
        targets: mouth,
        d: "M 50 40 C 80 70, 220 70, 250 40",
        easing: "easeInOutQuad",
        duration: 150,
        complete: () => {
          strawberry.style.opacity = 1;
        },
      },
      "-=1000"
    );

    animationTimeline.add({
      targets: strawberry,
      keyframes: [
        {
          height: "50px",
          width: "50px",
          left: "90px",
          rotate: "0",
          duration: 400,
        },
        {
          height: "55px",
          width: "55px",
          left: "110px",
          top: "130px",
          rotate: "5",
          duration: 250,
        },
        {
          height: "60px",
          width: "60px",
          left: "130px",
          top: "132px",
          rotate: "10",
          duration: 200,
        },
        {
          height: "55px",
          width: "55px",
          left: "150px",
          top: "135px",
          rotate: "15",
          duration: 150,
        },
        {
          height: "50px",
          width: "50px",
          left: "190px",
          top: "142px",
          rotate: "20",
          duration: 300,
        },
      ],
      easing: "linear",
      delay: 1000,
    });

    eyes.open(1000, 400);

    // // Looping animation

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
