import { Provider } from 'react-redux';
import type { PropsWithChildren } from 'react';
import { AppStore, setupStore } from '../store/store';
import { render, RenderOptions } from '@testing-library/react';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: AppStore
}

export const renderWithStore = (ui: React.ReactElement, {
  store = setupStore(),
  ...renderOptions
}: ExtendedRenderOptions = {}) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>
  }

  return render(ui, {wrapper: Wrapper, ...renderOptions})
}
