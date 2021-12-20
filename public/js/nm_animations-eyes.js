const Eyes = class {
  constructor(args) {
    this.timeline = args.timeline;
    this.initialState = args.initialState;
    this.targets = {
      leftEyeTop: document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      ),
      leftEyeBottom: document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      ),
      rightEyeTop: document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      ),
      rightEyeBottom: document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      ),
    };
  }

  state = {
    open: {
      leftEyeTop: "M 59 60 C 59 14, 129 14, 129 60",
      leftEyeBottom: "M 59 60 C 59 106, 129 106, 129 60",
      rightEyeTop: "M 171 60 C 171 14, 241 14, 241 60",
      rightEyeBottom: "M 171 60 C 171 106, 241 106, 241 60",
      strokeWidth: "26px",
    },
    closed: {
      leftEyeTop: "M 59 60 C 59 55, 129 55, 129 60",
      leftEyeBottom: "M 59 60 C 59 65, 129 65, 129 60",
      rightEyeTop: "M 171 60 C 171 55, 241 55, 241 60",
      rightEyeBottom: "M 171 60 C 171 65, 241 65, 241 60",
      strokeWidth: "26px",
    },
    suprised: {
      leftEyeTop: "M 64 60 C 64 19, 124 19, 124 60",
      leftEyeBottom: "M 64 60 C 64 100, 124 100, 124 60",
      rightEyeTop: "M 176 60 C 176 19, 237 19, 237 60",
      rightEyeBottom: "M 176 60 C 176 101, 237 101, 237 60",
      strokeWidth: "36px",
    },
    angry: {
      leftEyeTop: "M 59 60 C 59 14, 129 54, 129 60",
      leftEyeBottom: "M 59 60 C 59 106, 129 106, 129 60",
      rightEyeTop: "M 171 60 C 171 54, 241 14, 241 60",
      rightEyeBottom: "M 171 60 C 171 106, 241 106, 241 60",
      strokeWidth: "26px",
    },
    sad: {
      leftEyeTop: "M 59 60 C 59 54, 129 14, 129 60",
      leftEyeBottom: "M 59 60 C 59 106, 129 106, 129 60",
      rightEyeTop: "M 171 60 C 171 14, 241 54, 241 60",
      rightEyeBottom: "M 171 60 C 171 106, 241 106, 241 60",
      strokeWidth: "26px",
    },
  };

  draw = (container) => {
    for (let target in this.targets) {
      this.targets[target].setAttribute(
        "d",
        this.state[this.initialState][target]
      );
      this.targets[target].setAttribute("fill", "none");
      this.targets[target].setAttribute("stroke", "#000");
      this.targets[target].setAttribute(
        "stroke-width",
        this.state[this.initialState].strokeWidth
      );
      container.appendChild(this.targets[target]);
    }
  };

  open = (delay = 0, duration = 150) => {
    this.timeline.add({
      targets: this.targets.leftEyeTop,
      d: this.state.open.leftEyeTop,
      strokeWidth: this.state.open.strokeWidth,
      easing: "easeOutSine",
      delay: delay,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.leftEyeBottom,
        d: this.state.open.leftEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeTop,
        d: this.state.open.rightEyeTop,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeBottom,
        d: this.state.open.rightEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
  };

  close = (delay = 0, duration = 150) => {
    this.timeline.add({
      targets: this.targets.leftEyeTop,
      d: this.state.closed.leftEyeTop,
      strokeWidth: this.state.closed.strokeWidth,
      easing: "easeOutSine",
      delay: delay,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.leftEyeBottom,
        d: this.state.closed.leftEyeBottom,
        strokeWidth: this.state.closed.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeTop,
        d: this.state.closed.rightEyeTop,
        strokeWidth: this.state.closed.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeBottom,
        d: this.state.closed.rightEyeBottom,
        strokeWidth: this.state.closed.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
  };

  suprised = (delay, duration) => {
    this.timeline.add({
      targets: this.targets.leftEyeTop,
      d: this.state.suprised.leftEyeTop,
      strokeWidth: this.state.suprised.strokeWidth,
      easing: "easeOutElastic(1, .8)",
      delay: delay,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.leftEyeBottom,
        d: this.state.suprised.leftEyeBottom,
        strokeWidth: this.state.suprised.strokeWidth,
        easing: "easeOutElastic(1, .8)",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeTop,
        d: this.state.suprised.rightEyeTop,
        strokeWidth: this.state.suprised.strokeWidth,
        easing: "easeOutElastic(1, .8)",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeBottom,
        d: this.state.suprised.rightEyeBottom,
        strokeWidth: this.state.suprised.strokeWidth,
        easing: "easeOutElastic(1, .8)",
        duration: duration,
      },
      "-=" + duration
    );
  };

  sleepy = (delay = 0, duration = 150) => {
    this.timeline.add({
      targets: this.targets.leftEyeTop,
      d: this.state.closed.leftEyeTop,
      strokeWidth: this.state.closed.strokeWidth,
      easing: "easeOutSine",
      delay: delay,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.leftEyeBottom,
        d: this.state.open.leftEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeTop,
        d: this.state.closed.rightEyeTop,
        strokeWidth: this.state.closed.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeBottom,
        d: this.state.open.rightEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
  };

  happy = (delay = 0, duration = 150) => {
    this.timeline.add({
      targets: this.targets.leftEyeTop,
      d: this.state.open.leftEyeTop,
      strokeWidth: this.state.open.strokeWidth,
      easing: "easeOutSine",
      delay: delay,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.leftEyeBottom,
        d: this.state.closed.leftEyeBottom,
        strokeWidth: this.state.closed.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeTop,
        d: this.state.open.rightEyeTop,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeBottom,
        d: this.state.closed.rightEyeBottom,
        strokeWidth: this.state.closed.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
  };

  sad = (delay = 0, duration = 150) => {
    this.timeline.add({
      targets: this.targets.leftEyeTop,
      d: this.state.sad.leftEyeTop,
      strokeWidth: this.state.sad.strokeWidth,
      easing: "easeOutSine",
      delay: delay,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.leftEyeBottom,
        d: this.state.open.leftEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeTop,
        d: this.state.sad.rightEyeTop,
        strokeWidth: this.state.sad.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeBottom,
        d: this.state.open.rightEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
  };

  angry = (delay = 0, duration = 150) => {
    this.timeline.add({
      targets: this.targets.leftEyeTop,
      d: this.state.angry.leftEyeTop,
      strokeWidth: this.state.angry.strokeWidth,
      easing: "easeOutSine",
      delay: delay,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.leftEyeBottom,
        d: this.state.open.leftEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeTop,
        d: this.state.angry.rightEyeTop,
        strokeWidth: this.state.angry.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeBottom,
        d: this.state.open.rightEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
  };

  blink = (delay) => {
    this.timeline.add({
      targets: this.targets.leftEyeTop,
      keyframes: [
        { d: this.state.closed.leftEyeTop },
        { d: this.state.open.leftEyeTop },
      ],
      easing: "easeOutSine",
      delay: delay,
      duration: 300,
    });

    this.timeline.add(
      {
        targets: this.targets.leftEyeBottom,
        keyframes: [
          { d: this.state.closed.leftEyeBottom },
          { d: this.state.open.leftEyeBottom },
        ],
        easing: "easeOutSine",
        duration: 300,
      },
      "-=300"
    );

    this.timeline.add(
      {
        targets: this.targets.rightEyeTop,
        keyframes: [
          { d: this.state.closed.rightEyeTop },
          { d: this.state.open.rightEyeTop },
        ],
        easing: "easeOutSine",
        duration: 300,
      },
      "-=300"
    );

    this.timeline.add(
      {
        targets: this.targets.rightEyeBottom,
        keyframes: [
          { d: this.state.closed.rightEyeBottom },
          { d: this.state.open.rightEyeBottom },
        ],
        easing: "easeOutSine",
        duration: 300,
      },
      "-=300"
    );
  };

  openLeft = (delay = 0, duration = 150) => {
    this.timeline.add({
      targets: this.targets.leftEyeTop,
      d: this.state.open.leftEyeTop,
      strokeWidth: this.state.open.strokeWidth,
      easing: "easeOutSine",
      delay: delay,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.leftEyeBottom,
        d: this.state.open.leftEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
  };

  openRight = (delay = 0, duration = 150) => {
    this.timeline.add(
      {
        targets: this.targets.rightEyeTop,
        d: this.state.open.rightEyeTop,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        delay: delay,
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add(
      {
        targets: this.targets.rightEyeBottom,
        d: this.state.open.rightEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
  };

  winkLeft = (delay = 0, duration = 150, hold = 500) => {
    this.timeline.add({
      targets: this.targets.leftEyeTop,
      d: this.state.closed.leftEyeTop,
      strokeWidth: this.state.closed.strokeWidth,
      easing: "easeOutSine",
      delay: delay,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.leftEyeBottom,
        d: this.state.closed.leftEyeBottom,
        strokeWidth: this.state.closed.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add({
      targets: this.targets.leftEyeTop,
      d: this.state.open.leftEyeTop,
      strokeWidth: this.state.open.strokeWidth,
      easing: "easeOutSine",
      delay: hold,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.leftEyeBottom,
        d: this.state.open.leftEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
  };

  winkRight = (delay = 0, duration = 150, hold = 500) => {
    this.timeline.add({
      targets: this.targets.rightEyeTop,
      d: this.state.closed.rightEyeTop,
      strokeWidth: this.state.closed.strokeWidth,
      easing: "easeOutSine",
      delay: delay,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.rightEyeBottom,
        d: this.state.closed.rightEyeBottom,
        strokeWidth: this.state.closed.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
    this.timeline.add({
      targets: this.targets.rightEyeTop,
      d: this.state.open.rightEyeTop,
      strokeWidth: this.state.open.strokeWidth,
      easing: "easeOutSine",
      delay: hold,
      duration: duration,
    });
    this.timeline.add(
      {
        targets: this.targets.rightEyeBottom,
        d: this.state.open.rightEyeBottom,
        strokeWidth: this.state.open.strokeWidth,
        easing: "easeOutSine",
        duration: duration,
      },
      "-=" + duration
    );
  };

  peekRight = (delay = 0, duration = 150, hold = 500) => {
    this.timeline.add({
      targets: this.targets.rightEyeTop,
      d: this.state.open.rightEyeTop,
      strokeWidth: this.state.open.strokeWidth,
      easing: "easeOutSine",
      delay: delay,
      duration: duration,
    });
    this.timeline.add({
      targets: this.targets.rightEyeTop,
      d: this.state.closed.rightEyeTop,
      strokeWidth: this.state.closed.strokeWidth,
      easing: "easeOutSine",
      delay: hold,
      duration: duration,
    });
  };
};
