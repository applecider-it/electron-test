const { setupReload } = require('./system');
const { setupWindow } = require('./window');
const { setupAction } = require('./action');

setupReload();

setupAction();

setupWindow();
