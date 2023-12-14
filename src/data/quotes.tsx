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
    text: 'The state agencies that initiated the process sent representatives who took part in all our meetings. It was a game changer to have them committed so thoroughly. It made it real for all stakeholders. I bet each person thought, “I am going to invest my time in this, this is going to make an impact”.'
  },
  {
    thumbnail: require('./quotes/vanda.png'),
    name: '',
    title: '',
    text: 'Believe it or not, as soon as we started meeting, we had fun. Parents, staff and board members didn’t experience the decision process as a debate - no one tried to convince anyone else - and our discussions didn’t feel interminable endless. The main shift happened when we discovered we could integrate two pathways we thought as opposite initially. We could merge them into a parallel and complementary model that works beautifully.'
  },
  {
    thumbnail: require('./quotes/katy-mamen.png'),
    name: '',
    title: '',
    text: 'I came up against a lot of intense power struggles when I was an activist. Instead, what I witnessed in this process was completely different: people representing different parts of the system accepted to come and stayed together across real differences, went to the heart of thorny issues, and came out at the other end with realistic, durable and robust strategies.'
  },
];

export default QUOTES;
