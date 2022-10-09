def get_key(val):
    for key, value in brackets.items():
        if val == value:
            return key


def solution(sequence):
    stack = []
    for char in sequence:
        if char in brackets.keys():
            stack.append(char)
        elif char in brackets.values():
            if len(stack) > 0 and get_key(char) == stack[-1]:
                stack.pop
            else:
                return False
    return len(stack) == 0


brackets = {"(": ")", "[": "]", "{": "}"}
print(solution("abcd(asdf)asdf(asdf(asdfasdfa())"))
