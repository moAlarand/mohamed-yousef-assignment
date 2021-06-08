import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {I18nManager} from 'react-native';
import {theme} from './theme';
import {Provider as PaperThemeProvider} from 'react-native-paper';
import {rootStore, persistor} from './store';
import {Provider} from 'react-redux';
import {RootNavigator} from './navigators';
import {PersistGate} from 'redux-persist/integration/react';
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export const App = () => {
  const [isLoaded, setIsloaded] = useState(false);

  useLayoutEffect(() => {
    (async () => {
      setIsloaded(true);
    })();
  }, []);

  useEffect(() => {}, []);

  return (
    <Provider store={rootStore}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperThemeProvider theme={theme}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            {isLoaded && <RootNavigator />}
          </SafeAreaProvider>
        </PaperThemeProvider>
      </PersistGate>
    </Provider>
  );
};
