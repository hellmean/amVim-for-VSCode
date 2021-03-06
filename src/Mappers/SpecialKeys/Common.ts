import {RecursiveMap, MatchResultType} from '../Generic';

export interface SpecialKeyMatchResult {
    specialKey: SpecialKeyCommon;
    type: MatchResultType;
    matchedCount: number;
    additionalArgs: {};
}

export interface SpecialKeyCommon {
    indicator: string;

    unmapConflicts(node: RecursiveMap, keyToMap: string): void;
    match(inputs: string[]): SpecialKeyMatchResult;
}
