import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ImportsFirstOption = 'absolute-first' | 'disable-absolute-first';

/**
 * Options.
 */
export type ImportsFirstOptions = [ImportsFirstOption?];

/**
 *
 *
 * @deprecated
 *
 * @see [imports-first](https://github.com/import-js/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)
 */
export type ImportsFirstRuleConfig = RuleConfig<ImportsFirstOptions>;

/**
 *
 *
 * @deprecated
 *
 * @see [imports-first](https://github.com/import-js/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)
 */
export interface ImportsFirstRule {
  /**
   *
   *
   * @deprecated
   *
   * @see [imports-first](https://github.com/import-js/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)
   */
  'import/imports-first': ImportsFirstRuleConfig;
}
