import { registerRootComponent } from "expo";

import {
  ImageCpn,
  FlexCpn,
  InputCpn,
  TouchesCpn,
  ScrollViewCpn,
  FlatListCpn,
  ModalCpn,
  SectionListCpn,
  LifeCycleCpn
} from "./components";

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(LifeCycleCpn);
