// @flow
import type { SettingsType } from '../reducers/settings';
import type { Action, ThunkAction } from './actions.types';
import { requestTickerUpdate } from './ticker';

function saveSettings(settings: SettingsType): Action {
  return {
    type: 'SAVE_SETTINGS',
    settings,
  };
}

export function saveSettingsAndUpdateTicker(settings: SettingsType): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(saveSettings(settings));
    dispatch(requestTickerUpdate([], settings.fiatCurrency, settings.cryptoCurrency));
  };
}
