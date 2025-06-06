<script lang="ts">
import '@xterm/xterm/css/xterm.css';

import { Spinner } from '@podman-desktop/ui-svelte';
import { FitAddon } from '@xterm/addon-fit';
import { Terminal } from '@xterm/xterm';
import { onDestroy, onMount } from 'svelte';

import type { CheckStatus, ProviderInfo } from '/@api/provider-info';

import { TerminalSettings } from '../../../../main/src/plugin/terminal-settings';
import { getTerminalTheme } from '../../../../main/src/plugin/terminal-theme';
import Steps from '../ui/Steps.svelte';
import PreflightChecks from './PreflightChecks.svelte';
import ProviderCard from './ProviderCard.svelte';
import {
  type InitializationContext,
  type InitializationMode,
  InitializationSteps,
  InitializeAndStartMode,
  InitializeOnlyMode,
} from './ProviderInitUtils';
import ProviderUpdateButton from './ProviderUpdateButton.svelte';

export let provider: ProviderInfo;
export let initializationContext: InitializationContext;

let initializationButtonVisible = true;
let initializeInProgress = false;

let initializeError: string | undefined = undefined;

let preflightChecks: CheckStatus[] = [];

let logsXtermDiv: HTMLDivElement;
let logsTerminal: Terminal;

// Terminal resize
let resizeObserver: ResizeObserver;
let termFit: FitAddon;
let installationOptionsMenuVisible = false;
let installationOptionSelected = InitializeAndStartMode;

// no initialize support, hide the button
$: initializationButtonVisible =
  provider.containerProviderConnectionInitialization || provider.kubernetesProviderConnectionInitialization;

function showLastExecutionError(): void {
  initializeError = initializationContext.error;
  logsTerminal?.write('Initialization failed. Please check the error below and try again' + '\r\n');
  logsTerminal?.write(initializeError + '\r');
}

async function initializeProvider(): Promise<void> {
  initializeError = undefined;
  logsTerminal.clear();
  initializeInProgress = true;
  initializationContext.promise = window.initializeProvider(provider.internalId);
  initializationContext.promise.catch((error: unknown) => {
    initializationContext.error = String(error);
    initializationButtonVisible = true;
    logsTerminal.write(error + '\r');
    console.error('Error while initializing the provider', error);
  });
  initializeInProgress = false;
}

async function refreshTerminal(): Promise<void> {
  // missing element, return
  if (!logsXtermDiv) {
    console.log('missing xterm div, exiting...');
    return;
  }
  // grab font size
  const fontSize = await window.getConfigurationValue<number>(
    TerminalSettings.SectionName + '.' + TerminalSettings.FontSize,
  );
  const lineHeight = await window.getConfigurationValue<number>(
    TerminalSettings.SectionName + '.' + TerminalSettings.LineHeight,
  );

  logsTerminal = new Terminal({
    fontSize,
    lineHeight,
    disableStdin: true,
    theme: getTerminalTheme(),
    convertEol: true,
  });
  termFit = new FitAddon();
  logsTerminal.loadAddon(termFit);

  logsTerminal.open(logsXtermDiv);
  // disable cursor
  logsTerminal.write('\x1b[?25l');

  // call fit addon each time we resize the window
  window.addEventListener('resize', () => {
    termFit.fit();
  });
  termFit.fit();
}

onMount(async () => {
  // Refresh the terminal on initial load
  await refreshTerminal();
  // show error if last execution failed
  showLastExecutionError();

  // Resize the terminal each time we change the div size
  resizeObserver = new ResizeObserver(() => {
    termFit?.fit();
  });

  // Observe the terminal div
  resizeObserver.observe(logsXtermDiv);
});

onDestroy(() => {
  // Cleanup the observer on destroy
  resizeObserver?.unobserve(logsXtermDiv);
});

function updateOptionsMenu(visible: boolean): void {
  installationOptionsMenuVisible = visible;
}

async function onInstallationClick(): Promise<void> {
  initializeInProgress = true;
  initializationButtonVisible = false;
  initializationContext.mode = installationOptionSelected as InitializationMode;
  await initializeProvider();
}
</script>

<ProviderCard provider={provider}>
  <svelte:fragment slot="content">
    <p class="text-sm text-[var(--pd-content-text)] w-2/3 text-center" aria-label="Suggested Actions">
      To start working with containers, {provider.name} needs to be initialized.
    </p>

    <div class="min-w-[230px] w-1/3 flex justify-center" class:hidden={!initializationButtonVisible}>
      <div class="w-[212px] relative">
        <div class="bg-[var(--pd-invert-content-card-bg)] text-[var(--pd-button-text)] flex w-[212px]">
          <button
            class="float-left bg-[var(--pd-button-primary-bg)] hover:bg-[var(--pd-button-primary-hover-bg)] pt-2 pr-3 pl-3 pb-2 text-[13px] text-[var(--pd-button-text)] mr-px w-[180px]"
            on:click={onInstallationClick}>
            {installationOptionSelected}
          </button>
          <button
            class="inline-block bg-[var(--pd-button-primary-bg)] hover:bg-[var(--pd-button-primary-hover-bg)] text-[13px] text-[var(--pd-button-text)] pt-2 pr-3 pl-3 pb-2 w-[32px]"
            aria-label="Installation options menu"
            on:click={(): void => updateOptionsMenu(!installationOptionsMenuVisible)}>
            <i class="fas fa-caret-down"></i>
          </button>
        </div>
        <div
          class="z-10 min-w-[130px] m-auto bg-primary text-[13px] text-[var(--pd-button-text)] absolute w-full"
          class:hidden={!installationOptionsMenuVisible}>
          <ul class="w-full outline-hidden bg-[var(--pd-dropdown-bg)] rounded-xs placeholder-[var(--pd-content-text)]">
            <li>
              <button
                class="w-full p-2 bg-[var(--pd-button-primary-bg)] text-[var(--pd-button-text)] hover:bg-[var(--pd-button-primary-hover-bg)] cursor-pointer"
                on:click={(): void => {
                  installationOptionSelected = InitializeOnlyMode;
                  installationOptionsMenuVisible = false;
                }}>
                {InitializeOnlyMode}
                {provider.name}
              </button>
            </li>
            <li>
              <button
                class="w-full p-2 bg-[var(--pd-button-primary-bg)] text-[var(--pd-button-text)] hover:bg-[var(--pd-button-primary-hover-bg)] cursor-pointer"
                on:click={(): void => {
                  installationOptionSelected = InitializeAndStartMode;
                  installationOptionsMenuVisible = false;
                }}>
                {InitializeAndStartMode}
                {provider.name}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full lg:w-2/3 justify-center items-center" class:hidden={!initializeInProgress}>
      {#if installationOptionSelected === InitializeAndStartMode}
        <Steps steps={InitializationSteps} />
      {/if}
      <div class="flex flex-col text-[var(--pd-content-text)]">
        <div>Initializing</div>
        <div class="my-2">
          <Spinner />
        </div>
      </div>
    </div>

    <div
      class="bg-[var(--pd-terminal-background)] p-[5px] pr-0"
      style="width: 100%; text-align: left; display: {initializeError ? 'block' : 'none'}"
      bind:this={logsXtermDiv}>
    </div>

    <PreflightChecks preflightChecks={preflightChecks} />
  </svelte:fragment>
  <svelte:fragment slot="update">
    {#if provider.updateInfo?.version && provider.version !== provider.updateInfo?.version}
      <ProviderUpdateButton onPreflightChecks={(checks): CheckStatus[] => (preflightChecks = checks)} provider={provider} />
    {/if}
  </svelte:fragment>
</ProviderCard>
