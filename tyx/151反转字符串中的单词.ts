// https://leetcode.cn/problems/reverse-words-in-a-string/description/
// https://www.programmercarl.com/0151.%E7%BF%BB%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%87%8C%E7%9A%84%E5%8D%95%E8%AF%8D.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
function reverseWords(s: string): string {
    /** Utils **/
    // 删除多余空格, 如'   hello     world   ' => 'hello world'
    function delExtraSpace(arr: string[]): void {
        let left: number = 0,
            right: number = 0,
            length: number = arr.length;
        while (right < length && arr[right] === ' ') {
            right++;
        }
        while (right < length) {
            if (arr[right] === ' ' && arr[right - 1] === ' ') {
                right++;
                continue;
            }
            arr[left++] = arr[right++];
        }
        if (arr[left - 1] === ' ') {
            arr.length = left - 1;
        } else {
            arr.length = left;
        }
    }
    // 翻转字符串，如：'hello' => 'olleh'
    function reverseWords(strArr: string[], start: number, end: number) {
        let temp: string;
        while (start < end) {
            temp = strArr[start];
            strArr[start] = strArr[end];
            strArr[end] = temp;
            start++;
            end--;
        }
    }

    /** Main code **/
    let strArr: string[] = s.split('');
    delExtraSpace(strArr);
    let length: number = strArr.length;
    // 翻转整个字符串
    reverseWords(strArr, 0, length - 1);
    let start: number = 0,
        end: number = 0;
    while (start < length) {
        end = start;
        while (strArr[end] !== ' ' && end < length) {
            end++;
        }
        // 翻转单个单词
        reverseWords(strArr, start, end - 1);
        start = end + 1;
    }
    return strArr.join('');
};