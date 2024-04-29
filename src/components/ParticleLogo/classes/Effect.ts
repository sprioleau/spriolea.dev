import Particle from "./Particle";

export default class Effect {
  width: number;
  height: number;
  image: HTMLImageElement;
  centerX: number;
  centerY: number;
  x: number;
  y: number;
  gap: number;
  particles: Particle[];
  mouse: {
    radius: number;
    x: number;
    y: number;
  };

  constructor({ width, height, image }: { width: number; height: number; image: HTMLImageElement }) {
    this.width = width;
    this.height = height;
    this.image = image;
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
    this.x = this.centerX - this.image.width / 2;
    this.y = this.centerY - this.image.height / 2;
    this.particles = [];
    this.gap = 6;
    this.mouse = {
      radius: 4000,
      x: 0,
      y: 0,
    };

    window.addEventListener("mousemove", (event) => {
      this.mouse.x = event.x;
      this.mouse.y = event.y;
    });

    window.addEventListener(
      "touchstart",
      (event) => {
        this.mouse.x = event.changedTouches[0].clientX;
        this.mouse.y = event.changedTouches[0].clientY;
      },
      false
    );

    window.addEventListener(
      "touchmove",
      (event) => {
        event.preventDefault();
        this.mouse.x = event.targetTouches[0].clientX;
        this.mouse.y = event.targetTouches[0].clientY;
      },
      false
    );

    window.addEventListener(
      "touchend",
      (event) => {
        event.preventDefault();
        this.mouse.x = 0;
        this.mouse.y = 0;
      },
      false
    );
  }

  init(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, this.x, this.y);
    var pixels = context.getImageData(0, 0, this.width, this.height).data;
    var index;
    for (var y = 0; y < this.height; y += this.gap) {
      for (var x = 0; x < this.width; x += this.gap) {
        index = (y * this.width + x) * 4;
        if (pixels[++index] > 0) {
          this.particles.push(new Particle(this, x, y));
        }
      }
    }
    context.clearRect(0, 0, this.width, this.height);
  }

  update() {
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
    }
  }

  render(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, this.width, this.height);
    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      context.fillStyle = p.color;
      context.fillRect(p.x, p.y, p.size, p.size);
    }
  }
}
