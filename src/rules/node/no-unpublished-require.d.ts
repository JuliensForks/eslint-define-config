import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnpublishedRequireOption {
  allowModules?: string[];
  convertPath?:
    | {
        /**
         * @minItems 2
         * @maxItems 2
         */
        [k: string]: [string, string];
      }
    | [
        {
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        },
        ...{
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        }[],
      ];
  resolvePaths?: string[];
  tryExtensions?: string[];
}

/**
 * Options.
 */
export type NoUnpublishedRequireOptions = [NoUnpublishedRequireOption?];

/**
 * Disallow `require()` expressions which import private modules.
 *
 * @see [no-unpublished-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-require.md)
 */
export type NoUnpublishedRequireRuleConfig =
  RuleConfig<NoUnpublishedRequireOptions>;

/**
 * Disallow `require()` expressions which import private modules.
 *
 * @see [no-unpublished-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-require.md)
 */
export interface NoUnpublishedRequireRule {
  /**
   * Disallow `require()` expressions which import private modules.
   *
   * @see [no-unpublished-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-require.md)
   */
  'node/no-unpublished-require': NoUnpublishedRequireRuleConfig;
}
