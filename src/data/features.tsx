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
    text: "We leave no stone unturned to discover and capture what's important to all stakeholders in the decision. This creates a solid foundation to explore all sorts of creative solutions."
  },
  {
    title: 'We aim for zero waste',
    image: {
      src: '/img/website-feature-resolve-crisis-of-imagination-green.png',
    },
    text: "We have all and only the necessary discussions, hearing every need, but not every voice. This enables us to capture all that is important to everyone without draining the group’s energy when people repeat what’s already been said."
  },
  {
    title: "We never settle for compromise",
    image: {
      src: '/img/website-feature-regain-faith-red.png',
    },
    text: 'We know that when people compromise an agreement is more likely to be broken later. We never push anyone to agree to anything. We invite dissent to know more of what’s important and then we keep integrating what we hear until we are done. Then everyone is on board.',
  },
  {
    title: 'We aim for solutions that work for the most powerful and the least powerful', 
    image: {
      src: '/img/website-feature-power-differences-purple.png',
    },
    text: "We go through great efforts to bring in, hear and integrate all that matters to all stakeholders across power differences. Without those with the most power, agreements might just not be implemented. Without those with the least power, agreements might simply not work. We know that this is a key condition for a practical, sustainable and implementable outcome.",
  },
  {
    title: 'We create conditions to make shifts possible', 
    image: {
      src: '/img/website-feature-build-confidence.png',
    },
    text: "We don’t expect people to change their position or values, because it’s not necessary for them to agree on specific solutions. All we aim for is to make it possible for people to trust that everyone cares about what matters to them, to see that there are deep principles they all care about regardless of their differences, and to be supported in seeing and caring about what matters to others. This combination is what moves people to orient to the whole. Then they can shift to see that this or that proposal isn’t actually threatening anything that matters to them."
  },
];


export default FEATURES;
