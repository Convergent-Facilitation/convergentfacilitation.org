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
    title: translate({
      message: 'Welcome Dissent',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/website-feature-welcome-dissent-blue.png',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        How often in our daily lives do we manage to talk about things 
        that matter a lot and not end up in an argument? In a Convergent Facilitation process, 
        we have rich and complex conversations and we stay together.</Translate>
    ),
  },
  {
    title: translate({
      message: 'Resolve the Crisis of Imagination',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/website-feature-resolve-crisis-of-imagination-green.png',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        How often do we experience hope that another world is indeed possible? Convergent Facilitation reconnects us with our innate and time immemorial capacity to resolve complex problems in partnership with life.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Regain faith in humanity',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/website-feature-regain-faith-red.png',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        We meet for several meetings, engage in deep conversation, laugh and listen to each other intently, hold difficult dilemmas together and sometimes even tie bounds of friendship with people we never knew we could have a conversation with.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Attend to Power Differences',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/website-feature-power-differences-purple.png',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Convergent Facilitation is rigourous, can take time and asks for significant commitment on the part of participants and facilitators. When we land on a solution that works for everyone however, there can be immense satisfaction to have resolved a complex puzzle together.
      </Translate>
    ),
  },
  {
    title: translate({
      message: "Build Confidence",
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/website-feature-build-confidence.png',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        When we experience that our contribution is important regardless where we are placed on the “map of power”, we regain confidence in our ability to influence decisions that impact us, and in humanity’s capacity to manage its affairs for the benefits of the whole.
      </Translate>
    ),
  },
];


export default FEATURES;
