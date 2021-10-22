module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'latest/tutorial/introduction',
        'latest/tutorial/quick-start',
        'latest/tutorial/installation',
        'latest/tutorial/process-model',
      ],
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        'latest/tutorial/examples',
        'latest/tutorial/dark-mode',
        'latest/tutorial/devices',
        'latest/tutorial/in-app-purchases',
        'latest/tutorial/keyboard-shortcuts',
        'latest/tutorial/launch-app-from-url-in-another-app',
        'latest/tutorial/linux-desktop-actions',
        'latest/tutorial/macos-dock',
        'latest/tutorial/message-ports',
        'latest/tutorial/multithreading',
        'latest/tutorial/native-file-drag-drop',
        'latest/tutorial/notifications',
        'latest/tutorial/offscreen-rendering',
        'latest/tutorial/online-offline-events',
        'latest/tutorial/progress-bar',
        'latest/tutorial/recent-documents',
        'latest/tutorial/represented-file',
        'latest/tutorial/spellchecker',
        'latest/tutorial/updates',
        'latest/tutorial/web-embeds',
        'latest/tutorial/windows-arm',
        'latest/tutorial/windows-taskbar',
        'latest/tutorial/tray',
      ],
    },
    {
      type: 'category',
      label: 'Developer Checklists',
      items: [
        'latest/tutorial/performance',
        'latest/tutorial/security',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'latest/tutorial/accessibility',
        'latest/tutorial/context-isolation',
        'latest/tutorial/fuses',
        'latest/tutorial/sandbox',
        'latest/tutorial/using-native-node-modules',
        'latest/development/creating-api',
      ],
    },
    {
      type: 'category',
      label: 'Distribution',
      items: [
        'latest/tutorial/application-distribution',
        'latest/tutorial/code-signing',
        'latest/tutorial/mac-app-store-submission-guide',
        'latest/tutorial/windows-store-guide',
        'latest/tutorial/snapcraft',
      ],
    },
    {
      type: 'category',
      label: 'Testing And Debugging',
      items: [
        'latest/tutorial/using-selenium-and-webdriver',
        'latest/tutorial/debugging-main-process',
        'latest/tutorial/debugging-vscode',
        'latest/tutorial/repl',
        'latest/tutorial/devtools-extension',
        'latest/tutorial/application-debugging',
        'latest/tutorial/automated-testing-with-a-custom-driver',
        'latest/tutorial/testing-on-headless-ci',
        'latest/tutorial/testing-widevine-cdm',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'latest/tutorial/boilerplates-and-clis',
        'latest/breaking-changes',
        'latest/tutorial/electron-timelines',
        'latest/tutorial/electron-versioning',
        'latest/faq',
        'latest/glossary',
        'latest/tutorial/support',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'latest/development/README',
        'latest/development/azure-vm-setup',
        'latest/development/build-instructions-gn',
        'latest/development/build-instructions-linux',
        'latest/development/build-instructions-macos',
        'latest/development/build-instructions-windows',
        'latest/development/build-system-overview',
        'latest/development/chromium-development',
        'latest/development/clang-format',
        'latest/development/clang-tidy',
        'latest/development/coding-style',
        'latest/development/debug-instructions-windows',
        'latest/development/debugging-instructions-macos',
        'latest/development/debugging-instructions-macos-xcode',
        'latest/development/goma',
        'latest/development/issues',
        'latest/development/patches',
        'latest/development/pull-requests',
        'latest/development/setting-up-symbol-server',
        'latest/development/source-code-directory-structure',
        'latest/development/testing',
        'latest/development/v8-development',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        'latest/tutorial/window-customization',
      ],
    },
  ],
  api: [
    {
      type: 'category',
      label: 'Main Process Modules',
      items: [
        'latest/api/app',
        'latest/api/auto-updater',
        'latest/api/browser-view',
        'latest/api/browser-window',
        'latest/api/clipboard',
        'latest/api/content-tracing',
        'latest/api/crash-reporter',
        'latest/api/desktop-capturer',
        'latest/api/dialog',
        'latest/api/global-shortcut',
        'latest/api/in-app-purchase',
        'latest/api/ipc-main',
        'latest/api/menu',
        'latest/api/message-channel-main',
        'latest/api/message-port-main',
        'latest/api/native-image',
        'latest/api/native-theme',
        'latest/api/net',
        'latest/api/net-log',
        'latest/api/notification',
        'latest/api/power-monitor',
        'latest/api/power-save-blocker',
        'latest/api/process',
        'latest/api/protocol',
        'latest/api/safe-storage',
        'latest/api/screen',
        'latest/api/session',
        'latest/api/share-menu',
        'latest/api/shell',
        'latest/api/system-preferences',
        'latest/api/touch-bar',
        'latest/api/tray',
        'latest/api/web-contents',
        'latest/api/web-frame-main',
      ],
    },
    {
      type: 'category',
      label: 'Renderer Process Modules',
      items: [
        'latest/api/clipboard',
        'latest/api/context-bridge',
        'latest/api/crash-reporter',
        'latest/api/desktop-capturer',
        'latest/api/ipc-renderer',
        'latest/api/native-image',
        'latest/api/web-frame',
      ],
    },
    {
      type: 'category',
      label: 'Custom DOM Elements',
      items: [
        'latest/api/browser-window-proxy',
        'latest/api/file-object',
        'latest/api/webview-tag',
        'latest/api/window-open',
      ],
    },
    {
      type: 'category',
      label: 'Chromium and Node.js',
      items: [
        'latest/api/command-line-switches',
        'latest/api/environment-variables',
        'latest/api/extensions',
      ],
    },
    {
      type: 'category',
      label: 'Classes',
      items: [
        'latest/api/client-request',
        'latest/api/command-line',
        'latest/api/cookies',
        'latest/api/debugger',
        'latest/api/dock',
        'latest/api/download-item',
        'latest/api/incoming-message',
        'latest/api/menu-item',
        'latest/api/service-workers',
        'latest/api/touch-bar-button',
        'latest/api/touch-bar-color-picker',
        'latest/api/touch-bar-group',
        'latest/api/touch-bar-label',
        'latest/api/touch-bar-other-items-proxy',
        'latest/api/touch-bar-popover',
        'latest/api/touch-bar-scrubber',
        'latest/api/touch-bar-segmented-control',
        'latest/api/touch-bar-slider',
        'latest/api/touch-bar-spacer',
        'latest/api/web-request',
      ],
    },
    {
      type: 'category',
      label: 'API Structures',
      items: [
        'latest/api/structures/bluetooth-device',
        'latest/api/structures/certificate',
        'latest/api/structures/certificate-principal',
        'latest/api/structures/cookie',
        'latest/api/structures/cpu-usage',
        'latest/api/structures/crash-report',
        'latest/api/structures/custom-scheme',
        'latest/api/structures/desktop-capturer-source',
        'latest/api/structures/display',
        'latest/api/structures/event',
        'latest/api/structures/extension',
        'latest/api/structures/extension-info',
        'latest/api/structures/file-filter',
        'latest/api/structures/file-path-with-headers',
        'latest/api/structures/gpu-feature-status',
        'latest/api/structures/hid-device',
        'latest/api/structures/input-event',
        'latest/api/structures/io-counters',
        'latest/api/structures/ipc-main-event',
        'latest/api/structures/ipc-main-invoke-event',
        'latest/api/structures/ipc-renderer-event',
        'latest/api/structures/jump-list-category',
        'latest/api/structures/jump-list-item',
        'latest/api/structures/keyboard-event',
        'latest/api/structures/keyboard-input-event',
        'latest/api/structures/memory-info',
        'latest/api/structures/memory-usage-details',
        'latest/api/structures/mime-typed-buffer',
        'latest/api/structures/mouse-input-event',
        'latest/api/structures/mouse-wheel-input-event',
        'latest/api/structures/new-window-web-contents-event',
        'latest/api/structures/notification-action',
        'latest/api/structures/notification-response',
        'latest/api/structures/point',
        'latest/api/structures/post-body',
        'latest/api/structures/printer-info',
        'latest/api/structures/process-memory-info',
        'latest/api/structures/process-metric',
        'latest/api/structures/product',
        'latest/api/structures/protocol-request',
        'latest/api/structures/protocol-response',
        'latest/api/structures/protocol-response-upload-data',
        'latest/api/structures/rectangle',
        'latest/api/structures/referrer',
        'latest/api/structures/scrubber-item',
        'latest/api/structures/segmented-control-segment',
        'latest/api/structures/serial-port',
        'latest/api/structures/service-worker-info',
        'latest/api/structures/shared-worker-info',
        'latest/api/structures/sharing-item',
        'latest/api/structures/shortcut-details',
        'latest/api/structures/size',
        'latest/api/structures/task',
        'latest/api/structures/thumbar-button',
        'latest/api/structures/trace-categories-and-options',
        'latest/api/structures/trace-config',
        'latest/api/structures/transaction',
        'latest/api/structures/upload-data',
        'latest/api/structures/upload-file',
        'latest/api/structures/upload-raw-data',
        'latest/api/structures/user-default-types',
        'latest/api/structures/web-request-filter',
        'latest/api/structures/web-source',
      ],
    },
  ],
};
