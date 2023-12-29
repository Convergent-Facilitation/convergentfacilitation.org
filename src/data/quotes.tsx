/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: require('./quotes/tim-mahoney.png'),
    name: '',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: '',
      description: 'Title of quote of Christopher Chedeau on the home page',
    }),
    text: 'I really had no interest nor any belief that this process would actually do anything. However, the trust that it built was quite amazing to me. I wouldn’t have believed it was possible, but we achieved more collaboratively than we were able to do as adversaries.” There was a moment when it became apparent to me that people had become problem-solvers rather than position-staters.'
  },
  {
    thumbnail: require('./quotes/aimee_ryan.png'),
    name: '',
     title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: '',
      description: '',
    }),
    text: 'At some point, we hit a really tough ‘content-based’ challenge. It became clear that it was ‘THE’ issue. If we didn’t crack it, we wouldn’t reach consensus on the overall project. The field didn’t need another paper on so and so’s opinion about various solutions. We were here to figure out a frame that held them all, and we eventually succeeded. '
  },
  {
    thumbnail: require('./quotes/vanda.png'),
    name: '',
    title: '',
    text: 'As soon as we started meeting, we had fun. Parents, staff and board members didn’t experience the decision process as a debate - no one tried to convince anyone else - and our discussions didn’t feel endless. The main shift happened when we discovered we could integrate two pathways we initially thought of as opposite. We could merge them into a parallel and complementary model that works beautifully.'
  },
  {
    thumbnail: require('./quotes/katy-mamen.png'),
    name: '',
    title: '',
    text: 'I came up against a lot of intense power struggles when I was an activist. Instead, what I witnessed in this process was completely different: people representing different parts of the system accepted to come and stayed together across real differences, went to the heart of thorny issues, and came out at the other end with realistic, durable and robust strategies.'
  },
];

export default QUOTES;
