/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
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
import '@testing-library/jest-dom/vitest';

import { faCircleExclamation, faCircleInfo, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { beforeAll, expect, test, vi } from 'vitest';

import type { NotificationCard } from '/@api/notification';

import NotificationCardItem from './NotificationCardItem.svelte';

const removeNotificationMock = vi.fn();

beforeAll(() => {
  Object.defineProperty(window, 'removeNotification', { value: removeNotificationMock });
});

test('Expect notification card to show notification title, description and close button', async () => {
  const notification: NotificationCard = {
    id: 1,
    extensionId: 'extension',
    title: 'title',
    body: 'description',
    type: 'info',
  };
  render(NotificationCardItem, {
    notification,
  });

  const titleDiv = screen.getByLabelText('Notification title');
  const descriptionDiv = screen.getByLabelText('Notification description');
  expect(titleDiv).toBeInTheDocument();
  expect(descriptionDiv).toBeInTheDocument();
  expect(titleDiv.textContent).toEqual('title');
  expect(descriptionDiv.textContent).toContain('description');

  const deleteButton = screen.getByRole('button', { name: 'Delete notification 1' });
  expect(deleteButton).toBeInTheDocument();
  expect(deleteButton).toHaveAttribute('title', 'Delete notification');

  await fireEvent.click(deleteButton);

  expect(removeNotificationMock).toBeCalled();
});

test('Test info notification style and icon', () => {
  const notification: NotificationCard = {
    id: 1,
    extensionId: 'extension',
    title: 'Info notification title',
    body: 'Info notification description',
    type: 'info',
  };
  const { getByTitle } = render(NotificationCardItem, {
    notification,
  });
  const iconTitle = getByTitle('Notification icon', { exact: false });
  const icon = iconTitle.parentElement;
  // check icon shape
  const pdIconPath = icon?.querySelector('path')?.getAttribute('d');
  const faIconPath = faCircleInfo.icon[4]; // index 4 is the actual path as per FA IconDefinition
  expect(pdIconPath).toBe(faIconPath);
  // check icon color
  expect(icon).toHaveClass('text-[var(--pd-state-info)]');
  // check icon title contains the text from nested title element
  expect(iconTitle.textContent).toBe('Notification icon - info');
  // check region top border
  expect(screen.getByRole('region', { name: 'id: 1' })).toHaveClass('border-[var(--pd-state-info)]');
});

test('Test warning notification style and icon', () => {
  const notification: NotificationCard = {
    id: 1,
    extensionId: 'extension',
    title: 'Warning notification title',
    body: 'Warning notification description',
    type: 'warn',
  };
  const { getByTitle } = render(NotificationCardItem, {
    notification,
  });
  const iconTitle = getByTitle('Notification icon', { exact: false });
  const icon = iconTitle.parentElement;
  // check icon shape
  const pdIconPath = icon?.querySelector('path')?.getAttribute('d');
  const faIconPath = faExclamationTriangle.icon[4]; // index 4 is the actual path as per FA IconDefinition
  expect(pdIconPath).toBe(faIconPath);
  // check icon color
  expect(icon).toHaveClass('text-[var(--pd-state-warning)]');
  // check icon title
  expect(iconTitle.textContent).toBe('Notification icon - warn');
  // check region top border
  expect(screen.getByRole('region', { name: 'id: 1' })).toHaveClass('border-[var(--pd-state-warning)]');
});

test('Test error notification style and icon', () => {
  const notification: NotificationCard = {
    id: 1,
    extensionId: 'extension',
    title: 'Error notification title',
    body: 'Error notification description',
    type: 'error',
  };
  const { getByTitle } = render(NotificationCardItem, {
    notification,
  });
  const iconTitle = getByTitle('Notification icon', { exact: false });
  const icon = iconTitle.parentElement;
  // check icon shape
  const pdIconPath = icon?.querySelector('path')?.getAttribute('d');
  const faIconPath = faCircleExclamation.icon[4]; // index 4 is the actual path as per FA IconDefinition
  expect(pdIconPath).toBe(faIconPath);
  // check icon color
  expect(icon).toHaveClass('text-[var(--pd-state-error)]');
  // check icon title
  expect(iconTitle.textContent).toBe('Notification icon - error');
  // check region top border
  expect(screen.getByRole('region', { name: 'id: 1' })).toHaveClass('border-[var(--pd-state-error)]');
});
