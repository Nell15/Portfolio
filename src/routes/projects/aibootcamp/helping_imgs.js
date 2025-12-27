import { base } from '$app/paths'

export const helping_imgs = [
  {
    src: `${base}/img/projects/AIBootcamp/helping_1.png`,
    alt: 'In this case, both agent are needing each other to access a goal tile.'
  },
  {
    src: `${base}/img/projects/AIBootcamp/helping_2.png`,
    alt: 'After some exploration, one lands on a pressure plate, so its starts helping the other, which is represented by the handshake on this picture.'
  },
  {
    src: `${base}/img/projects/AIBootcamp/helping_3.png`,
    alt: "Thanks to the first agent opening the door, the second agent saw a reachable goal tile in front of them and entered the Seeking state and started walking towards said goal. After traversing the door, its path does not go through the door again, so the agent at the top has no reason to continue helping the second one and can go back to its previous state."
  }
];
