import Spike from '../resources/spike';
import Brick from '../resources/brick';

export default {
  spikes: [
    new Spike(100),
    new Spike(300),
    new Spike(500),
    new Spike(700),
  ],

  bricks: [
    new Brick(),
    new Brick(100, 200),
    new Brick(200, 100),
    new Brick(375, 100),
  ],
};