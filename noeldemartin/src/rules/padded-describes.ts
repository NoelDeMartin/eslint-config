import type { RuleFix } from '@typescript-eslint/utils/dist/ts-eslint';
import type { TSESTree } from '@typescript-eslint/utils';

import { createESLintRule } from '@/utils';

function isDescribeBlock(node: TSESTree.BlockStatement): boolean {
    const grandfather = node.parent?.parent;

    return grandfather?.type === 'CallExpression'
        && 'name' in grandfather.callee
        && grandfather.callee.name === 'describe';
}

function isEmptyLine(line: string): boolean {
    return line.trim() === '';
}

export default createESLintRule({
    name: 'padded-describes',
    meta: {
        type: 'layout',
        docs: {
            description: 'Enforce padding on describe blocks',
            recommended: 'error',
        },
        fixable: 'whitespace',
        schema: [],
        messages: {
            alwaysPadDescribe: 'Describe block must be padded by blank lines.',
        },
    },
    defaultOptions: [],
    create: function(context) {
        return {
            BlockStatement(node) {
                if (!isDescribeBlock(node)) {
                    return;
                }

                const lines = context.getSourceCode().getLines();
                const lineBefore = (node.body[0]?.loc.start.line ?? 0) - 2;
                const lineAfter = node.body[node.body.length - 1]?.loc.end.line ?? 0;
                const lineBeforeIsEmpty = isEmptyLine(lines[lineBefore] ?? '');
                const lineAfterIsEmpty = isEmptyLine(lines[lineAfter] ?? '');

                if (lineBeforeIsEmpty && lineAfterIsEmpty) {
                    return;
                }

                context.report({
                    node,
                    messageId: 'alwaysPadDescribe',
                    fix(fixer) {
                        const firstLinePadding = lines[lineBefore + 1]?.match(/\s+/)?.[0].length ?? 0;
                        const start = (node.body[0]?.range[0] ?? 0) - firstLinePadding;
                        const end = node.body[node.body.length - 1]?.range[1] ?? 0;

                        return [
                            !lineBeforeIsEmpty && fixer.insertTextBeforeRange([start, start], '\n'),
                            !lineAfterIsEmpty && fixer.insertTextBeforeRange([end, end], '\n'),
                        ].filter((fix: RuleFix | false): fix is RuleFix => !!fix);
                    },
                });
            },
        };
    },
});
