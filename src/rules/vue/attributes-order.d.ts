import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type AttributesOrderOption = {
  order?: any[];
  alphabetical?: boolean;
};

/**
 * Options.
 */
export type AttributesOrderOptions = [AttributesOrderOption?];

/**
 * Enforce order of attributes
 *
 * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
 */
export type AttributesOrderRuleConfig = RuleConfig<AttributesOrderOptions>;

/**
 * Enforce order of attributes
 *
 * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
 */
export interface AttributesOrderRule {
  /**
   * Enforce order of attributes
   *
   * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
   */
  'vue/attributes-order': AttributesOrderRuleConfig;
}