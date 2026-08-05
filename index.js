import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
if (Platform.OS === 'web' && typeof document !== 'undefined') {
  document.documentElement.lang = 'pt-br';
}
registerRootComponent(App);
