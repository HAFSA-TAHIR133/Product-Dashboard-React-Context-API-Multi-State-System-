import { activityProvider } from '../contexts/activityContext';
import { themeProvider } from './themeContext';
import { AuthnProvider } from './authContext';
import {productProvider} from './productContext'
import {newProductCountProvider} from './newProductCountContext'

const composeProviders =
  (...providers) =>
  ({ children }) => {
    return providers.reduceRight(
      (child, Provider) => <Provider>{child}</Provider>,
      children
    );
  };

const Providers = composeProviders(
  AuthnProvider,
  themeProvider,
  newProductCountProvider,
  activityProvider,
  productProvider

);

export default Providers;