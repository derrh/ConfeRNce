global.navigator = () => null;
jest.mock('react-native-device-info', () => {
  return {
    getUniqueID: jest.fn(),
  };
});
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    State: {},
    PanGestureHandler: View,
    BaseButton: View,
    Directions: {},
  };
});
