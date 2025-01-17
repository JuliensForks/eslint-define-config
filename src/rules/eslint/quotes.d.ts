import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type QuotesConfig =
  | 'avoid-escape'
  | {
      avoidEscape?: boolean;
      allowTemplateLiterals?: boolean;
    };

/**
 * Option.
 */
export type QuotesOption = 'single' | 'double' | 'backtick';

/**
 * Options.
 */
export type QuotesOptions = [QuotesOption?, QuotesConfig?];

/**
 * Enforce the consistent use of either backticks, double, or single quotes.
 *
 * @see [quotes](https://eslint.org/docs/rules/quotes)
 */
export type QuotesRuleConfig = RuleConfig<QuotesOptions>;

/**
 * Enforce the consistent use of either backticks, double, or single quotes.
 *
 * @see [quotes](https://eslint.org/docs/rules/quotes)
 */
export interface QuotesRule {
  /**
   * Enforce the consistent use of either backticks, double, or single quotes.
   *
   * @see [quotes](https://eslint.org/docs/rules/quotes)
   */
  quotes: QuotesRuleConfig;
}
