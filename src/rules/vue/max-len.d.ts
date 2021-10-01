import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type MaxLenConfig = any;

/**
 * Option.
 */
export type MaxLenOption = any;

/**
 * Options.
 */
export type MaxLenOptions = [MaxLenOption?, MaxLenConfig?];

/**
 * Enforce a maximum line length
 *
 * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
 */
export type MaxLenRuleConfig = RuleConfig<MaxLenOptions>;

/**
 * Enforce a maximum line length
 *
 * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
 */
export interface MaxLenRule {
  /**
   * Enforce a maximum line length
   *
   * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
   */
  'vue/max-len': MaxLenRuleConfig;
}