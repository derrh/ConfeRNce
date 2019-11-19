import {ReactTestInstance} from 'react-test-renderer';
import {NativeTestInstance} from '@testing-library/react-native';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeDisabled(): R;
      toContainElement(element: NativeTestInstance | null): R;
      toBeEmpty(): R;
      toHaveProp(attr: string, value?: any): R;
      toHaveTextContent(
        text: string | RegExp,
        options?: {normalizeWhitespace: boolean},
      ): R;
      toBeEnabled(): R;
      toHaveStyle(style: object[] | object): R;
    }
  }
}
