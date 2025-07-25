/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { expect, test } from 'vitest';

import { isFontAwesomeIcon, isFontAwesomeSize } from './icon-utils';

test('ensure fas prefix is recognized', () => {
  expect(isFontAwesomeIcon(faTrash)).toBeTruthy();
});

test('ensure fab prefix is recognized', () => {
  expect(isFontAwesomeIcon(faGithub)).toBeTruthy();
});

test('ensure fontawesome size is recognized', () => {
  expect(isFontAwesomeSize('xs')).toBeTruthy();
  expect(isFontAwesomeSize('1x')).toBeTruthy();
  expect(isFontAwesomeSize('4.2x')).toBeTruthy();
});
