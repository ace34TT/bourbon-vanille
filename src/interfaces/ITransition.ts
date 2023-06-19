export interface ITransition {
  section: string;

  model: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
}
export const transitions: ITransition[] = [
  {
    section: "section-1",
    model: {
      position: [0.75, -0.6, -0.5],
      rotation: [0.003, 0.651, -3.13],
    },
  },
  {
    section: "section-2",
    model: {
      position: [-0.75, -0.3, -0],
      rotation: [Math.PI / 12, Math.PI / 6, -2.75],
    },
  },
  {
    section: "section-3",
    model: {
      position: [-0.9, 0.5, -0.5],
      rotation: [Math.PI / 4, Math.PI / 4, -3.5],
    },
  },
  {
    section: "section-4",
    model: {
      position: [-0.25, 0.5, -0.5],
      rotation: [Math.PI / 4, Math.PI / 4, -3.5],
    },
  },
  {
    section: "section-5",
    model: {
      position: [-0.25, 0.5, -0.5],
      rotation: [Math.PI / 2, Math.PI / 4, -3.5],
    },
  },
];
