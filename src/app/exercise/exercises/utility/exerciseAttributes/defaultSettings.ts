import { ExerciseSettings } from '../../../exercise-logic';
import { SettingsConfig } from '../../../exercise-logic/settings-config';

export function defaultSettings<Settings extends ExerciseSettings>(
  defaultSettings: Settings,
): Pick<SettingsConfig<Settings>, 'defaults'> {
  return {
    defaults: defaultSettings,
  };
}
