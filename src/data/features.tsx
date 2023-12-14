/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};







const FEATURES: FeatureItem[] = [

  {
    title: 'Everything that matters is included',
    image: { src: '/img/website-feature-welcome-dissent-blue.png'},
    text: "We leave no stone unturned to discover and capture what's important to all stakeholders in the decision. This creates a solid foundation to explore all sorts of creative solutions and come to a decision that no one thought was possible at the start of the process."
  },
  {
    title: 'Aiming for zero waste',
    image: {
      src: '/img/website-feature-resolve-crisis-of-imagination-green.png',
    },
    text: 'We hear every need but not every voice, and have all and only the necessary discussions—hearing every need, but not every voice. This enables us to capture all that is important to everyone without draining the group’s energy, and creates conditions for innovation to flow.'
  },
  {
    title: 'Never settling for compromise',
    image: {
      src: '/img/website-feature-regain-faith-red.png',
    },
    text: 'We look deep enough to find pathways for integration rather than compromise. We see compromise as stretching everyone beyond true willingness and often resulting in half-baked or unsustainable solutions. Instead, wWe invite and integrate dissent because we know it will create a more  robust outcome without pushing anyone for agreement.',
  },
  {
    title: 'Solutions that work for the most powerful and least powerful', 
    image: {
      src: '/img/website-feature-power-differences-purple.png',
    },
    text: 'We go through great efforts to bring in, hear and integrate all that matters to all stakeholders across power differences. We know that this is a key condition for a practical, sustainable and implementable outcome.',
  },
  {
    title: 'Conditions that make shifts possible', 
    image: {
      src: '/img/website-feature-build-confidence.png',
    },
    text: "When people trust that their needs matter, they can more easily hear other people's needs without a sense of pressure to agree. They also find in themselves the willingness to adopt solutions that they recognise will work for everyone even if it’s not their preference."
  },
];


export default FEATURES;
