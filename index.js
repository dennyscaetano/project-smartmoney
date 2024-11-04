/**
 * @format
 */

// if (__DEV__) {
//   import('./config/ReactotronConfig');
// }

import {AppRegistry, YellowBox} from 'react-native';
import App from './src';
import Main from './src/pages/Main';
import NewEntry from './src/pages/NewEntry';
import {name as appName} from './app.json';

// Remover warning relacionado ao Async Storage
YellowBox.ignoreWarnings([
  'Warning: Async Storage has been extracted from react-native core',
]);

AppRegistry.registerComponent(appName, () => NewEntry);
