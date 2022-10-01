import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnpublishedBinOption {
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
  [k: string]: any;
}

/**
 * Options.
 */
export type NoUnpublishedBinOptions = [NoUnpublishedBinOption?];

/**
 * Disallow `bin` files that npm ignores.
 *
 * @see [no-unpublished-bin](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-unpublished-bin.md)
 */
export type NoUnpublishedBinRuleConfig = RuleConfig<NoUnpublishedBinOptions>;

/**
 * Disallow `bin` files that npm ignores.
 *
 * @see [no-unpublished-bin](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-unpublished-bin.md)
 */
export interface NoUnpublishedBinRule {
  /**
   * Disallow `bin` files that npm ignores.
   *
   * @see [no-unpublished-bin](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-unpublished-bin.md)
   */
  'n/no-unpublished-bin': NoUnpublishedBinRuleConfig;
}
