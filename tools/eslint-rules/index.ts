import {
  RULE_NAME as noReactiveSelectSignalName,
  rule as noReactiveSelectSignal,
} from './rules/no-reactive-select-signal';

module.exports = {
  rules: { [noReactiveSelectSignalName]: noReactiveSelectSignal },
};
