import getTransformedDate from "../utils/getTransformedDate";
import getRegularFromCamelCase from "../utils/getRegularFromCamelCase";

describe('Transform date from to human format (DD.MM.YYYY)', () => {
    const cases = [
        {
            string: '2023-11-02T00:00:00.000Z',
            expected: '2.11.2023',
            description: 'should handle ISO format'
        },
        {
            string: '2023-11-02',
            expected: '2.11.2023',
            description: 'should handle date without time'
        }
    ]
    
    cases.forEach(({description, string, expected}) => {
        test(description, () => {
            const result = getTransformedDate(string);
            expect(result).toEqual(expected);
        });
    })
})

describe("Transform text from camelCase to regular case with 1st letter capitalized", ()=>{
    test('should transform text', () => {
        const cases = [
            {
                code: 'camelCase',
                expected: 'Camel case',
            },
            {
                code: 'camelCaseWithMoreUppercaseLetters',
                expected: 'Camel case with more uppercase letters',
            }
        ]
        cases.forEach(({code, expected}) => {
            const result = getRegularFromCamelCase(code);
            expect(result).toEqual(expected);
        })
    });
});