import { describe, it } from 'vitest';
import { RuleTester } from '@typescript-eslint/utils/dist/ts-eslint';

import rule from './padded-describes';

describe('padded-describes', () => {

    it('works', () => {
        const ruleTester: RuleTester = new RuleTester({
            parser: require.resolve('@typescript-eslint/parser'),
        });

        ruleTester.run('padded-describes', rule, {
            valid: [
                {
                    code: `
                        describe('Something', () => {

                            it('is padded!', () => {
                                // ...
                            });

                        });
                    `,
                },
                {
                    code: `
                        describe('Something', () => {

                            it('is padded above!', () => {
                                // ...
                            });
                            it('is padded below!', () => {
                                // ...
                            });

                        });
                    `,
                },
            ],
            invalid: [
                {
                    code: `
                        describe('Something', () => {
                            it('is not padded!', () => {
                                // ...
                            });
                        });
                    `,
                    errors: [{ messageId: 'alwaysPadDescribe' }],
                    output: `
                        describe('Something', () => {

                            it('is not padded!', () => {
                                // ...
                            });

                        });
                    `,
                },
                {
                    code: `
                        describe('Something', () => {

                            it('is not padded!', () => {
                                // ...
                            });
                        });
                    `,
                    errors: [{ messageId: 'alwaysPadDescribe' }],
                    output: `
                        describe('Something', () => {

                            it('is not padded!', () => {
                                // ...
                            });

                        });
                    `,
                },
                {
                    code: `
                        describe('Something', () => {
                            it('is not padded!', () => {
                                // ...
                            });

                        });
                    `,
                    errors: [{ messageId: 'alwaysPadDescribe' }],
                    output: `
                        describe('Something', () => {

                            it('is not padded!', () => {
                                // ...
                            });

                        });
                    `,
                },
                {
                    code: `
                        describe('Something', () => {
                            it('is not padded!', () => {
                                // ...
                            });

                            it('not padded either!', () => {
                                // ...
                            });
                        });
                    `,
                    errors: [{ messageId: 'alwaysPadDescribe' }],
                    output: `
                        describe('Something', () => {

                            it('is not padded!', () => {
                                // ...
                            });

                            it('not padded either!', () => {
                                // ...
                            });

                        });
                    `,
                },
            ],
        });
    });

});
